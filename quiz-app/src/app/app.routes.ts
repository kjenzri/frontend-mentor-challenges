import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';

export const routes: Routes = [
    { path: 'question', component: QuestionComponent },
    { path: '', component: HomeComponent }
];
