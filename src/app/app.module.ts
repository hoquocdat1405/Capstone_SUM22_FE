import { AppComponent } from './app.component';

//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClient, HttpClientModule } from '@angular/common/http';


//services
import { AuthService } from './_services/auth.service';

//fa icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//material ui
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

//sub component
import { CarouselComponent } from './landing-page/carousel/carousel.component';
import { NewsItemComponent } from './landing-page/news-item/news-item.component';
import { EduNewsItemComponent } from './landing-page/edu-news-item/edu-news-item.component';
import { TypeCardComponent } from './mbti-quiz-detail-page/type-card/type-card.component';
import { TypeBubbleComponent } from './disc-quiz-detail-page/type-bubble/type-bubble.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { LandingNewsComponent } from './landing-page/landing-news/landing-news.component';
import { QuizInfoItemComponent } from './quiz-listing-page/quiz-info-item/quiz-info-item.component';
import { LandingSchoolItemComponent } from './landing-page/landing-school-item/landing-school-item.component';
import { QuizCarouselItemComponent } from './landing-page/quiz-carousel-item/quiz-carousel-item.component';
import {DoughnutChartComponent} from './disc-quiz-result-detail-page/doughnut-chart/doughnut-chart.component';

//quizes listing
import { QuizListingPageComponent } from './quiz-listing-page/quiz-listing-page.component';
import { QuizListingCategoryPageComponent } from './quiz-listing-category-page/quiz-listing-category-page.component';

//users pages
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { LoginRegisterPageComponent } from './login-register-page/login-register-page.component';
import { LoginComponent } from './login-register-page/login/login.component';
import { RegisterComponent } from './login-register-page/register/register.component';
//detail pages
import { BfQuizDetailPageComponent } from './bf-quiz-detail-page/bf-quiz-detail-page.component';
import { MiQuizDetailPageComponent } from './mi-quiz-detail-page/mi-quiz-detail-page.component';
import { DiscQuizDetailPageComponent } from './disc-quiz-detail-page/disc-quiz-detail-page.component';
import { MbtiQuizDetailPageComponent } from './mbti-quiz-detail-page/mbti-quiz-detail-page.component';

//attempt pages
import { DiscQuizAttemptPageComponent } from './disc-quiz-attempt-page/disc-quiz-attempt-page.component';
import { BfQuizAttemptPageComponent } from './bf-quiz-attempt-page/bf-quiz-attempt-page.component';
import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page/mbti-quiz-attempt-page.component';
import { MiQuizAttemptPageComponent } from './mi-quiz-attempt-page/mi-quiz-attempt-page.component';

//result pages
import { MbtiQuizResultDetailPageComponent } from './mbti-quiz-result-detail-page/mbti-quiz-result-detail-page.component';
import { DiscQuizResultDetailPageComponent } from './disc-quiz-result-detail-page/disc-quiz-result-detail-page.component';

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
    MiQuizAttemptPageComponent,
    MbtiQuizResultDetailPageComponent,
    UserProfilePageComponent,
    DiscQuizDetailPageComponent,
    DiscQuizAttemptPageComponent,
    MiQuizDetailPageComponent,
    BfQuizAttemptPageComponent,
    BfQuizDetailPageComponent,
    DiscQuizResultDetailPageComponent,
    DoughnutChartComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DragDropModule,
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
