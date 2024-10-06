import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import *  as quizzes from '../data.json';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  title = 'quiz-app';
  data: any = quizzes;

  ngOnInit(): void {
    console.log(this.data.quizzes);       
  }
}
