const stopWords = new Set(["the", "is", "at", "in", "a", "and"]);

export function tokenizer(text) {
  let lowerText = text.toLowerCase();
  let cleanText = lowerText.replace(/[^a-z0-9\s.]/g, "");
  let wordsArray = cleanText.split(" ");
  let finalTokens = wordsArray.filter(word => word.length > 0 && !stopWords.has(word));
  return finalTokens;
}
