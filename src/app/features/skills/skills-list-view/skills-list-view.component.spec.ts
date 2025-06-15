import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListViewComponent } from './skills-list-view.component';

describe('SkillsListViewComponent', () => {
  let component: SkillsListViewComponent;
  let fixture: ComponentFixture<SkillsListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsListViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
