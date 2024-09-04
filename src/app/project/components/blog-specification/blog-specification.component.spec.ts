import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogSpecificationComponent } from './blog-specification.component';

describe('BlogSpecificationComponent', () => {
  let component: BlogSpecificationComponent;
  let fixture: ComponentFixture<BlogSpecificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogSpecificationComponent]
    });
    fixture = TestBed.createComponent(BlogSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
