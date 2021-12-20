import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

//video https://www.youtube.com/watch?v=n_KxW2JMDXM&list=PLIbWwxXce3VqQxabv3aT0nHnhHQH6F-qG&index=5
//sobre import forms
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
