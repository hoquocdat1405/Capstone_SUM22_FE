import { TarotListPageComponent } from './tarot-page/tarot-list-page/tarot-list-page.component';
import { TarotPageComponent } from './tarot-page/tarot-page.component';
import { TwelveAstrologicalPageComponent } from './twelve-astrological-page/twelve-astrological-page.component';
import { BfQuizPersonalityDetailPageComponent } from './bf-quiz-personality-detail-page/bf-quiz-personality-detail-page.component';
import { BfQuizDetailPageComponent } from './bf-quiz-detail-page/bf-quiz-detail-page.component';
import { BfQuizAttemptPageComponent } from './bf-quiz-attempt-page/bf-quiz-attempt-page.component';
import { HollandQuizAttemptPageComponent } from './holland-quiz-attempt-page/holland-quiz-attempt-page.component';
import { HollandQuizDetailPageComponent } from './holland-quiz-detail-page/holland-quiz-detail-page.component';
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
  { path: 'holland-quiz-detail', component: HollandQuizDetailPageComponent },
  { path: 'big-five-quiz-detail', component: BfQuizDetailPageComponent },

  //Quizes attempt pages link
  { path: 'mbti-quiz-attempt', component: MbtiQuizAttemptPageComponent },
  { path: 'disc-quiz-attempt', component: DiscQuizAttemptPageComponent },
  { path: 'holland-quiz-attempt', component: HollandQuizAttemptPageComponent },
  { path: 'big-five-quiz-attempt', component: BfQuizAttemptPageComponent },

  //Quizes result page link
  { path: 'mbti-result', component: MbtiQuizResultDetailPageComponent },
  { path: 'disc-result', component: DiscQuizResultDetailPageComponent},
  { path: 'holland-result', component: DiscQuizResultDetailPageComponent},
  { path: 'bf-result', component: DiscQuizResultDetailPageComponent},
  { path: 'mi-result', component: DiscQuizResultDetailPageComponent},

  { path: 'bf-personality-detail', component: BfQuizPersonalityDetailPageComponent},
  { path: 'twelve-astrological-page', component: TwelveAstrologicalPageComponent},
  { path: 'tarot-page', component: TarotPageComponent },
  { path: 'tarot-list-page', component: TarotListPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

