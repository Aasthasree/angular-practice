import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostList } from './post-list/post-list';
import { RegisterForm } from './register-form/register-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostList, RegisterForm],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-practice');
}
