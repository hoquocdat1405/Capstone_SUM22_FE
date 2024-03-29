import { TestAttemptComponent } from './user-profile-page/test-attempt/test-attempt.component';
import { VertifyAccountPageComponent } from './vertify-account-page/vertify-account-page.component';
import { NewTestsComponent } from './new-tests/new-tests.component';
import { NewJobListPageComponent } from './new-job-list-page/new-job-list-page.component';
import { MailInboxComponent } from './mail-main/mail-inbox/mail-inbox.component';
import { MailMainComponent } from './mail-main/mail-main.component';
import { ApplyDetailComponent } from './user-profile-page/apply-detail/apply-detail.component';
import { ApplyComponent } from './user-profile-page/apply/apply.component';
import { MajorListComponent } from './major-list/major-list.component';
import { HandinUniAppComponent } from './handin-uni-app/handin-uni-app.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolInterestedComponent } from './user-profile-page/school-interested/school-interested.component';
import { PrimaryInfoComponent } from './user-profile-page/primary-info/primary-info.component';
import { EducationComponent } from './user-profile-page/education/education.component';
import { AuthGuard } from './_services/auth.guard';
import { HollandQuizAttemptNewComponent } from './holland-quiz-attempt-new/holland-quiz-attempt-new.component';
import { BfQuizAttemptNewComponent } from './bf-quiz-attempt-new/bf-quiz-attempt-new.component';
import { DiscQuizAttemptNewComponent } from './disc-quiz-attempt-new/disc-quiz-attempt-new.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { QuestionComponent } from './mbti-quiz-attempt-new/question/question.component';
import { MbtiQuizAttemptNewComponent } from './mbti-quiz-attempt-new/mbti-quiz-attempt-new.component';
import { LoginRegisterMainComponent } from './login-register-main/login-register-main.component';

import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { JobDetailPageComponent } from './job-detail-page/job-detail-page.component';

import { MonaAstrologicalPageComponent } from './mona-astrological-page/mona-astrological-page.component';
import { CfAstrologyPageComponent } from './cf-astrology-page/cf-astrology-page.component';
import { AstrologicalPageComponent } from './astrological-page/astrological-page.component';
import { RandomTarotPageComponent } from './new-tarot-page/random-tarot-page/random-tarot-page.component';
import { BfQuizResultDetailPageComponent } from './bf-quiz-result-detail-page/bf-quiz-result-detail-page.component';
import { NewTarotDrawCardPageComponent } from './new-tarot-page/new-tarot-draw-card-page/new-tarot-draw-card-page.component';
import { TwelveAstrologicalPageDetailComponent } from './twelve-astrological-page/twelve-astrological-page-detail/twelve-astrological-page-detail.component';
import { MajorInfoComponent } from './major-info/major-info.component';
import { NewTarotPageComponent } from './new-tarot-page/new-tarot-page.component';
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
import { HollandQuizResultDetailPageComponent } from './holland-quiz-result-detail-page/holland-quiz-result-detail-page.component';
import { MajorDetailPageComponent } from './major-detail-page/major-detail-page.component';
import { SchoolInfoPageComponent } from './school-info-page/school-info-page.component';
import { AddmissionNewsDetailComponent } from './addmission-news-detail/addmission-news-detail.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { FQAPageComponent } from './FQA-page/FQA-page.component';

const routes: Routes = [
  //homepage - default blank url link redirect to home
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // { path: 'home', component: LandingPageComponent},
  { path: 'home', component: LandingPageComponent },

  //loginpage
  { path: 'login', component: LoginRegisterMainComponent },
  { path: 'verify-account', component: VertifyAccountPageComponent },

  //User profile page
  {
    path: 'profile',
    component: UserProfilePageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'education', component: EducationComponent },
      { path: 'school-interested', component: SchoolInterestedComponent },
      { path: 'primary', component: PrimaryInfoComponent },
      { path: 'apply', component: ApplyComponent },
      { path: 'apply-detail', component: ApplyDetailComponent },
      { path: 'test-attempt', component: TestAttemptComponent },
      { path: '', component: PrimaryInfoComponent },
    ],
  },

  //quizes listing page (non-category)
  {
    path: 'new-tests',
    component: QuizListingPageComponent,
    // children: [
    //   {
    //     path: 'detail/:id', // child route path
    //     component: DiscQuizDetailPageComponent, // child route component that the router renders
    //   },

    // ],
  }, //LiemNT test new route
  {
    path: 'tests',
    component: NewTestsComponent,
  },
  { path: 'test-detail/:id', component: DiscQuizDetailPageComponent }, //LiemNT test new route

  { path: 'quiz-list', component: QuizListingPageComponent },
  { path: 'quiz-list-category', component: QuizListingCategoryPageComponent },

  //quizes detail pages link
  { path: 'mbti-quiz-detail', component: MbtiQuizDetailPageComponent },
  { path: 'disc-quiz-detail', component: DiscQuizDetailPageComponent },
  { path: 'holland-quiz-detail', component: HollandQuizDetailPageComponent },
  { path: 'big-five-quiz-detail', component: BfQuizDetailPageComponent },

  //Quizes attempt pages link

  { path: 'mbti-quiz-attempt', component: MbtiQuizAttemptNewComponent },
  { path: 'disc-quiz-attempt', component: DiscQuizAttemptNewComponent },
  { path: 'holland-quiz-attempt', component: HollandQuizAttemptNewComponent },
  { path: 'big-five-quiz-attempt', component: BfQuizAttemptNewComponent },

  //Quizes result page link
  {
    path: 'mbti-result',
    component: MbtiQuizResultDetailPageComponent,
  },
  { path: 'disc-result', component: DiscQuizResultDetailPageComponent },
  { path: 'holland-result', component: HollandQuizResultDetailPageComponent },
  { path: 'bf-result', component: BfQuizResultDetailPageComponent },

  //Additional links
  // { path: 'astrological-page', component: TwelveAstrologicalPageComponent },
  // { path: 'tarot-page', component: TarotPageComponent },
  // { path: 'tarot-list-page', component: TarotListPageComponent },
  // { path: 'new-tarot-page', component: NewTarotPageComponent },
  // {
  //   path: 'astrological-detail-page',
  //   component: TwelveAstrologicalPageDetailComponent,
  // },
  // { path: 'random-tarot-page', component: NewTarotDrawCardPageComponent },
  // { path: 'cf-astrology-page', component: CfAstrologyPageComponent },
  // { path: 'mona-astrology-page', component: MonaAstrologicalPageComponent },

  //Major links
  { path: 'major', component: MajorDetailPageComponent },
  { path: 'major-list', component: MajorListComponent },

  //Staff links
  // {
  //   path: 'staff',
  //   loadChildren: () =>
  //     import('./staff/staff.module').then((m) => m.StaffModule),
  // },

  //Major
  { path: 'major-info', component: MajorInfoComponent },

  //School
  {
    path: 'school',
    component: SchoolInfoPageComponent,
  },
  { path: 'fqa', component: FQAPageComponent },

  { path: 'submit-application', component: HandinUniAppComponent },

  // {
  //   path: 'psy',
  //   loadChildren: () => import('./psy/psy.module').then((m) => m.PsyModule),
  // },
  //Job detail
  {
    path: 'job-detail',
    component: JobDetailPageComponent,
  },
  { path: 'job-list', component: JobListPageComponent },
  { path: 'new-job-list', component: NewJobListPageComponent },

  //addmission-news
  { path: 'news-detail', component: AddmissionNewsDetailComponent },
  { path: 'news-list', component: AdmissionListComponent },
  { path: 'school-list', component: SchoolListComponent },
  { path: 'mail', component: MailMainComponent },
  { path: 'mail-inbox', component: MailInboxComponent },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
