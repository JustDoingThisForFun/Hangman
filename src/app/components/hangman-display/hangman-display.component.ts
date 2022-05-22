import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent implements OnInit, OnChanges {
  @Input() guesses: string[] = [];
  @Input() question: string = '';

  MAX_GUESSES = 7;
  guessesRemaining;
  success: boolean = false;

  constructor() {
    this.guessesRemaining = this.MAX_GUESSES;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const guessesCurrentValue: [] = changes?.['guesses']?.currentValue;
    if(guessesCurrentValue && changes?.['question'].currentValue != changes?.['question'].previousValue) {
      this.success = false;
      this.guessesRemaining = this.MAX_GUESSES;
    }
    if (guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue != changes['guesses'].previousValue) {
      console.log(guessesCurrentValue)
    }
    this.checkGuess(guessesCurrentValue[guessesCurrentValue.length - 1]);
  }

  checkGuess(letter: string) {
    let didWin = true;
    this.guessesRemaining -= this.wrongGuess(letter);
    for (let i = 0; i < this.question.length; i++) {
      if (!this.guesses.find((guess) => guess.toLowerCase() == this.question[i].toLowerCase())) {
        didWin = false;
        break;
      }
      this.success = didWin;
      if(this.success || this.guessesRemaining === 0) {
        console.log("Game over");
      }
    }
  }

  // Checks if the guessed letter is in the secretWord string (g = global, i = case sensetive)
  wrongGuess(letter: string) {
    const match = this.question.match(new RegExp(letter, 'gi'));
    return match ? 0 : 1;
  }
}
