import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss',
})
export class ReactiveForm {
  courseForm = new FormGroup({
    fullName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    skills: new FormArray([]),
    terms: new FormControl(false, [Validators.requiredTrue]),
  });

  get skills(): FormArray {
    return this.courseForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(new FormControl('', Validators.required));
  }

  removeSkill(index: number) {
    this.skills.removeAt(index);
  }

  onSubmit() {
    console.log(this.courseForm);
    console.log('valid?', this.courseForm.valid);
    if (this.courseForm.valid) {
      console.log(this.courseForm.value);
      alert('Enrollment successful!');
      this.courseForm.reset();
    } else {
      alert('please fix the errors before submitting');
    }
  }
}
