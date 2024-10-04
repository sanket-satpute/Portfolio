import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './project/components/main/main.component';
import { BlogsComponent } from './project/components/blogs/blogs.component';
import { BlogSpecificationComponent } from './project/components/blog-specification/blog-specification.component';
import { HireMeDialogComponent } from './project/components/dialogs/hire-me-dialog/hire-me-dialog.component';
import { AboutMeBreifIntroComponent } from './project/components/about-me-breif-intro/about-me-breif-intro.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
