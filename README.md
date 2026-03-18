# Node.js In-Memory Search Engine 🔍

A lightweight, from-scratch search engine built entirely in Node.js with zero external dependencies. This project demonstrates core computer science and search algorithms, including Tokenization, Inverted Indexes, and Term Frequency (TF) ranking.

## 🚀 Features

- **Custom Tokenization pipeline:** Converts raw text to lowercase, strips punctuation using Regular Expressions, and filters out common English stopwords using an $O(1)$ `Set` lookup.
- **Inverted Index Data Structure:** Utilizes a nested Hash Map (`{ "word": { "docId": frequency } }`) to achieve $O(1)$ lookups for search terms across hundreds of documents.
- **Mathematical Ranking:** Implements Term Frequency (TF) scoring to accurately rank documents based on keyword density.
- **Boolean "OR" Merging:** Automatically merges document scores when users search for multiple terms simultaneously.
- **Interactive CLI:** Includes a real-time, terminal-based search bar built with Node's native `readline` module.

## 🧠 System Architecture

The engine is modularized into four distinct parts:

1. `documentloader.js`: Crawls the local filesystem and loads raw `.txt` files into memory.
2. `tokenizer.js`: Cleans and standardizes the text strings into arrays of high-value tokens.
3. `invertedindex.js`: The core brain. Handles the $O(1)$ data storage, score aggregation, and sorting logic.
4. `app.js`: The main entry point that wires the modules together and launches the CLI.

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone [https://github.com/PrimeSumit/SearchEngineV1.git](https://github.com/PrimeSumit/SearchEngineV1.git)
   cd SearchEngineV1
   ```

   Initialize the project and enable ES Modules:

2. Bash
   npm init -y
   npm pkg set type="module"

3. Add Sample Data: Create a folder named data/raw/ in the root directory. Add a few .txt files containing sample text (e.g., sample1.txt, sample2.txt).

4. Start the search engine:

Bash
node app.js
