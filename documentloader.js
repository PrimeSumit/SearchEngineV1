import fs from "fs";
import path from "path";
const folderPath =
  "C:\\Users\RYZEN 5\OneDrive\Documents\Search Engine\data\raw";
export function loadDocuments(folderPath) {
  const filenames = fs.readdirSync(folderPath);
  const docs = filenames.map((filename) => {
    const filepath = path.join(folderPath, filename);
    const content = fs.readFileSync(filepath, "utf-8");
    return {
      id: filename,
      text: content,
    };
  });
  return docs;
}
