import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './project/components/main/main.component';
import { BlogsComponent } from './project/components/blogs/blogs.component';
import { BlogSpecificationComponent } from './project/components/blog-specification/blog-specification.component';
import { HireMeDialogComponent } from './project/components/dialogs/hire-me-dialog/hire-me-dialog.component';
import { AboutMeBreifIntroComponent } from './project/components/about-me-breif-intro/about-me-breif-intro.component';
import { ProjectDetailsComponent } from './project/components/project-details/project-details.component';
import { SkillsSectionComponent } from './project/components/skills-section/skills-section.component';
import { ProjectsListsComponent } from './project/components/projects-lists/projects-lists.component';

const routes: Routes = [
  {
    path:'', component: MainComponent
  },
  {
    path:'about-me-brief-intro', component: AboutMeBreifIntroComponent
  },
  {
    path: 'blogs', component: BlogsComponent
  },
  {
    path:'describe-blog/:id', component: BlogSpecificationComponent
  },
  {
    path: 'hire-me-dialog', component: HireMeDialogComponent
  },
  {
    path: 'project-details/:id', component: ProjectDetailsComponent
  },
  {
    path: 'skills-section', component: SkillsSectionComponent
  },
  {
    path: 'projects-list', component: ProjectsListsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled', // Restores scroll position
      anchorScrolling: 'enabled',           // Enables anchor scrolling
      scrollOffset: [0, 0],                 // Optional: scroll offset
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
