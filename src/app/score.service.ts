import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  totalPoints: number = 0;
  foundWords: string[] = [];

  addFound(w: string) {
    this.totalPoints += (w.length === 4) ? 1 : w.length;
    this.foundWords = [...this.foundWords, w];
  }
}
