import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { GobackComponent } from '../goback/goback.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

interface Player {
  name: string;
  points: number;
  progress: number;
}

@Component({
  selector: 'app-scoreboard',
  standalone: true,
  imports: [CommonModule, StatusbarComponent, GobackComponent, NavigationBarComponent],
  templateUrl: './scoreboard.component.html',
  styleUrl: './scoreboard.component.css'
})
export class ScoreboardComponent {
  players: Player[] = [
    { name: 'You', points: 5000, progress: 20 },
    { name: 'Siti', points: 3012, progress: 16 },
    { name: 'Denny', points: 2700, progress: 12 },
    { name: 'Shinta', points: 2378, progress: 8 },
    { name: 'Kasim', points: 2066, progress: 4 },
  ];
}
