import { Component, OnInit } from '@angular/core';
import { HangmanService } from 'src/app/services/hangman.service';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.css']
})
export class HangmanComponent implements OnInit {

  question: string = '';
  secretWords: string[] = [];
  guesses: string[] = [];
  category: string = '';

  constructor(private hangmanService: HangmanService) { }

  ngOnInit(): void {
    this.hangmanService.getSecretWords().subscribe((response) => {
      this.secretWords = response.items;
      this.category = response.category;
      this.selectNewWord();
    });
  }

  guess(letter: string) {
    if (this.guesses.includes(letter)) {
      return;
    }
    this.guesses.push(letter);
  }

  reset() {
    this.guesses = [];
    this.selectNewWord();
  }

  selectNewWord() {
    const randomWord = Math.floor(Math.random() * this.secretWords.length);
    this.question = this.secretWords[randomWord];
    console.log(this.question);
  }

}
