import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeBreifIntroComponent } from './about-me-breif-intro.component';

describe('AboutMeBreifIntroComponent', () => {
  let component: AboutMeBreifIntroComponent;
  let fixture: ComponentFixture<AboutMeBreifIntroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMeBreifIntroComponent]
    });
    fixture = TestBed.createComponent(AboutMeBreifIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
