import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from '../share/interface/i-menu';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  menulist: IMenu[] = [
    { name: 'Discover', path: '/explore', icon: 'mdi-magnify' },
    { name: 'Leaderboard', path: '/leaderboard', icon: 'mdi-poll' },
    { name: 'Achievement', path: '/achievement', icon: 'mdi-medal-outline' },
    { name: 'More', path: '/more', icon: 'mdi-dots-horizontal' },
  ];

  constructor(private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }
}