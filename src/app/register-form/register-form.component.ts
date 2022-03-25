import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit, AfterViewInit {

  @ViewChild('registrationForm') registrationForm: NgForm;
  @ViewChild('username') username: NgModel;

  buildingSistems: string[] = [
    'Designer',
    'Architect',
    'Analyst'
  ]

  telSistems: string[] = [
    '+359',
    '+971',
    '+49',
    '+30'
  ]
  constructor() { }
  
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.username);
  }

  onSubmit(): void {
    console.log(this.registrationForm.value);
  }

  clearForm(): void {
    this.registrationForm.reset();
  }

}
