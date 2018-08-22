import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpGetMethodComponent } from './http-get-method/http-get-method.component';

const appRoutes: Routes=[
  { path:'http-get-method', component:HttpGetMethodComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HttpGetMethodComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
