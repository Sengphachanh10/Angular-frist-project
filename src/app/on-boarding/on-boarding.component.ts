import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusbarComponent } from '../statusbar/statusbar.component';


@Component({
  selector: 'app-on-boarding',
  standalone: true,
  imports: [StatusbarComponent],
  templateUrl: './on-boarding.component.html',
  styleUrl: './on-boarding.component.css'
})
export class OnBoardingComponent {
  constructor(private router :Router){}

  starToSignUp() {
    this.router.navigate(['/sign-up'])
  }

  skipToSignUp() {
    this.router.navigate(['/home'])
  }
}
