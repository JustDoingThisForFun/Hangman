import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent implements OnInit, OnChanges {
  @Input() guesses: string[] = [];
  @Input() secretWord: string = '';

  MAX_GUESSES = 7;
  guessesRemaining;

  constructor() {
    this.guessesRemaining = this.MAX_GUESSES;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['guesses'].currentValue &&
        changes['guesses'].currentValue.length &&
        changes['guesses'].currentValue != changes['guesses'].previousValue) {
      console.log(changes['guesses'].currentValue)
    }
  }
}
