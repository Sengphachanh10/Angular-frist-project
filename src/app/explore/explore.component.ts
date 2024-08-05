import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatusbarComponent } from '../statusbar/statusbar.component';
import { GobackComponent } from '../goback/goback.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';

interface TimelineItem {
  value: string;
  isActive: boolean;
  showLabel: boolean;
}

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [StatusbarComponent, GobackComponent, NavigationBarComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css'
})
export class ExploreComponent {

  users = [
    { name: 'You' },
    { name: 'Siti' },
    { name: 'Denny' },
    { name: 'Shinta' },
    { name: 'Kasim' }
  ];

  categories = [
    { name: 'Pop Culture', reward: 5000, isSelected: true },
    { name: 'History', reward: 5000, isSelected: false },
  ];

  timelineItems: TimelineItem[] = [
    { value: '5s', isActive: false, showLabel: true },
    { value: '', isActive: false, showLabel: false },
    { value: '', isActive: false, showLabel: false },
    { value: '20s', isActive: true, showLabel: true },
    { value: '', isActive: false, showLabel: false },
    { value: '', isActive: false, showLabel: false },
    { value: '30s', isActive: false, showLabel: true },
    { value: '', isActive: false, showLabel: false },
    { value: '', isActive: false, showLabel: false },
    { value: '', isActive: false, showLabel: false },
    { value: '', isActive: false, showLabel: false },
    { value: '60s', isActive: false, showLabel: true }
  ];

  constructor(private router :Router){}

  starToQuiz() {
    this.router.navigate(['/quiz-screen'])
  }
}
