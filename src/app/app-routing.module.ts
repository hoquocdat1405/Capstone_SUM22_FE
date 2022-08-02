import { TwelveAstrologicalPageComponent } from './twelve-astrological-page/twelve-astrological-page.component';
import { BfQuizPersonalityDetailPageComponent } from './bf-quiz-personality-detail-page/bf-quiz-personality-detail-page.component';
import { BfQuizDetailPageComponent } from './bf-quiz-detail-page/bf-quiz-detail-page.component';
import { BfQuizAttemptPageComponent } from './bf-quiz-attempt-page/bf-quiz-attempt-page.component';
import { FooterComponent } from './footer/footer.component';
import { MiQuizAttemptPageComponent } from './mi-quiz-attempt-page/mi-quiz-attempt-page.component';
import { MiQuizDetailPageComponent } from './mi-quiz-detail-page/mi-quiz-detail-page.component';
import { MbtiQuizResultDetailPageComponent } from './mbti-quiz-result-detail-page/mbti-quiz-result-detail-page.component';
import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page/mbti-quiz-attempt-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { QuizListingCategoryPageComponent } from './quiz-listing-category-page/quiz-listing-category-page.component';
import { QuizListingPageComponent } from './quiz-listing-page/quiz-listing-page.component';
import { MbtiQuizDetailPageComponent } from './mbti-quiz-detail-page/mbti-quiz-detail-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { DiscQuizDetailPageComponent } from './disc-quiz-detail-page/disc-quiz-detail-page.component';
import { DiscQuizAttemptPageComponent } from './disc-quiz-attempt-page/disc-quiz-attempt-page.component';
import { DiscQuizResultDetailPageComponent } from './disc-quiz-result-detail-page/disc-quiz-result-detail-page.component';

const routes: Routes = [
  //homepage - default blank url link redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full'},

  // { path: 'home', component: LandingPageComponent},
  { path: 'home', component: LandingPageComponent},

  //loginpage
  { path: 'login', component: LoginRegisterPageComponent },

  //User profile page
  { path: 'profile', component: UserProfilePageComponent },

  //quizes listing page (non-category)
  { path: 'quiz-list', component: QuizListingPageComponent },
  { path: 'quiz-list-category', component: QuizListingCategoryPageComponent },

  //quizes detail pages link
  { path: 'mbti-quiz-detail', component: MbtiQuizDetailPageComponent },
  { path: 'disc-quiz-detail', component: DiscQuizDetailPageComponent },
  { path: 'mi-quiz-detail', component: MiQuizDetailPageComponent },
  { path: 'big-five-quiz-detail', component: BfQuizDetailPageComponent },

  //Quizes attempt pages link
  { path: 'mbti-quiz-attempt', component: MbtiQuizAttemptPageComponent },
  { path: 'disc-quiz-attempt', component: DiscQuizAttemptPageComponent },
  { path: 'mi-quiz-attempt', component: MiQuizAttemptPageComponent },
  { path: 'big-five-quiz-attempt', component: BfQuizAttemptPageComponent },

  //Quizes result page link
  { path: 'mbti-result', component: MbtiQuizResultDetailPageComponent },
  { path: 'disc-result', component: DiscQuizResultDetailPageComponent},
  { path: 'mi-result', component: DiscQuizResultDetailPageComponent},
  { path: 'bf-result', component: BfQuizDetailPageComponent},

  { path: 'bf-personality-detail', component: BfQuizPersonalityDetailPageComponent},
  { path: 'twelve-astrological-page', component: TwelveAstrologicalPageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

