import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  currentPage: string = 'home'
  constructor(private router :Router){}

  starToHome() {
    this.router.navigate(['/home'])
  }
  starToDiscover() {
    this.router.navigate(['/explore'])
    this.currentPage = 'discover';
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
}