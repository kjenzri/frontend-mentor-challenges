import { Component, ContentChild, contentChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { QuestionComponent } from './question/question.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  private readonly trueLiteral = 'true';
  private readonly darkModeKey = 'lightMode';
  darkMode = false;

  ngOnInit(): void {
    this.darkMode = localStorage
      .getItem(this.darkModeKey) === this.trueLiteral;
  }
  
  onLightDarkChange(){
    localStorage
      .setItem(this.darkModeKey, String(this.darkMode));
  } 
}
