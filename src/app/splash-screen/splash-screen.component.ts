import { Component } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  standalone: true,
  imports: [StatusbarComponent],
  templateUrl: './splash-screen.component.html'
})
export class SplashScreenComponent {
  constructor(private router :Router){}

  starONBoarding() {
    this.router.navigate(['/on-boarding'])
  }
}
