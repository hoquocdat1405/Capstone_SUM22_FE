import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from '../nav/nav.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { QuizCarouselItemComponent } from '../quiz-carousel-item/quiz-carousel-item.component';
import { LandingNewsComponent } from '../landing-news/landing-news.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { NewsItemComponent } from '../news-item/news-item.component';
import { EduNewsItemComponent } from '../edu-news-item/edu-news-item.component';
import { LandingSchoolItemComponent } from '../landing-school-item/landing-school-item.component';
import { FooterComponent } from '../footer/footer.component';



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
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
