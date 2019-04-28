import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states } from 'src/app/data-model';
@Component({
  selector: 'app-form-detail',
  templateUrl: './form-detail.component.html',
  styleUrls: ['./form-detail.component.scss']
})
export class FormDetailComponent implements OnInit {
  heroForm: FormGroup;
  states = states;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createrForm();
  }
  createrForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required ],
      street: '',
      city: '',
      state: '',
      zip: '',
      power: 'x-ray vision',
      sidekick: true
    });
  }

}
