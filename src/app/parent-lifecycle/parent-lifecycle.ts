import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Lifecycledemo } from '../lifecycledemo/lifecycledemo';

@Component({
  selector: 'app-parent-lifecycle',
  standalone: true,
  imports: [CommonModule, FormsModule, Lifecycledemo],
  templateUrl: './parent-lifecycle.html',
  styleUrls: ['./parent-lifecycle.scss'],
})
export class ParentLifecycle {
  parentMessage: string = 'Hello!';
  showChild = true;

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
