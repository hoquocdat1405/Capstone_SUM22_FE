import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  public quizes: { name: string; description: string; imgSrc: string }[];

  constructor() {
    this.quizes = [
      {
        name: 'Myers-Briggs Type Indication',
        description:
          'MBTI là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/mbti-fhd.jpg',
      },
      {
        name: 'DISC Test',
        description:
          'DISC là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/disc-fhd.jpg',
      },
      {
        name: 'Myers-Briggs Type Indication',
        description:
          'MBTI là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/big-five-fhd.jpg',
      },
      {
        name: 'Myers-Briggs Type Indication',
        description:
          'MBTI là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/mi-fhd.jpg',
      },
    ];
  }

  ngOnInit() {}

  //sau khi đã hoàn thành việc load cây DOM, hàm này chạy
  ngAfterViewInit(): void {
    //active cái slide đầu tiên trên banner trượt
    //không active nó không hiển thị lên view
    document
      .querySelector('.carousel-inner')
      ?.firstElementChild?.classList.add('active');
  }
}
