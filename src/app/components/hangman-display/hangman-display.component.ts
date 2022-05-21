import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hangman-display',
  templateUrl: './hangman-display.component.html',
  styleUrls: ['./hangman-display.component.css']
})
export class HangmanDisplayComponent implements OnInit {
  @Input() guesses: string[] = [];
  @Input() secretWord: string = '';

  MAX_GUESSES = 7;
  guessesRemaining;

  constructor() {
    this.guessesRemaining = this.MAX_GUESSES;
  }

  ngOnInit(): void {
  }

}
