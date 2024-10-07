import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  activeScreen = 0;
  mousePosition = { x: 0, y: 0 };
  scrolled = 0;

  image_parentUrl = "../../../../assets/";
  project = {
    title: "E-Commerce Dashboard",
    tagline: "Next Generation Shopping Experience",
    description: "An innovative dashboard that revolutionizes online store management with AI-powered insights, real-time analytics, and seamless user experience.",
    stats: [
      { label: "Development Time", value: "3 months", icon: this.image_parentUrl+"layers-minimalistic-svgrepo-com.svg" },
      { label: "Active Users", value: "2.5k+", icon: this.image_parentUrl+"users-svgrepo-com.svg" },
      { label: "Code Quality", value: "A+", icon: this.image_parentUrl+"code-1115-svgrepo-com.svg" }
    ],
    skills: [
      { name: "React", level: 90, color: "#61DAFB" },
      { name: "TypeScript", level: 85, color: "#3178C6" },
      { name: "Node.js", level: 80, color: "#339933" },
      { name: "GraphQL", level: 75, color: "#E535AB" }
    ],
    screenshots: Array(3).fill("https://www.w3schools.com/css/img_5terre.jpg")
    // screenshots: [
    //   "https://www.w3schools.com/css/img_5terre.jpg",
    //   "https://www.w3schools.com/css/img_lights.jpg",
    //   "https://www.w3schools.com/css/img_nature.jpg"
    // ]    
  };

  private scrollHandler: () => void;
  private mouseMoveHandler: (e: MouseEvent) => void;

  constructor() {
    this.scrollHandler = this.handleScroll.bind(this);
    this.mouseMoveHandler = this.handleMouseMove.bind(this);
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollHandler);
    window.addEventListener('mousemove', this.mouseMoveHandler);
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  handleScroll() {
    const position = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled = (position / height) * 100;
  }

  handleMouseMove(e: MouseEvent) {
    this.mousePosition = { x: e.clientX, y: e.clientY };
  }

  setActiveScreen(index: number): void {
    this.activeScreen = index;
  }

  trackByFn(index: number): number {
    return index;
  }


  onButtonHover(event: MouseEvent, translateY: number): void {
    const button = event.currentTarget as HTMLElement;
    button.style.transform = `translateY(${translateY}px)`;
  }

  onSecondaryButtonHover(event: MouseEvent, isEnter: boolean): void {
    const button = event.currentTarget as HTMLElement;
    button.style.transform = `translateY(${isEnter ? -2 : 0}px)`;
    button.style.background = isEnter ? 'rgba(99, 102, 241, 0.1)' : 'transparent';
  }

  onCardHover(event: MouseEvent, translateY: number): void {
    const card = event.currentTarget as HTMLElement;
    card.style.transform = `translateY(${translateY}px)`;
  }
}
