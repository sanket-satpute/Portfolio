import { Component, ElementRef, ViewChild, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @ViewChild('overlay') overlay!: ElementRef;

  isOverlayVisible = false;
  activeLink = 'home';

  toggleOverlay(show: boolean): void {
    this.isOverlayVisible = show;
    if (this.overlay) {
      if (show) {
        this.overlay.nativeElement.style.bottom = '0';
        this.overlay.nativeElement.style.height = '100%';
      } else {
        this.overlay.nativeElement.style.bottom = '100%';
        this.overlay.nativeElement.style.height = '0';
      }
    }
  }

  onHamburgerClick(): void {
    this.toggleOverlay(true);
  }

  onCrossButtonClick(): void {
    this.toggleOverlay(false);
  }

  setActiveLink(section: string, isPhone: boolean): void {
    if(section == 'blog') {
      this.activeLink = section;
    }
    else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        this.activeLink = section;
      }
      if(isPhone)
        this.onCrossButtonClick();
    }
  }


   // Sections' IDs you want to track
   sectionIds = ['home', 'about-me', 'projects', 'skills', 'contact-me', 'blogs'];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let currentSection = '';

    // Loop through each section and check if it's in view
    for (let id of this.sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          if(currentSection != 'blogs') {
            currentSection = id;
            console.log("now scrolled to " + currentSection);
            break;
          }
        }
      }
    }

    // Update active link if the current section has changed
    if (currentSection && currentSection !== this.activeLink) {
      this.activeLink = currentSection;
    }
  }

  // Method to scroll to a specific section when a link is clicked
  scrollToSection(section: string) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeLink = section;
    }
  }

}
