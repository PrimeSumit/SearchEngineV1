import { tokenizer } from "./tokenizer.js";

export class InvertedIndex {
  constructor() {
    this.index = {};
  }
  addDocument(docId, tokens) {
    for (let token of tokens) {
      if (!this.index[token]) {
        this.index[token] = {};
      }
      if (!this.index[token][docId]) {
        this.index[token][docId] = 1;
      } else {
        this.index[token][docId]++;
      }
    }
  }
  search(query) {
    const tokens = tokenizer(query);
    let scoreboard = {};
    tokens.forEach((token) => {
      const matchdocs = this.index[token];
      if (matchdocs) {
        for (let docId in matchdocs) {
          if (!scoreboard[docId]) scoreboard[docId] = 0;
          scoreboard[docId] += matchdocs[docId];
        }
      }
    });
    return Object.entries(scoreboard)
      .map(([id, score]) => ({ id, score }))
      .sort((a, b) => b.score - a.score);
  }
}
