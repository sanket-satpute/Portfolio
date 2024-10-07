import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { faCoffee, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IconProviderService } from '../../services/icon-provider.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
  description: string;
  tags: string[];
  category: string;
  projects: number;
  color:string;
}

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css']
})
export class SkillsSectionComponent implements OnInit, AfterViewInit {

  red= 'red';

  defaultIcon: IconDefinition = faCoffee;

  getIcons(iconName:string):IconDefinition {
    let ico = this.iconService.getIcon(iconName);
    return ((ico != null) ? ico : this.defaultIcon);
  }

  getColor(skillLevel: number): string {
    if (skillLevel > 80) {
      return 'green';
    } else if (skillLevel > 50) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  constructor(private iconService:IconProviderService) { }

  ngOnInit(): void {
  }

  progress: number = 70;
  color: string = '#4caf50'; // Default color

  skills: Skill[] = [
    {
      name: 'Angular',
      level: 95,
      icon: 'angular',
      description: 'Expert in building robust SPAs with Angular framework',
      tags: ['TypeScript', 'RxJS', 'NGRX'],
      category: 'Frontend',
      projects: 30,
      color:'#DD0031'
    },
    {
      name: 'React',
      level: 57,
      icon: 'react',
      description: 'Proficient in creating dynamic UIs with React',
      tags: ['JSX', 'Redux', 'Hooks'],
      category: 'Frontend',
      projects: 25,
      color:'#61DAFB'
    },
    {
      name: 'Node.js',
      level: 76,
      icon: 'nodejs',
      description: 'Experienced in server-side JavaScript with Node.js',
      tags: ['Express', 'MongoDB', 'RESTful APIs'],
      category: 'Backend',
      projects: 22,
      color:'#339933'
    },
    {
      name: 'Python',
      level: 89,
      icon: 'python',
      description: 'Skilled in Python for data analysis and backend development',
      tags: ['Django', 'Flask', 'Pandas'],
      category: 'Backend',
      projects: 18,
      color: '#3776AB'
    },
    {
      name: 'DevOps',
      level: 45,
      icon: 'devops',
      description: 'Proficient in CI/CD and cloud deployment',
      tags: ['Docker', 'Kubernetes', 'Jenkins'],
      category: 'DevOps',
      projects: 15,
      color:'#0078D7'
    }
  ];

  categories = ['All', 'Frontend', 'Backend', 'DevOps'];
  selectedCategory = 'All';

  // scroll mode start
  @ViewChild('overviewSection') overviewSection!: ElementRef;
  @ViewChild('developmentSection') developmentSection!: ElementRef;
  @ViewChild('designSection') designSection!: ElementRef;

  activeSection: string = 'overview';

  ngAfterViewInit() {
    this.setupScrollObserver();
  }

  scrollTo(section: string) {
    let element: ElementRef;
    switch (section) {
      case 'overview':
        element = this.overviewSection;
        break;
      case 'development':
        element = this.developmentSection;
        break;
      case 'design':
        element = this.designSection;
        break;
      default:
        return;
    }
    element.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  setupScrollObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    observer.observe(this.overviewSection.nativeElement);
    observer.observe(this.developmentSection.nativeElement);
    observer.observe(this.designSection.nativeElement);
  }
// scroll mode end

  filterByCategory(category: string): void {
    this.selectedCategory = category;
  }

  get filteredSkills(): Skill[] {
    return this.selectedCategory === 'All' 
      ? this.skills 
      : this.skills.filter(skill => skill.category === this.selectedCategory);
  }

  getGradientUrl(skillName: string): string {
    return `url(#${skillName.toLowerCase()}Gradient)`;
  }

  calcProgress(level: number): string {
    const circumference = 100;
    return `${circumference} ${circumference - (level / 100) * circumference}`;
  }
}