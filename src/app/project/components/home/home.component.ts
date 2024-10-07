import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  private texts: string[] = ['Software Engineer', 'Full Stack Developer', 'Android Developer', 'Java Developer', 'Cloud Engineer', 'Backend Developer'];
  private currentIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private delayBetweenTexts = 2000;
  private cursorVisible = true;

  private typingTimeoutId: any;
  private cursorTimeoutId: any;

  imgPath = '';

  ngOnInit() {
    let width = window.innerWidth;
    if(width > 768) {
      this.imgPath = '../../../../assets/showing-direction-img-removebg-preview.png';
    } else {
      this.imgPath = '../../../../assets/1000_F_291392618_9ub6nM9ONO7hi6TU5BdmIZYxjldxoFio-removebg-preview.png';
    }
    this.animateText();
    this.blinkCursor();
  }

  ngOnDestroy() {
    if (this.typingTimeoutId) {
      clearTimeout(this.typingTimeoutId);
    }
    if (this.cursorTimeoutId) {
      clearTimeout(this.cursorTimeoutId);
    }
  }

  private animateText() {
    const currentText = this.texts[this.currentIndex];
    const textElement = document.getElementById('animated-text');

    if (!textElement) return;

    if (this.isDeleting) {
      textElement.textContent = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      textElement.textContent = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    // Add the cursor
    textElement.innerHTML += '<span id="cursor">|</span>';

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = this.delayBetweenTexts;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
    }

    this.typingTimeoutId = setTimeout(() => this.animateText(), typeSpeed);
  }

  private blinkCursor() {
    const cursorElement = document.getElementById('cursor');
    if (cursorElement) {
      this.cursorVisible = !this.cursorVisible;
      cursorElement.style.opacity = this.cursorVisible ? '1' : '0';
    }
    this.cursorTimeoutId = setTimeout(() => this.blinkCursor(), 530); // Blink every 530ms
  }
}
