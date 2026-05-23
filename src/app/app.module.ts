import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { TickerComponent } from './components/ticker/ticker.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ProcessComponent } from './components/process/process.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiceModalComponent } from './components/service-modal/service-modal.component';
import { CursorComponent } from './components/cursor/cursor.component';
import { WorksComponent } from './components/works/works.component';
import { WorksModalComponent } from './components/works-modal/works-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    TickerComponent,
    ServicesComponent,
    AboutComponent,
    TechnologiesComponent,
    ProcessComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    ServiceModalComponent,
    CursorComponent,
    WorksComponent,
    WorksModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
