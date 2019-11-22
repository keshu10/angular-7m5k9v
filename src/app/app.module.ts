import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,              HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, NavComponent, HomeComponent, AboutComponent, ContactComponent],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
