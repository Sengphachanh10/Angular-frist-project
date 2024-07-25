import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StatusbarComponent } from "../statusbar/statusbar.component";
import { GobackComponent } from "../goback/goback.component";

interface QuizOption {
  label: string;
  text: string;
  selected: boolean;
  correct: boolean;
}

@Component({
  selector: 'app-quiz-screen',
  standalone: true,
  imports: [CommonModule,StatusbarComponent,GobackComponent],
  templateUrl: './quiz-screen.component.html',
  styleUrl: './quiz-screen.component.css'
})
export class QuizScreenComponent {
  options: QuizOption[] = [
    { label: 'A', text: 'Steven Spielberg', selected: false, correct: false },
    { label: 'B', text: 'Stanley Kubrick', selected: false, correct: true  },
    { label: 'C', text: 'Ridley Scott', selected: false, correct: false  },
    { label: 'D', text: 'Quentin Tarantino', selected: false, correct: false  }
  ];

  selectOption(selectedOption: QuizOption) {
    this.options.forEach(option => option.selected = false);
    selectedOption.selected = true;
  }

  constructor(private router :Router){}

  starToScoreboard() {
    this.router.navigate(['/scoreboard'])
  }

  items = [
    { value: 3120 },
    { value: 3012 },
    { value: 2700 },
    { value: 2378 },
    { value: 2066 }
  ];

  getNumberColor(index: number): string {
    const colors = ['text-yellow-400', 'text-gray-400', 'text-orange-400', 'text-black', 'text-black'];
    return colors[index] || 'text-black';
  }
}
