import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ FormComponent],
  declarations: [FormComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
