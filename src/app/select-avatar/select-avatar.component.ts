import { Component } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-avatar',
  standalone: true,
  imports: [StatusbarComponent, CommonModule, AvatarComponent],
  templateUrl: './select-avatar.component.html',
  styleUrl: './select-avatar.component.css'
})
export class SelectAvatarComponent {
  avatars: string[] = [];

  constructor(private router :Router) {}

  startToHome() {
    this.router.navigate(['/home']);
  }

  items = Array(25).fill(0); // Increase the number of items
  currentIndex = 0;
  itemsPerPage = 15;

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - this.itemsPerPage) {
      this.currentIndex++;
    }
  }

  get visibleItems() {
    return this.items.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  get progress() {
    return (this.currentIndex / (this.items.length - this.itemsPerPage)) * 100;
  }
}
