import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-tarot-page',
  templateUrl: './random-tarot-page.component.html',
  styleUrls: ['./random-tarot-page.component.scss']
})
export class RandomTarotPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardClick(index:Number) {
    document.querySelectorAll(".card").forEach(card => {
      card.classList.add("trans-none");
    })
    document.querySelector(`.wrapper .card:nth-child(${index})`)?.classList.add(".move-top");
  }

}
