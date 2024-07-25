import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    SignUpComponent, 
    StatusbarComponent,
    CommonModule, 
    FormsModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  country: string = '';
  age: number | null = null;

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, password: this.password, country: this.country, age: this.age });
  }

  constructor(private router: Router){}
  goToSelectAvatar() {
    this.router.navigate(['/select-avatar'])
  }
}
