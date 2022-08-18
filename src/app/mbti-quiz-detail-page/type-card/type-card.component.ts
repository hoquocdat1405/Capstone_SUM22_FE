import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss'],
})
export class TypeCardComponent implements OnInit {
  @Input() name!: string;
  @Input('shorthand') shorthand!: string;
  @Input('imgSrc') img!: string;
  @Input('isScalable') isScalelable: boolean = true;

  @ViewChild('cardBorder') cardBorder!: ElementRef;
  @ViewChild('cardBackground') cardBackground!: ElementRef;
  @ViewChild('tail') tail!: ElementRef;
  @Output() clickCard = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  viewCard(event: Event) {
    if (this.isScalelable) {
      this.cardBorder.nativeElement.classList.add(
        'card-border-click',
        'no-hover'
      );
      this.cardBackground.nativeElement.classList.add('background');
      this.tail.nativeElement.classList.add('tail-rotate');

      event.stopPropagation();
    }
  }

  unViewCard(event: Event) {
    if (this.isScalelable) {
      console.log(event.target);
      if (event.target === this.cardBackground.nativeElement) {
        this.cardBorder.nativeElement.classList.remove(
          'card-border-click',
          'no-hover'
        );
        this.cardBackground.nativeElement.classList.remove('background');
        this.tail.nativeElement.classList.remove('tail-rotate');
      }
    }
  }
}
