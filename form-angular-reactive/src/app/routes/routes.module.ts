import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes,{ useHash:true, onSameUrlNavigation:'reload' })
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutesModule { }
