import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { DataComponent } from './data/data.component';
import { EducationComponent } from './education/education.component';
// import { CareerComponent } from './career/career.component';
import { CertificationComponent } from './certification/certification.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    // SkillsComponent,
    ContactComponent,
    CourseComponent,
    DataComponent,
    EducationComponent,
    // CareerComponent,
    CertificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
