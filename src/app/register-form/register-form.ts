import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterForm {
  registerForm = {
    name: '',
    email: '',
    password: '',
    confirmpassword: '',
    gender: '',
  };

  onSubmit(form: any) {
    console.log(this.registerForm);
  }
}
