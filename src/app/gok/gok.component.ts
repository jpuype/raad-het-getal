import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-gok',
  templateUrl: './gok.component.html',
  styleUrls: ['./gok.component.css']
})
export class GokComponent {
  gok = new FormControl('');
  listGuesses: number[] = [];
  submittedGok = 0;
  lastResult = '';
  lowOrHi = '';
  secretNumber = Math.floor(Math.random() * 100) + 1;

  submitGok(newGok): any  {
    this.submittedGok = parseInt(newGok, 10);
    this.listGuesses.push(this.submittedGok);
    if (this.submittedGok === this.secretNumber) {
      this.lastResult = 'You\'ve got it!!';
      this.lowOrHi = 'Exactly Right!';
    } else {
      this.lastResult = 'Wrong!';
      this.lowOrHi =  (this.submittedGok < this.secretNumber) ? 'Too Low!' : 'Too High!';
    }
  }

}
