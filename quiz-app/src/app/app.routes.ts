import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ScoreComponent } from './score/score.component';

export const routes: Routes = [
    { path: 'question', component: QuestionComponent },
    { path: 'score', component: ScoreComponent },
    { path: '', component: HomeComponent }
];
