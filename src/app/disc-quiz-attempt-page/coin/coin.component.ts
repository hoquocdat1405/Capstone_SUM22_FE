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
  @ViewChild('iconFalse') iconFalse!: ElementRef;
  @ViewChild('iconTrue') iconTrue!: ElementRef;
  @ViewChild('iconNone') iconNone!: ElementRef;
  @ViewChild('coin') coin!: ElementRef;
  @ViewChild('answer') answer!: ElementRef;

  @Output() messageClick = new EventEmitter();
  @Output() changeColor = new EventEmitter();

  @Input() answer2!: string;

  button = document.getElementsByClassName(
    'tri-state-toggle-button'
  ) as HTMLCollectionOf<HTMLElement>;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.toogle2.nativeElement.classList.add('active');
  }

  toogleClick(choose: string) {
    if (choose === 'false') {
      this.toogle1.nativeElement.classList.add('active');
      this.toogle2.nativeElement.classList.remove('active');
      this.toogle3.nativeElement.classList.remove('active');
      this.coin.nativeElement.style.background =
        'linear-gradient(to right, 	#ba3030, #ce2525)';
      this.coin.nativeElement.style.border = 'none';
      this.answer.nativeElement.style.color = '#fff';
      this.toogle1.nativeElement.style.background =
        'linear-gradient(to right, 	#ba3030, #ce2525)';

      this.iconFalse.nativeElement.classList.add('white-font');
      this.iconTrue.nativeElement.classList.remove('white-font');
      this.toogle3.nativeElement.style.background = '#e8eaeb';

      this.messageClick.emit({
        message: 'false',
        text: this.answer.nativeElement.innerText,
      });
      this.changeColor.emit();
    } else if (choose === 'true') {
      this.toogle3.nativeElement.classList.add('active');
      this.toogle1.nativeElement.classList.remove('active');
      this.toogle2.nativeElement.classList.remove('active');
      this.coin.nativeElement.style.background =
        'linear-gradient(135deg, #01a29d, #a0feb0)';
      this.coin.nativeElement.style.border = 'none';
      this.answer.nativeElement.style.color = '#fff';
      this.toogle3.nativeElement.style.background =
        'linear-gradient(135deg, #01a29d, #a0feb0)';

      this.toogle1.nativeElement.style.background = '#e8eaeb';
      this.iconTrue.nativeElement.classList.add('white-font');
      this.iconFalse.nativeElement.classList.remove('white-font');

      this.messageClick.emit({
        message: 'true',
        text: this.answer.nativeElement.innerText,
      });
      this.changeColor.emit();
    } else if (choose === 'none') {
      console.log('hahaha');
      this.toogle2.nativeElement.classList.add('active');
      this.toogle1.nativeElement.classList.remove('active');
      this.toogle3.nativeElement.classList.remove('active');
      this.coin.nativeElement.style.background = '#fff';
      this.coin.nativeElement.style.border = '3px solid #626161';
      this.answer.nativeElement.style.color = '#626161';
      this.toogle1.nativeElement.style.background = '#e8eaeb';
      this.toogle3.nativeElement.style.background = '#e8eaeb';

      this.toogle3.nativeElement.style.background = '#e8eaeb';
      this.iconTrue.nativeElement.classList.remove('white-font');
      this.iconFalse.nativeElement.classList.remove('white-font');
      this.answer.nativeElement.classList.remove('white-font');
      this.answer.nativeElement.style.color = '#626161';

      this.messageClick.emit({
        message: 'none',
        text: this.answer.nativeElement.innerText,
      });
      this.changeColor.emit();
    }
  }
}
