import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


interface Star {
  width: string;
  height: string;
  top: string;
  left: string;
  animation: string;
  opacity: number;
}


@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  animations: [
    trigger('cardHover', [
      state('normal', style({
        transform: 'scale(1)'
      })),
      state('hovered', style({
        transform: 'scale(1.02)'
      })),
      transition('normal <=> hovered', animate('300ms ease-out'))
    ]),
    trigger('likeAnimation', [
      state('normal', style({ transform: 'scale(1)' })),
      state('liked', style({ transform: 'scale(1)' })),
      transition('normal => liked', [
        animate('300ms ease-out', style({ transform: 'scale(1.3)' })),
        animate('150ms ease-in')
      ])
    ]),
    trigger('buttonHover', [
      state('normal', style({ transform: 'translateY(0)' })),
      state('hovered', style({ transform: 'translateY(-2px)' })),
      transition('normal <=> hovered', animate('200ms ease-out'))
    ])
  ]
})
export class BlogsComponent implements OnInit, OnDestroy {
   title: string = 'Delicious Pizza Cooking Recipe';
  subtitle: string = 'in just 2 minutes';
  excerpt: string = 'Lorem ipsum dolor sit amet...';
  author: string = 'Sanket Satpute';
   date: string = '20, Jan 24';
   category: string = 'xyz';
   imageUrl = 'https://www.w3schools.com/css/img_5terre.jpg';
   authorName: string = 'Sanket Satpute';
   authorImage: string = 'https://www.w3schools.com/css/img_5terre.jpg'


  //  isHovered = false;
  // starCount = 0;

  // stars: Star[] = []; // Define the type of the stars array
  // ngOnInit() {
  //   // this.animateStars();
  //   this.generateStars();
  // }

  // isHovered: boolean = false;
  // isLiked: boolean = false;
  // likes: number = 124;
  // comments: number = 15;
  // starCount: number = 0;
  // stars: any[] = [];
  // private interval: any;

  // ngOnInit() {
  //   this.generateStars();
  //   this.startStarAnimation();
  // }

  // isHovered: boolean = false;
  // isLiked: boolean = false;
  // likes: number = 124;
  // comments: number = 15;
  // starCount: number = 0;
  // stars: any[] = [];
  // private interval: any;

  // ngOnDestroy() {
  //   if (this.interval) {
  //     clearInterval(this.interval);
  //   }
  // }

  // generateStars() {
  //   this.stars = Array(200).fill(0).map(() => ({
  //     size: Math.random() * 2 + 1,
  //     top: Math.random() * 100,
  //     left: Math.random() * 100,
  //     delay: Math.random() * 5,
  //     duration: Math.random() * 5 + 5
  //   }));
  // }

  // startStarAnimation() {
  //   this.interval = setInterval(() => {
  //     this.starCount = (this.starCount + 1) % 200;
  //   }, 50);
  // }

  // setHovered(value: boolean) {
  //   this.isHovered = value;
  // }

  // toggleLike() {
  //   this.isLiked = !this.isLiked;
  //   this.likes += this.isLiked ? 1 : -1;
  // }

  // getInitials(name: string): string {
  //   return name
  //     .split(' ')
  //     .map(word => word[0])
  //     .join('')
  //     .toUpperCase();
  // }

  // lexem


  // likes: number = 124;
  // comments: number = 15;
  // isLiked: boolean = false;
  // getInitials(name: string): string {
  //   return name
  //     .split(' ')
  //     .map(word => word[0])
  //     .join('')
  //     .toUpperCase();
  // }

  // toggleLike(): void {
  //   this.isLiked = !this.isLiked;
  //   this.likes += this.isLiked ? 1 : -1;
  // }

  // generateStars() {
  //   this.stars = Array(200).fill(0).map(() => ({
  //     width: (Math.random() * 2 + 1) + 'px',
  //     height: (Math.random() * 2 + 1) + 'px',
  //     top: (Math.random() * 100) + '%',
  //     left: (Math.random() * 100) + '%',
  //     animation: `twinkle ${Math.random() * 5 + 5}s linear infinite ${Math.random() * 5}s`,
  //     opacity: Math.random() > 0.5 ? 0.7 : 0
  //   }));
  // }

  // animateStars() {
  //   setInterval(() => {
  //     this.starCount = (this.starCount + 1) % 200;
  //   }, 50);
  // }

  // onMouseEnter() {
  //   this.isHovered = true;
  // }

  // onMouseLeave() {
  //   this.isHovered = false;
  // }

  isHovered = false;
  starCount = 0;
  stars: { size: number; top: number; left: number; duration: number; delay: number }[] = [];
  private interval: any;

  ngOnInit() {
    this.generateStars();
    this.interval = setInterval(() => {
      this.starCount = (this.starCount + 1) % 200;
    }, 50);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private generateStars() {
    this.stars = Array(200).fill(0).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5
    }));
  }
}
