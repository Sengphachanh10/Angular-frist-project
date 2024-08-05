import { Component } from '@angular/core';
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
  imports: [StatusbarComponent, GobackComponent],
  templateUrl: './quiz-screen.component.html',
  styleUrl: './quiz-screen.component.css'
})
export class QuizScreenComponent {

  currentQuestion: number = 10;
  totalQuestions: number = 20;
  progressValue: number = 16;
  progressText: string = '16s';
  questionText: string = 'Who was the director of the';
  insert: string = 'film "2001: A Space Odyssey"?'

  updateQuestion(questionNumber: number, questionText: string) {
    this.currentQuestion = questionNumber;
    this.questionText = questionText;
  }

  updateProgress(value: number) {
    this.progressValue = value;
    this.progressText = `${value}s`;
  }

  options: QuizOption[] = [
    { label: 'A', text: 'Steven Spielberg', selected: false, correct: false },
    { label: 'B', text: 'Stanley Kubrick', selected: false, correct: true },
    { label: 'C', text: 'Ridley Scott', selected: false, correct: false },
    { label: 'D', text: 'Quentin Tarantino', selected: false, correct: false }
  ];

  selectOption(selectedOption: QuizOption) {
    this.options.forEach(option => option.selected = false);
    selectedOption.selected = true;
  }

  points: number = 312;
  hints: number = 6;

  items = [
    { value: 3120 },
    { value: 3012 },
    { value: 2700 },
    { value: 2378 },
    { value: 2066 }
  ];

  getNumberColor(index: number): string {
    switch (index) {
      case 0:
        return 'text-primaryYellow';
      case 1:
        return 'text-secondaryGray';
      case 2:
        return 'text-secondaryBronze';
      default:
        return 'text-primaryDarkBlack';
    }
  }
  constructor(private router: Router) { }

  starToScoreboard() {
    this.router.navigate(['/scoreboard'])
  }
}
