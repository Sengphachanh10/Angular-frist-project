import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { GobackComponent } from '../goback/goback.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [StatusbarComponent, GobackComponent, NavigationBarComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {
  constructor(private router :Router){}

  starToQuiz() {
    this.router.navigate(['/quiz-screen'])
  }
}
