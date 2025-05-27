import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from "./pages/home/home.module";
import { AboutModule } from "./pages/about/about.module";
import { ProjectsModule } from "./pages/projects/projects.module";
import { ResumeModule } from "./pages/resume/resume.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    AboutModule,
    ProjectsModule,
    ResumeModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
