import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DniComponent } from './dni/dni.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import  'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    DniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
