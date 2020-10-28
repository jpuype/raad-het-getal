import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  gok = new FormControl('');
  gokReset = '';
  nrGuesses = 10;
  submittedGok = 0;
  turnsLeft = '';
  lowOrHi = '';
  secretNumber = Math.floor(Math.random() * 100) + 1;
  buttonStatus = false;
  message = '';

  submitGok(newGok): any  {
    this.submittedGok = parseInt(newGok, 10);
    this.nrGuesses--;
    this.gokReset = ' ';

    if (this.submittedGok === this.secretNumber) {
      this.turnsLeft = '';
      this.lowOrHi = 'PROFICIAT! U heeft het goed geraden!';
      this.buttonStatus = true;
    } else {
      this.turnsLeft = 'Nog ' + this.nrGuesses + ' beurten resterend!';
      this.lowOrHi =  (this.submittedGok < this.secretNumber) ? 'Kies een hoger getal!' : 'Kies een lager getal!';
      if (this.nrGuesses === 0) {
        this.buttonStatus = true;
        this.message = 'GAME OVER!!! het juiste getal was ' + this.secretNumber + ' !';
      }
    }
  }
}