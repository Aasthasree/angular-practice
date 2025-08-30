import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding-directive',
  imports: [FormsModule, CommonModule],
  templateUrl: './databinding-directive.html',
  styleUrl: './databinding-directive.scss',
})
export class DatabindingDirective {
  // Interpolation
  title = 'Student Management system';

  // Two-way binding search
  searchText: string = '';

  // property Binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.png';

  // student List
  students = [
    { name: 'John', marks: '85' },
    { name: 'Jane', marks: '90' },
    { name: 'Jim', marks: '30' },
    { name: 'Jill', marks: '70' },
    { name: 'Jack', marks: '45' },
  ];

  addStudent() {
    const randomMarks = Math.floor(Math.random() * 100) + 1;
    this.students.push({
      name: `New Student ${this.students.length + 1}`,
      marks: randomMarks.toString(),
    });
  }

  get filteredStudents() {
    return this.students.filter((student) =>
      student.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
