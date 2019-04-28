import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormComponent } from '../routes/form/form.component';
import { FormModule } from '../routes/form/form.module';
@NgModule({
  imports: [
    CommonModule,
    FormModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormModule,
    RouterModule]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }

}
