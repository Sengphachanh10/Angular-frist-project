import { Component } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { YourselfComponent } from '../yourself/yourself.component';

interface Question {
  category: string;
  text: string;
  insert: string;
  progress: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StatusbarComponent, NavigationBarComponent, YourselfComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  rewards = [
    { subject: 'Chemistry', rewardType: 'Reward', points: 1000 },
    { subject: 'History', rewardType: 'Reward', points: 1000 },
    // Add more reward objects as needed
  ];

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
