import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-avatar',
  standalone: true,
  imports: [StatusbarComponent, CommonModule],
  templateUrl: './select-avatar.component.html',
  styleUrl: './select-avatar.component.css'
})
export class SelectAvatarComponent {
  constructor(private router: Router) {}

  startToHome() {
    this.router.navigate(['/home']);
  }
}
