import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {

  question: string = '';
  secretWord: string[] = [];
  guesses: string[] = [];
  category: string = '';

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.getSecretWords().subscribe((response) => {
      this.secretWord = response.items;
      this.category = response.category;
      this.selectNewWord();
    });
  }

  guess(letter: string) {
    if (!letter || this.guesses.includes(letter)) {
      return;
    }
    this.guesses = [...this.guesses, letter]
  }

  dummyClick() {
    const key = prompt('Enter a key') || '';
    this.guess(key);
  }

  reset() {
    this.guesses = [];
    this.selectNewWord();
  }

  selectNewWord() {
    const randomWord = Math.floor(Math.random() * this.secretWord.length);
    this.question = this.secretWord[randomWord];
    console.log(this.question);
  }
}
