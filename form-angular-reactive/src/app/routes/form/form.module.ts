import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { FormComponent } from './form.component';
import { FormDetailComponent } from './form-detail/form-detail.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [ FormComponent, FormDetailComponent],
  declarations: [FormComponent, FormDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
