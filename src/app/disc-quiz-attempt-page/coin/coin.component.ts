import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.scss'],
})
export class CoinComponent implements OnInit {
  @ViewChild('toogle1') toogle1!: ElementRef;
  @ViewChild('toogle2') toogle2!: ElementRef;
  @ViewChild('toogle3') toogle3!: ElementRef;
  @ViewChild('coin') coin!: ElementRef;
  @ViewChild('answer') answer!: ElementRef;

  @Output() messageClick = new EventEmitter();
  @Output() changeColor = new EventEmitter();

  @Input() answer2!: string;

  button = document.getElementsByClassName(
    'tri-state-toggle-button'
  ) as HTMLCollectionOf<HTMLElement>;
  constructor() {}

  ngOnInit() {
    this.activeToogle();
  }

  ngAfterViewInit() {
    this.toogle2.nativeElement.classList.add('active');
  }

  activeToogle() {}

  // toogleClick(choose: string) {
  //   if (choose === 'false') {
  //     this.toogle1.nativeElement.classList.add('active');
  //     this.toogle2.nativeElement.classList.remove('active');
  //     this.toogle3.nativeElement.classList.remove('active');
  //     this.coin.nativeElement.style.backgroundColor = 'red';
  //     this.messageClick.emit('false');
  //   } else if (choose === 'true') {
  //     this.toogle3.nativeElement.classList.add('active');
  //     this.toogle1.nativeElement.classList.remove('active');
  //     this.toogle2.nativeElement.classList.remove('active');
  //     this.coin.nativeElement.style.backgroundColor = 'green';
  //     this.messageClick.emit('true');
  //   } else {
  //     this.toogle2.nativeElement.classList.add('active');
  //     this.toogle1.nativeElement.classList.remove('active');
  //     this.toogle3.nativeElement.classList.remove('active');
  //     this.coin.nativeElement.style.backgroundColor = 'yellow';
  //     this.messageClick.emit('none');
  //   }
  // }

  toogleClick(choose: string) {
    if (choose === 'false') {
      this.toogle1.nativeElement.classList.add('active');
      this.toogle2.nativeElement.classList.remove('active');
      this.toogle3.nativeElement.classList.remove('active');
      this.coin.nativeElement.style.backgroundColor = 'red';
      this.messageClick.emit({
        message: 'false',
        text: this.answer.nativeElement.innerText,
      });
      this.changeColor.emit();
    } else if (choose === 'true') {
      this.toogle3.nativeElement.classList.add('active');
      this.toogle1.nativeElement.classList.remove('active');
      this.toogle2.nativeElement.classList.remove('active');
      this.coin.nativeElement.style.backgroundColor = 'green';
      this.messageClick.emit({
        message: 'true',
        text: this.answer.nativeElement.innerText,
      });
      this.changeColor.emit();
    } else {
      this.toogle2.nativeElement.classList.add('active');
      this.toogle1.nativeElement.classList.remove('active');
      this.toogle3.nativeElement.classList.remove('active');
      this.coin.nativeElement.style.backgroundColor = '#ccc';

      this.messageClick.emit({
        message: 'none',
        text: this.answer.nativeElement.innerText,
      });
      this.changeColor.emit();
    }
  }

  // changColorCoin(userAnswer: any) {
  //   if (userAnswer.wrong === this.answer.nativeElement.innerText) {
  //     this.coin.nativeElement.backgroundColor = 'red';
  //   } else if (userAnswer.right === this.answer.nativeElement.innerText) {
  //     this.coin.nativeElement.backgroundColor = 'green';
  //   }
  // }
}
