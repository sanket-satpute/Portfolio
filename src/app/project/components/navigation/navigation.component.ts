import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  @ViewChild('overlay') overlay!: ElementRef;

  isOverlayVisible = false;

  toggleOverlay(show: boolean): void {
    this.isOverlayVisible = show;
    if (this.overlay) {
      if (show) {
        this.overlay.nativeElement.style.bottom = '0';
        this.overlay.nativeElement.style.height = '100vh';
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
}
