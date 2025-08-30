import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm) {
    console.log('is form is valid', form.valid);
    console.log(
      'passwords match',
      this.registerForm.password === this.registerForm.confirmpassword
    );
    if (
      form.valid &&
      this.registerForm.password === this.registerForm.confirmpassword
    ) {
      console.log(this.registerForm);
      alert('Registration successful!');
      form.reset();
    } else {
      alert('please fill the form correctly!');
    }
  }
}
