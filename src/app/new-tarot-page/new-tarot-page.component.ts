import { Tarot } from './../tarot-page/Tarot';
import { TarotServiceService } from './../tarot-page/tarot-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-tarot-page',
  templateUrl: './new-tarot-page.component.html',
  styleUrls: ['./new-tarot-page.component.scss']
})
export class NewTarotPageComponent implements OnInit {
  currentTarot?: Tarot = {};
  cardActive: Boolean = false;

  constructor(private tarotService: TarotServiceService) { }

  ngOnInit(): void {
    this.currentTarot = this.getRandomTarot();
  }

  getRandomTarot(): Tarot {
    let randomPos = Math.floor(Math.random() * 78);
    const tarot = this.tarotService.getTarotByIndex(randomPos) ?? {};
    return tarot;
  }

  cardClick() {
    if (!this.cardActive) {
      this.currentTarot = this.getRandomTarot();
    }
    this.cardActive = !this.cardActive;
  }
}
