import { LoginComponent } from './login-register-page/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { QuizCarouselItemComponent } from './landing-page/quiz-carousel-item/quiz-carousel-item.component';
import { LandingNewsComponent } from './landing-page/landing-news/landing-news.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewsItemComponent } from './landing-page/news-item/news-item.component';
import { EduNewsItemComponent } from './landing-page/edu-news-item/edu-news-item.component';
import { LandingSchoolItemComponent } from './landing-page/landing-school-item/landing-school-item.component';
import { FooterComponent } from './footer/footer.component';
import { QuizListingPageComponent } from './quiz-listing-page/quiz-listing-page.component';
import { QuizListingCategoryPageComponent } from './quiz-listing-category-page/quiz-listing-category-page.component';
import { QuizInfoItemComponent } from './quiz-listing-page/quiz-info-item/quiz-info-item.component';
import { MbtiQuizDetailPageComponent } from './mbti-quiz-detail-page/mbti-quiz-detail-page.component';
import { TypeCardComponent } from './mbti-quiz-detail-page/type-card/type-card.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { RegisterComponent } from './login-register-page/register/register.component';
import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page/mbti-quiz-attempt-page.component';
import { MiQuizAttemptPageComponent } from './mi-quiz-attempt-page/mi-quiz-attempt-page.component';
import { MbtiQuizResultDetailPageComponent } from './mbti-quiz-result-detail-page/mbti-quiz-result-detail-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

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
    LoginRegisterPageComponent,
    LoginComponent,
    RegisterComponent,
    MbtiQuizAttemptPageComponent,
    MiQuizAttemptPageComponent,
    MbtiQuizResultDetailPageComponent,
    UserProfilePageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatTabsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
