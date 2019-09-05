import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import { ImgComponent } from './images/img/img.component';
import { ListComponent } from './images/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImgComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
