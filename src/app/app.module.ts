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
import { TarotServiceService } from './tarot-page/tarot-service.service';

//fa icon
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

//material ui
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatDividerModule } from '@angular/material/divider';

//sub component
import { ExpansionPanelComponent } from './holland-quiz-detail-page/expansion-panel/expansion-panel.component';
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

//Charts
import { DoughnutChartComponent } from './disc-quiz-result-detail-page/doughnut-chart/doughnut-chart.component';
import { RadarChartComponent } from './holland-quiz-result-detail-page/radar-chart/radar-chart.component';

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
import { HollandQuizDetailPageComponent } from './holland-quiz-detail-page/holland-quiz-detail-page.component';
import { DiscQuizDetailPageComponent } from './disc-quiz-detail-page/disc-quiz-detail-page.component';
import { MbtiQuizDetailPageComponent } from './mbti-quiz-detail-page/mbti-quiz-detail-page.component';

//attempt pages
import { DiscQuizAttemptPageComponent } from './disc-quiz-attempt-page/disc-quiz-attempt-page.component';
import { BfQuizAttemptPageComponent } from './bf-quiz-attempt-page/bf-quiz-attempt-page.component';
import { MbtiQuizAttemptPageComponent } from './mbti-quiz-attempt-page/mbti-quiz-attempt-page.component';
import { HollandQuizAttemptPageComponent } from './holland-quiz-attempt-page/holland-quiz-attempt-page.component';

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

// import { StaffPageComponent } from './staff/staff-page/staff-page.component';
// import { StaffDashboardComponent } from './staff/staff-page/staff-dashboard/staff-dashboard.component';
// import { StaffModule } from './staff/staff.module';
import { MajorDetailPageComponent } from './major-detail-page/major-detail-page.component';

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
    MajorDetailPageComponent,
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
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTreeModule,
    MatDividerModule,
  ],
  providers: [AuthService, TarotServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
