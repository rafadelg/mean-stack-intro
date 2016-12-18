import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { OtherComponent } from './other/other.component';
import { OtherproviderComponent } from './otherprovider/otherprovider.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    OtherComponent,
    OtherproviderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
