import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectLetterService {
  selectedLetters: string[] = [];

  add = (letter: string) => {
    this.selectedLetters.push(letter);
  }
  backspace = () => {
    this.selectedLetters.pop();
  }

  clear = (() => {
    this.selectedLetters = [];
  }).bind(this);
}
