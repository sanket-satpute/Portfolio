import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-about-me-breif-intro',
  templateUrl: './about-me-breif-intro.component.html',
  styleUrls: ['./about-me-breif-intro.component.css']
})
export class AboutMeBreifIntroComponent implements OnInit, AfterViewInit {
  // @ViewChild(NavigationComponent) navCompo: NavigationComponent = new NavigationComponent;

  // constructor(public navCompo: NavigationComponent) { }

  ngOnInit() { 

  }

  ngAfterViewInit() {
  //   if(this.navCompo != null)
  //   this.navCompo.activeLink = 'about-me';
  // else
  // console.log('Navigation component not found');
  }
}
