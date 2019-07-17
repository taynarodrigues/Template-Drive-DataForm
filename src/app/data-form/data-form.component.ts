
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) {
   }

  ngOnInit() {

      this.formulario = this.formBuilder.group({
        nome: [null, Validators.required],
        email: [null,[Validators.required, Validators.email]]
      });
  }

  onSubmit(){
    console.log(this.formulario.value);
  }
}
