import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  isDarkMode = false;

  ngOnInit() {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set isDarkMode based on saved preference or system preference
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = prefersDark;
    }
    
    // Apply theme
    this.applyTheme();
    
    // Set initial active section
    this.updateActiveSection();
    
    // Add scroll listener for intersection observer
    this.observeSections();
  }

  ngOnDestroy() {
    // Clean up any observers if needed
    // Restore body overflow when component is destroyed
    // document.body.style.overflow = '';
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    // Update scrolled state for header styling
    this.isScrolled = window.pageYOffset > 50;
    
    // Update active section based on scroll position
    this.updateActiveSection();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey() {
    // Close mobile menu on escape key
    if (this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  scrolltoSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Update active section
      this.activeSection = sectionId;
      
      // Close mobile menu if open
      if (this.isMobileMenuOpen) {
        this.closeMobileMenu();
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.activeSection = 'home';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    
    // Prevent body scroll when menu is open
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    // Remove both classes first to ensure clean state
    document.documentElement.classList.remove('dark', 'light');
    
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.body.setAttribute('data-theme', 'light');
    }
    
    // Also set a CSS custom property for theme
    document.documentElement.style.setProperty('--theme-mode', this.isDarkMode ? 'dark' : 'light');
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'skills', 'qualification', 'projects', 'contact'];
    const scrollPosition = window.pageYOffset + 100; // Offset for header
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = sections[i];
        break;
      }
    }
  }

  private observeSections() {
    // Intersection Observer for more accurate section detection
    const options = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    // Observe all sections
    const sections = ['home', 'about', 'skills', 'qualification', 'projects', 'contact'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  }}

// Additional utility functions you might need

// Smooth scroll polyfill for older browsers
// if(document && document.documentElement){
//   if (!('scrollBehavior' in document.documentElement.style)) {
//     const smoothScrollPolyfill = () => {
//       // Add smooth scroll polyfill here if needed
//       console.log('Smooth scroll not supported, consider adding polyfill');
//     };
//     smoothScrollPolyfill();
//   }

