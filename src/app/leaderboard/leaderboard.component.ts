import { Component } from '@angular/core';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { YourselfComponent } from '../yourself/yourself.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

interface LeaderboardEntry {
  rank: number;
  name: string;
  stars: number;
  points: number;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [StatusbarComponent, YourselfComponent, NavigationBarComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.css'
})
export class LeaderboardComponent {
  leaderboard: LeaderboardEntry[] = [
    { rank: 1, name: 'Ponco Isnandar', stars: 315, points: 950000 },
    { rank: 2, name: 'Abbas Setiawan', stars: 305, points: 850000 },
    { rank: 3, name: 'Dina Aryani', stars: 295, points: 796000 },
    { rank: 4, name: 'Fatih Galuh', stars: 280, points: 730000 },
    { rank: 5, name: 'Krisna Setyadewa', stars: 275, points: 650000},
    { rank: 6, name: 'Rahma Priyandika', stars: 255, points: 564000},

  ];
}
