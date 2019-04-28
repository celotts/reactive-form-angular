import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'form-angular-reactive';
  constructor(private router: Router) {}
  ngOnInit() {
    //debugger
    this.router.navigate(["/formulario"])
  }
}
