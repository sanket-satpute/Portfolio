import { Component, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {

  constructor(protected appTs: AppComponent, private router:Router) {}

  @ViewChildren('circle') circles!: QueryList<ElementRef>;
  percentages = [78, 91, 64, 45];
  skills = [
    {
      skName:'Java',
      skDesc:'bdbcb jbca cnclkn ;m,aa cnclan csacnakc as cdcl pjqndnd kdnakdand dndnn  nakncknkasn',
      skPercent:78,
      skColor: '#4CAF50',
      skInColor:'#3C2DF0'
    },
    {
      skName:'Python',
      skDesc:'bdbcb jbca cnclkn ;m,aa cnclan csacnakc as cdcl pjqndnd kdnakdand dndnn  nakncknkasn',
      skPercent:61,
      skColor: '#FFC107',
      skInColor:'#D45F5F'
    },
    {
      skName:'Angular',
      skDesc:'bdbcb jbca cnclkn ;m,aa cnclan csacnakc as cdcl pjqndnd kdnakdand dndnn  nakncknkasn',
      skPercent:84,
      skColor: '#9C27B0',
      skInColor:'#4DC16E'
    },
    {
      skName:'Spring Boot',
      skDesc:'bdbcb jbca cnclkn ;m,aa cnclan csacnakc as cdcl pjqndnd kdnakdand dndnn  nakncknkasn',
      skPercent:78,
      skColor: '#8BC34A',
      skInColor:'#2F6B00'
    }
  ]

  ngAfterViewInit() {
    this.circles.forEach((circle, index) => {
      let curObj = this.getObj(index);
      const percentage = this.percentages[index];
      const strokeDashoffset = 400 - (300 * curObj.skPercent) / 100;
      // const strokeDashoffset = 20 - (500 * curObj.skPercent) / 100;
      const circleElement = circle.nativeElement;
      circleElement.style.strokeDashoffset = strokeDashoffset;
      circleElement.style.stroke = curObj.skColor;
    });
  }

  getObj(index: number): any {
    return this.skills[index];
  }

  showMoreSkills() {
    this.router.navigate(['/skills-section']);
  }
}
