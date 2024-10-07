import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsListsComponent } from './projects-lists.component';

describe('ProjectsListsComponent', () => {
  let component: ProjectsListsComponent;
  let fixture: ComponentFixture<ProjectsListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsListsComponent]
    });
    fixture = TestBed.createComponent(ProjectsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
