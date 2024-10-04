import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './project/components/main/main.component';
import { AboutMeComponent } from './project/components/about-me/about-me.component';
import { ProjectsComponent } from './project/components/projects/projects.component';
import { ContactMeComponent } from './project/components/contact-me/contact-me.component';
import { FooterComponent } from './project/components/footer/footer.component';
import { HireMeDialogComponent } from './project/components/dialogs/hire-me-dialog/hire-me-dialog.component';
import { BlogsComponent } from './project/components/blogs/blogs.component';
import { NavigationComponent } from './project/components/navigation/navigation.component';
import { HomeComponent } from './project/components/home/home.component';
import { BlogSpecificationComponent } from './project/components/blog-specification/blog-specification.component';
import { SkillsComponent } from './project/components/skills/skills.component';
import { AboutMeBreifIntroComponent } from './project/components/about-me-breif-intro/about-me-breif-intro.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactMeComponent,
    FooterComponent,
    HireMeDialogComponent,
    BlogsComponent,
    NavigationComponent,
    HomeComponent,
    BlogSpecificationComponent,
    SkillsComponent,
    AboutMeBreifIntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
