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

  constructor() {
    this.guessesRemaining = this.MAX_GUESSES;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const guessesCurrentValue: [] = changes?.['guesses']?.currentValue;
    if (guessesCurrentValue &&
      guessesCurrentValue.length &&
      guessesCurrentValue != changes?.['guesses'].previousValue) {
      console.log(guessesCurrentValue)
    }
    this.checkGuess(guessesCurrentValue[guessesCurrentValue.length - 1]);
  }

  checkGuess(letter: string) {
    let didWind = false;
    this.guessesRemaining -= this.wrongGuess(letter);
  }

  // Checks if the guessed letter is in the secretWord string (g = global, i = case sensetive)
  wrongGuess(letter: string) {
    const match = this.question.match(new RegExp(letter, 'gi'));
    return match ? 0 : 1;
  }
}
