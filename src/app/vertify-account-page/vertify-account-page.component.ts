import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertify-account-page',
  templateUrl: './vertify-account-page.component.html',
  styleUrls: ['./vertify-account-page.component.scss'],
})
export class VertifyAccountPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', (event) => {
      function OTPInput() {
        const inputs: any = document.querySelectorAll('#otp > *[id]');
        for (let i = 0; i < inputs.length; i++) {
          inputs[i].addEventListener('keydown', (event: any) => {
            if (event.key === 'Backspace') {
              inputs[i].value = '';
              if (i !== 0) inputs[i - 1].focus();
            } else {
              if (i === inputs.length - 1 && inputs[i].value !== '') {
                return true;
              } else if (event.keyCode > 47 && event.keyCode < 58) {
                inputs[i].value = event.key;
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                event.preventDefault();
              } else if (event.keyCode > 64 && event.keyCode < 91) {
                inputs[i].value = String.fromCharCode(event.keyCode);
                if (i !== inputs.length - 1) inputs[i + 1].focus();
                return false;
                event.preventDefault();
              }
            }
          });
        }
      }
      OTPInput();
    });
  }
}
