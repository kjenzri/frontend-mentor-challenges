import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  quizTitle = 'Accessibility';

  constructor(public parent: AppComponent){
    parent.currentQuizTitle = this.quizTitle;
  }
}
