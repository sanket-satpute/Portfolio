import { Component, OnInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  link: string;
}

@Component({
  selector: 'app-projects-lists',
  templateUrl: './projects-lists.component.html',
  styleUrls: ['./projects-lists.component.css']
})
export class ProjectsListsComponent implements OnInit {
  projects: Project[] = [
    {
      id: 1,
      title: "AI-Powered Health Assistant",
      description: "A mobile app that uses machine learning to provide personalized health recommendations.",
      image: "https://images.all-free-download.com/images/graphiclarge/beautiful_nature_landscape_05_hd_picture_166223.jpg",
      technologies: ["React Native", "TensorFlow", "Node.js"],
      category: "Mobile App",
      link: "https://example.com/health-assistant"
    },
    {
      id: 2,
      title: "Blockchain Voting System",
      description: "A secure and transparent voting platform built on blockchain technology.",
      image: "https://images.all-free-download.com/images/graphiclarge/beautiful_nature_landscape_05_hd_picture_166223.jpg",
      technologies: ["Ethereum", "Solidity", "Web3.js"],
      category: "Web App",
      link: "https://example.com/blockchain-voting"
    },
    {
      id: 3,
      title: "Smart Home Automation Hub",
      description: "An IoT platform that integrates various smart home devices for seamless control.",
      image: "https://images.all-free-download.com/images/graphiclarge/beautiful_nature_landscape_05_hd_picture_166223.jpg",
      technologies: ["Python", "MQTT", "Raspberry Pi"],
      category: "IoT",
      link: "https://example.com/smart-home"
    },
    {
      id: 3,
      title: "Smart Home Automation Hub",
      description: "An IoT platform that integrates various smart home devices for seamless control.",
      image: "https://images.all-free-download.com/images/graphiclarge/beautiful_nature_landscape_05_hd_picture_166223.jpg",
      technologies: ["Python", "MQTT", "Raspberry Pi"],
      category: "IoT",
      link: "https://example.com/smart-home"
    },
    {
      id: 3,
      title: "Smart Home Automation Hub",
      description: "An IoT platform that integrates various smart home devices for seamless control.",
      image: "https://images.all-free-download.com/images/graphiclarge/beautiful_nature_landscape_05_hd_picture_166223.jpg",
      technologies: ["Python", "MQTT", "Raspberry Pi"],
      category: "IoT",
      link: "https://example.com/smart-home"
    },
    // Add more projects as needed
  ];

  categories: string[] = ['All', 'Web App', 'Mobile App', 'IoT'];
  selectedCategory: string = 'All';
  hoveredProject: Project | null = null;

  ngOnInit(): void {}

  filterProjects(category: string): void {
    this.selectedCategory = category;
  }

  get filteredProjects(): Project[] {
    return this.selectedCategory === 'All'
      ? this.projects
      : this.projects.filter(project => project.category === this.selectedCategory);
  }

  setHoveredProject(project: Project | null): void {
    this.hoveredProject = project;
  }
}