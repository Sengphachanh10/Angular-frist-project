import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { YourselfComponent } from '../yourself/yourself.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

interface Achievement {
  name: string;
  description: string;
  points: number;
  xp: number;
  enabled: boolean;
}

@Component({
  selector: 'app-achievement',
  standalone: true,
  imports: [CommonModule, StatusbarComponent, YourselfComponent, NavigationBarComponent],
  templateUrl: './achievement.component.html',
  styleUrl: './achievement.component.css'
})
export class AchievementComponent {
  achievements: Achievement[] = [
    { name: 'Quiz Master', description: 'Answer 500 questions correctly.', points: 1000, xp: 2000, enabled: true },
    { name: 'Trivia Enthusiast', description: 'Play every day for a month.', points: 1000, xp: 1000, enabled: true },
    { name: 'Speed Demon', description: 'Answer 10 questions in under 30 seconds.', points: 1000, xp: 2000, enabled: false },
    { name: 'Literature Lover', description: 'Answer 100 literature questions correctly.', points: 1000, xp: 2000, enabled: true },
    { name: 'Pop Culture Pro', description: 'Answer 100 pop culture questions correctly.', points: 1000, xp: 2000, enabled: false },
    { name: 'Perfect Score', description: 'Get a perfect score in a quiz.', points: 1000, xp: 2000, enabled: false },
    { name: 'Social Butterfly', description: 'Invite 10 friends to play.', points: 1000, xp: 2000, enabled: true },
    { name: 'Challenge Champ', description: 'Win 10 multiplayer challenges.', points: 1000, xp: 2000, enabled: false },
  ];
}
