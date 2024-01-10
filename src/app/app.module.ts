import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TemplateModule} from './template/template.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
