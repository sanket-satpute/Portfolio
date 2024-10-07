import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const card = this.el.nativeElement.querySelector('.card-more');
    const corners = this.el.nativeElement.querySelectorAll('.corner');
    const circle = this.el.nativeElement.querySelector('.circle-more');
    const text = this.el.nativeElement.querySelector('.text-more');

    this.renderer.listen(card, 'mousemove', (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const angleX = (y - centerY) / 30;
      const angleY = (centerX - x) / 20;

      this.renderer.setStyle(card, 'transform', `perspective(200px) rotateX(${angleX}deg) rotateY(${angleY}deg)`);

      corners.forEach((corner: HTMLElement) => {
        const isLeft = corner.classList.contains('corner-tl') || corner.classList.contains('corner-bl');
        const isTop = corner.classList.contains('corner-tl') || corner.classList.contains('corner-tr');
        const rotateX = isTop ? angleX : -angleX;
        const rotateY = isLeft ? -angleY : angleY;
        this.renderer.setStyle(corner, 'transform', `rotate3d(${isTop ? 0 : 1}, ${isLeft ? 0 : 1}, 0, ${Math.sqrt(rotateX * rotateX + rotateY * rotateY)}deg)`);
      });

      this.renderer.setStyle(circle, 'transform', `translate(${angleY * 3}px, ${-angleX * 3}px)`);
      this.renderer.setStyle(text, 'transform', `translate(${angleY * 1.5}px, ${-angleX * 1.5}px)`);
    });

    this.renderer.listen(card, 'mouseleave', () => {
      this.renderer.setStyle(card, 'transform', 'none');
      corners.forEach((corner: HTMLElement) => this.renderer.setStyle(corner, 'transform', 'none'));
      this.renderer.setStyle(circle, 'transform', 'none');
      this.renderer.setStyle(text, 'transform', 'none');
    });
  }
}