import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quiz-carousel-item',
  templateUrl: './quiz-carousel-item.component.html',
  styleUrls: ['./quiz-carousel-item.component.css']
})
export class QuizCarouselItemComponent {
  
  @Input() name!: string;
  @Input('description') des!: string;
  @Input('imgSrc') img!: string;
  @Input() shorthand!: string;

}
