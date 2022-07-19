import { MiQuizAttemptPageComponent } from './mi-quiz-attempt-page/mi-quiz-attempt-page.component';
import { MbtiQuizResultDetailPageComponent } from './mbti-quiz-result-detail-page/mbti-quiz-result-detail-page.component';
import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page/mbti-quiz-attempt-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuizListingCategoryPageComponent } from './quiz-listing-category-page/quiz-listing-category-page.component';
import { QuizListingPageComponent } from './quiz-listing-page/quiz-listing-page.component';
import { MbtiQuizDetailPageComponent } from './mbti-quiz-detail-page/mbti-quiz-detail-page.component';

const routes: Routes = [
  //homepage - default blank url link redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: LandingPageComponent},

  //loginpage
  { path: 'login', component: LoginRegisterPageComponent },

  //quizes listing page (non-category)
  { path: 'quiz-list', component: QuizListingPageComponent },
  { path: 'quiz-list-category', component: QuizListingCategoryPageComponent },

  //quizes detail pages link
  { path: 'mbti-quiz-detail', component: MbtiQuizDetailPageComponent },
  { path: 'disc-quiz-detail', component: MbtiQuizDetailPageComponent },
  { path: 'mi-quiz-detail', component: MbtiQuizDetailPageComponent },
  { path: 'big-five-quiz-detail', component: MbtiQuizDetailPageComponent },
  
  //Quizes attempt pages link
  { path: 'mbti-quiz-attempt', component: MbtiQuizAttemptPageComponent },
  { path: 'mi-quiz-attempt', component: MiQuizAttemptPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

