import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponentComponent } from './SharedModule/button-component/button-component.component';
import { ListComponentComponent } from './SharedModule/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponentComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
