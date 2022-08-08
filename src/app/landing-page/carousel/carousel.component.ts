import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  public quizes: { name: string; description: string; imgSrc: string,shorthand:string }[];

  constructor() {
    this.quizes = [
      {
        name: 'Myers-Briggs Type Indication',
        description:
          'MBTI là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/mbti-fhd.jpg',
        shorthand: 'mbti'
      },
      {
        name: 'DISC Test',
        description:
          'DISC là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/disc-fhd.jpg',
        shorthand: 'disc'
      },
      {
        name: 'Big Five Test',
        description:
          'Big Five là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/big-five-fhd.jpg',
        shorthand: 'big-five'
      },
      {
        name: 'Holland Test',
        description:
          'Holland là một trong những bài trắc nghiệm tính cách phổ biến nhất thế giới với hơn 2 triệu người mới sử dụng mỗi năm và đặc biệt được ứng dụng trong các hoạt động tuyển dụng, đánh giá nhân sự, giáo dục, hướng nghiệp… ',
        imgSrc: 'assets/img/holland-fhd.jpg',
        shorthand: 'holland'
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
