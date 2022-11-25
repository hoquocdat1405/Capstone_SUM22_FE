import { Component, OnInit, OnChanges,Input, SimpleChanges } from '@angular/core';
import { TestMessage } from 'rxjs/internal/testing/TestMessage';
import { SharedService } from 'src/app/_services/shared.service';
import { Test } from 'src/app/_model/test.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})


export class CarouselComponent implements OnInit {
  // public quizes: { name: string; description: string; imgSrc: string,shorthand:string }[];

  @Input() quizes!: Test[];
  constructor() {}



  ngOnInit() {

  }

  //sau khi đã hoàn thành việc load cây DOM, hàm này chạy
  ngAfterViewInit(): void {
    //active cái slide đầu tiên trên banner trượt
    //không active nó không hiển thị lên view
    document
      .querySelector('.carousel-inner')
      ?.firstElementChild?.classList.add('active');
  }
}
