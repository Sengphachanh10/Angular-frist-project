import { Component } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { YourselfComponent } from '../yourself/yourself.component';
import { CommonModule } from '@angular/common';

interface Question {
  category: string;
  text: string;
  insert: string;
  progress: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,StatusbarComponent, NavigationBarComponent, YourselfComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  questions: Question[] = [
    {
      category: 'Astronomy',
      text: "Which planet is known as the",
      insert:"'Red Planet'?",
      progress: 57
    },
    {
      category: 'Astronomy',
      text: 'Which scientist discovered',
      insert:"the law of gravity?",
      progress: 37
    }
  ];

  getProgressColor(progress: number): string {
    if (progress >= 70) {
      return 'text-primaryGreen';
    } else if (progress >= 50) {
      return 'text-primaryYellow';
    } else {
      return 'text-primaryRed';
    }
  }
}
