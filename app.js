import { loadDocuments } from './documentloader.js';
import { tokenizer } from './tokenizer.js';
import { InvertedIndex } from './invertedindex.js';
import readline from 'readline';
// 1. Setup the Engine
const mySearchEngine = new InvertedIndex();
const folderPath = "./data/raw"; 

// 2. Connect the Loader
const allDocs = loadDocuments(folderPath);

// 3. Connect the Tokenizer to the Index (The "Build" Phase)
console.log("Indexing 250 files... please wait.");

allDocs.forEach(doc => {
    const tokens = tokenizer(doc.text); // Clean the text
    mySearchEngine.addDocument(doc.id, tokens); // Store in Nested Hash Map
});

console.log("Search Engine Ready!");

// 4. Connect the Searcher to the User
const results = mySearchEngine.search("Ahmedabad tour");
console.log("Top Results:", results);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startSearch() {
  rl.question("\n🔍 Enter AI/ML search term (or 'exit'): ", (query) => {
    if (query.toLowerCase() === 'exit') return rl.close();

    const results = mySearchEngine.search(query);
    
    console.log(`\nFound ${results.length} results:`);
    results.slice(0, 5).forEach((res, i) => {
      console.log(`${i + 1}. ${res.id} (Score: ${res.score})`);
    });

    startSearch(); // Loop back to ask again
  });
}

startSearch();