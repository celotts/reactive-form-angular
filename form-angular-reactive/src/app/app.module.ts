import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormModule } from './routes/form/form.module';
import { SharedModule } from './shared/shared.module';
import { routes } from './routes/routes';
import { RoutesModule } from './routes/routes.module';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    SharedModule.forRoot(),
    RoutesModule,


  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
