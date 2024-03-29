import { TestAttemptComponent } from './user-profile-page/test-attempt/test-attempt.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.prod';
import { MaterialModule } from './material/material.module';
import { Interceptor } from './interceptor';
import { BfQuestionComponent } from './bf-quiz-attempt-new/bf-question/bf-question.component';
import { HollandQuestionComponent } from './holland-quiz-attempt-new/holland-question/holland-question.component';
import { QuestionComponent } from './mbti-quiz-attempt-new/question/question.component';
import { DiscQuestionComponent } from './disc-quiz-attempt-new/disc-question/disc-question.component';
import { MajorDetailPageComponent } from './major-detail-page/major-detail-page.component';
import { NewTarotDrawCardPageComponent } from './new-tarot-page/new-tarot-draw-card-page/new-tarot-draw-card-page.component';
import { TwelveAstrologicalPageDetailComponent } from './twelve-astrological-page/twelve-astrological-page-detail/twelve-astrological-page-detail.component';
import { AppComponent } from './app.component';

//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

//services
import { AuthService } from './_services/auth.service';
import { TarotServiceService } from './tarot-page/tarot-service.service';

//fa icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//sub component
import { ExpansionPanelComponent } from './holland-quiz-detail-page/expansion-panel/expansion-panel.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { NewsItemComponent } from './landing-page/news-item/news-item.component';
import { SubNewsItemComponent } from './landing-page/sub-news-item/sub-news-item.component';
import { EduNewsItemComponent } from './landing-page/edu-news-item/edu-news-item.component';
import { TypeCardComponent } from './mbti-quiz-detail-page/type-card/type-card.component';
import { TypeBubbleComponent } from './disc-quiz-detail-page/type-bubble/type-bubble.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LandingNewsComponent } from './landing-page/landing-news/landing-news.component';
import { QuizInfoItemComponent } from './quiz-listing-page/quiz-info-item/quiz-info-item.component';
import { LandingSchoolItemComponent } from './landing-page/landing-school-item/landing-school-item.component';
import { QuizCarouselItemComponent } from './landing-page/quiz-carousel-item/quiz-carousel-item.component';

//Charts
import { DoughnutChartComponent } from './disc-quiz-result-detail-page/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './holland-quiz-result-detail-page/radar-chart/radar-chart.component';

//quizes listing
import { QuizListingPageComponent } from './quiz-listing-page/quiz-listing-page.component';
import { QuizListingCategoryPageComponent } from './quiz-listing-category-page/quiz-listing-category-page.component';

//users pages
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { EducationComponent } from './user-profile-page/education/education.component';
import { PrimaryInfoComponent } from './user-profile-page/primary-info/primary-info.component';
import { SchoolInterestedComponent } from './user-profile-page/school-interested/school-interested.component';
import { ApplyComponent } from './user-profile-page/apply/apply.component';
import { ApplyDetailComponent } from './user-profile-page/apply-detail/apply-detail.component';
import { ProfileSidebarComponent } from './user-profile-page/profile-sidebar/profile-sidebar.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { LoginComponent } from './login-register-page/login/login.component';
import { RegisterComponent } from './login-register-page/register/register.component';

//detail pages
import { BfQuizDetailPageComponent } from './bf-quiz-detail-page/bf-quiz-detail-page.component';
import { HollandQuizDetailPageComponent } from './holland-quiz-detail-page/holland-quiz-detail-page.component';
import { DiscQuizDetailPageComponent } from './disc-quiz-detail-page/disc-quiz-detail-page.component';
import { MbtiQuizDetailPageComponent } from './mbti-quiz-detail-page/mbti-quiz-detail-page.component';

//attempt pages
import { DiscQuizAttemptPageComponent } from './disc-quiz-attempt-page/disc-quiz-attempt-page.component';
import { BfQuizAttemptPageComponent } from './bf-quiz-attempt-page/bf-quiz-attempt-page.component';
import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page/mbti-quiz-attempt-page.component';
import { HollandQuizAttemptPageComponent } from './holland-quiz-attempt-page/holland-quiz-attempt-page.component';
import { MbtiQuizAttemptNewComponent } from './mbti-quiz-attempt-new/mbti-quiz-attempt-new.component';
import { DiscQuizAttemptNewComponent } from './disc-quiz-attempt-new/disc-quiz-attempt-new.component';

//result pages
import { MbtiQuizResultDetailPageComponent } from './mbti-quiz-result-detail-page/mbti-quiz-result-detail-page.component';
import { DiscQuizResultDetailPageComponent } from './disc-quiz-result-detail-page/disc-quiz-result-detail-page.component';
import { BfQuizPersonalityDetailPageComponent } from './bf-quiz-personality-detail-page/bf-quiz-personality-detail-page.component';
import { HollandQuizResultDetailPageComponent } from './holland-quiz-result-detail-page/holland-quiz-result-detail-page.component';

//additional options
import { TwelveAstrologicalPageComponent } from './twelve-astrological-page/twelve-astrological-page.component';
import { TarotPageComponent } from './tarot-page/tarot-page.component';
import { TarotListPageComponent } from './tarot-page/tarot-list-page/tarot-list-page.component';
import { TarotDetailPageComponent } from './tarot-page/tarot-detail-page/tarot-detail-page.component';
import { CoinComponent } from './disc-quiz-attempt-page/coin/coin.component';
import { NewTarotPageComponent } from './new-tarot-page/new-tarot-page.component';

//staff links
import { StaffModule } from './staff/staff.module';
import { MajorInfoComponent } from './major-info/major-info.component';
import { BfQuizResultDetailPageComponent } from './bf-quiz-result-detail-page/bf-quiz-result-detail-page.component';
import { RandomTarotPageComponent } from './new-tarot-page/random-tarot-page/random-tarot-page.component';
import { AstrologicalPageComponent } from './astrological-page/astrological-page.component';
import { CfAstrologyPageComponent } from './cf-astrology-page/cf-astrology-page.component';
import { MonaAstrologicalPageComponent } from './mona-astrological-page/mona-astrological-page.component';
import { SchoolInfoPageComponent } from './school-info-page/school-info-page.component';

//School's info page
import { ContentMenuComponent } from './school-info-page/content-menu/content-menu.component';
import { SchoolNewsComponent } from './school-info-page/school-news/school-news.component';
import { AddmissionNewsDetailComponent } from './addmission-news-detail/addmission-news-detail.component';

//psy links
import { BarChartComponent } from './bf-quiz-result-detail-page/bar-chart/bar-chart.component';
import { PsyModule } from './psy/psy.module';
import { LoginRegisterMainComponent } from './login-register-main/login-register-main.component';

import { JobDetailPageComponent } from './job-detail-page/job-detail-page.component';
import { JobListPageComponent } from './job-list-page/job-list-page.component';
import { AdmissionListComponent } from './admission-list/admission-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BfQuizAttemptNewComponent } from './bf-quiz-attempt-new/bf-quiz-attempt-new.component';
// import { BfQuestionComponent } from './bf-quiz-attempt-new/bf-question/bf-question.component';
import { HollandQuizAttemptNewComponent } from './holland-quiz-attempt-new/holland-quiz-attempt-new.component';
import { PopupComponent } from './popup/popup.component';
import { SchoolListComponent } from './school-list/school-list.component';
import { HandinUniAppComponent } from './handin-uni-app/handin-uni-app.component';
import { MajorListComponent } from './major-list/major-list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MailMainComponent } from './mail-main/mail-main.component';
import { MailInboxComponent } from './mail-main/mail-inbox/mail-inbox.component';
import {
  RichTextEditorModule,
  ToolbarService,
  LinkService,
  ImageService,
  HtmlEditorService,
} from '@syncfusion/ej2-angular-richtexteditor';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DatePipe } from '@angular/common';
import { NewJobListPageComponent } from './new-job-list-page/new-job-list-page.component';
import { NewTestsComponent } from './new-tests/new-tests.component';
import { VertifyAccountPageComponent } from './vertify-account-page/vertify-account-page.component';
import { FQAPageComponent } from './FQA-page/FQA-page.component';
import { SchoolMajorComponent } from './school-info-page/school-major/school-major.component';
import { TypeBubbleBigfiveComponent } from './bf-quiz-detail-page/type-bubble-bigfive/type-bubble-bigfive.component';

export function tokenGetter() {
  let savedToken = localStorage.getItem('token');
  if (savedToken) {
    return savedToken;
  }
  return null;
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    QuizCarouselItemComponent,
    LandingNewsComponent,
    LandingPageComponent,
    NewsItemComponent,
    EduNewsItemComponent,
    LandingSchoolItemComponent,
    FooterComponent,
    QuizListingPageComponent,
    QuizListingCategoryPageComponent,
    QuizInfoItemComponent,
    MbtiQuizDetailPageComponent,
    TypeCardComponent,
    TypeBubbleComponent,
    LoginRegisterPageComponent,
    LoginComponent,
    RegisterComponent,
    MbtiQuizAttemptPageComponent,
    HollandQuizAttemptPageComponent,
    MbtiQuizResultDetailPageComponent,
    UserProfilePageComponent,
    DiscQuizDetailPageComponent,
    DiscQuizAttemptPageComponent,
    HollandQuizDetailPageComponent,
    BfQuizAttemptPageComponent,
    BfQuizDetailPageComponent,
    DiscQuizResultDetailPageComponent,
    DoughnutChartComponent,
    BfQuizPersonalityDetailPageComponent,
    TwelveAstrologicalPageComponent,
    CoinComponent,
    TarotPageComponent,
    TarotListPageComponent,
    TarotDetailPageComponent,
    RadarChartComponent,
    ExpansionPanelComponent,
    HollandQuizResultDetailPageComponent,
    NewTarotPageComponent,
    MajorInfoComponent,
    NewTarotDrawCardPageComponent,
    TwelveAstrologicalPageDetailComponent,
    MajorDetailPageComponent,
    BfQuizResultDetailPageComponent,
    RandomTarotPageComponent,
    AstrologicalPageComponent,
    CfAstrologyPageComponent,
    MonaAstrologicalPageComponent,
    SchoolInfoPageComponent,
    ContentMenuComponent,
    SchoolNewsComponent,
    AddmissionNewsDetailComponent,
    LoginRegisterMainComponent,
    MbtiQuizAttemptNewComponent,
    QuestionComponent,
    JobDetailPageComponent,
    JobListPageComponent,
    DiscQuizAttemptNewComponent,
    DiscQuestionComponent,
    AdmissionListComponent,
    BfQuizAttemptNewComponent,
    BfQuestionComponent,
    HollandQuizAttemptNewComponent,
    HollandQuestionComponent,
    PopupComponent,
    SchoolListComponent,
    HandinUniAppComponent,
    ProfileSidebarComponent,
    PrimaryInfoComponent,
    EducationComponent,
    SchoolInterestedComponent,
    MajorListComponent,
    ApplyComponent,
    ApplyDetailComponent,
    SpinnerComponent,
    MailMainComponent,
    MailInboxComponent,
    PageNotFoundComponent,
    SubNewsItemComponent,
    NewJobListPageComponent,
    NewTestsComponent,
    VertifyAccountPageComponent,
    TestAttemptComponent,
    FQAPageComponent,
    SchoolMajorComponent,
    TypeBubbleBigfiveComponent,
    BarChartComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    StaffModule,
    PsyModule,
    ReactiveFormsModule,
    MaterialModule,
    RichTextEditorModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [
    AuthService,
    TarotServiceService,
    ToolbarService,
    LinkService,
    ImageService,
    HtmlEditorService,
    DatePipe,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
