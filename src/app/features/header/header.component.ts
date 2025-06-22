import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, computed, effect, inject } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-mobile-view.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  activeSection = 'home';
  isDarkMode = false;
  navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'qualification', label: 'Qualification' },
  ];

  mobileNavLinks = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'qualification', label: 'Qualification', icon: '🎓' },
    // { id: 'projects', label: 'Projects', icon: '💼' },
    // { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  sections = ['home', 'about', 'skills', 'qualification'];
  breakpointObserver = inject(BreakpointObserver);
  breakpointSignal = toSignal(this.breakpointObserver.observe([
    '(max-width: 768px)', // Portrait phones and small tablets,
    '(max-width: 1024px)',
    '(max-width: 1024px) and (max-height: 600px)' // Landscape phones
  ]).pipe(map((result) => result.matches)));
  hamburgerLines = Array(3).map((_, i) => i);

  isMobilePortrait = toSignal(this.breakpointObserver.observe('(max-width: 768px) and (orientation: landscape)').pipe(map((result) => result.matches)));
isMobileGeneral = toSignal(this.breakpointObserver.observe('(max-width: 480px)').pipe(map((result) => result.matches)));

// Combine conditions
shouldShowMobileMenu = computed(() => this.isMobilePortrait() || this.isMobileGeneral());

  ngOnInit() {
    // Check for saved theme preference or default to light mode
    
    // Set isDarkMode based on saved preference or system preference
    
    // Apply theme
    this.applyTheme();
    
    // Set initial active section
    this.updateActiveSection();
    
    // Add scroll listener for intersection observer
    this.observeSections();
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

  scrollToSection(sectionId: string) {
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
    // localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    // // Remove both classes first to ensure clean state
    // document.documentElement.classList.remove('dark', 'light');
    
    // if (this.isDarkMode) {
    //   document.documentElement.classList.add('dark');
    //   document.body.setAttribute('data-theme', 'dark');
    // } else {
    //   document.documentElement.classList.add('light');
    //   document.body.setAttribute('data-theme', 'light');
    // }
    
    // // Also set a CSS custom property for theme
    // document.documentElement.style.setProperty('--theme-mode', this.isDarkMode ? 'dark' : 'light');
  }

  private updateActiveSection() {
    const scrollPosition = window.scrollY + 100; // Offset for header
    
    for (let i = this.sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(this.sections[i]);
      if (section && section.offsetTop <= scrollPosition) {
        this.activeSection = this.sections[i];
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
    const sections = ['home', 'about', 'skills', 'qualification'];
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  }}

