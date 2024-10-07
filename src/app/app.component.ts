import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  developer_name = "Sanket Satpute";
  // links
  github_link = "https://github.com/sanket-satpute";
  linkedin_link = "https://www.linkedin.com/in/sanket-satpute-b1688225a/";
  facebook_link = "https://www.facebook.com/sanket.satpute.3975";
  instagram_link = "https://www.instagram.com/sanket_7put/";

  normal_images_path = '../../../../assets/';
  diploy_images_path = 'assets/';

  current_image_path = this.diploy_images_path; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.parseUrl(this.router.url).fragment;
        if (fragment) {
          document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
}
