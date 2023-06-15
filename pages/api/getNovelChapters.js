const axios = require("axios");
const cheerio = require("cheerio");
const json = require("jsonwebtoken");
const bcrypt = require("bcrypt");

export default function handler(req, res) {
  const novelID = req.body.novelID;

  if (novelID == undefined) {
    return res.status(404).json({
      error: "Novel ID not provided.",
    });
  }

  console.log("Fetching novel chapters...");

  const url = `https://readnovelfull.com/ajax/chapter-archive?novelId=${novelID}`;

  axios
    .get(url)
    .then((response) => {
      // Load the HTML content using Cheerio
      const cheerioResponse = cheerio.load(response.data);

      const links = [];
      cheerioResponse("a").each((index, element) => {
        const link = cheerioResponse(element).attr("href");
        const title = cheerioResponse(element).attr("title");

        const s = json.sign({ title, link }, "thisSiteisWebScrapedLol");

        links.push({ title, obj: s });
      });

      // Print the extracted links
      return res.status(200).json(links);
    })
    .catch((error) => {
      console.log("Error:", error);
      return res.status(404).json({
        error,
      });
    });
}
