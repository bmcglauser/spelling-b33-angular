import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectLetterService {
  chosenLetters: string[] = [];
  
  add(letter: string) {
    this.chosenLetters.push(letter);
  }
  backspace() {
    this.chosenLetters.pop();
  }
  clear() {
    this.chosenLetters = [];
  }
}
