import { LayoutComponent } from "../layout/layout.component";
import { FormComponent } from "./form/form.component";

export const routes = [
       {
              path: '',
              component: LayoutComponent,
              children: [
                     { path: '', redirectTo: 'home', pathMatch: 'full' },
                     { path: 'formulario', component: FormComponent }
              ]
        }
]