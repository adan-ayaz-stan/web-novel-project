import fs from 'fs';
import path from 'path';
const json = require("jsonwebtoken");

const myNovelsFilePath = path.join(process.cwd(), 'myNovels.json');

export default function handler(req, res) {
  const { novelId, title, link, img } = req.body;

  // Check if all params are provided
  if (!novelId || !title || !link || !img) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  // Read the existing data from myNovels.json file
  let data = [];
  try {
    const jsonData = fs.readFileSync(myNovelsFilePath, 'utf-8');
    data = JSON.parse(jsonData);
  } catch (error) {
    console.error('Error reading myNovels.json file:', error);
  }

  // Check if data of the same novelId is already present
  const existingIndex = data.findIndex((novel) => novel.novelId === novelId);

  // Remove existing data if found
  if (existingIndex !== -1) {
    data.splice(existingIndex, 1);
  }

  // Add new data at the start of the array
  const newData = { novelId, title, link: json.sign(link, "thisSiteisWebScrapedLol"), img };
  data.unshift(newData);

  // Write the updated data back to myNovels.json file
  try {
    fs.writeFileSync(myNovelsFilePath, JSON.stringify(data));
    res.status(200).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error('Error writing myNovels.json file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
