import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-goback',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './goback.component.html',
  styleUrl: './goback.component.css'
})
export class GobackComponent {
   private currentPath: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentPath = this.router.url;
  }

  backTo() {
    switch (this.currentPath) {
      case '/explore':
        this.router.navigate(['/home']);
        break;
      case '/quiz-screen':
        this.router.navigate(['/explore']);
        break;
      case '/scoreboard':
        this.router.navigate(['/quiz-screen']);
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
  }
}
