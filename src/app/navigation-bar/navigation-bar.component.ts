import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Titlenav {
  title: string;
}

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  constructor(private router :Router){}

  starToHome() {
    this.router.navigate(['/home'])
  }
  starToDiscover() {
    this.router.navigate(['/explore'])
  }
  starToLeaderboard() {
    this.router.navigate(['/leaderboard'])
  }
  starToAchievement() {
    this.router.navigate(['/achievement'])
  }
  starToMore() {
    this.router.navigate(['/more'])
  }

  name: Titlenav[] = [
    { title:'Explore'},
    { title:'Leaderboard'},
    { title:'Achievement'},
    { title:'More'},
  ]
}
