const axios = require("axios");
const cheerio = require("cheerio");
const json = require("jsonwebtoken");

export default async function handler(req, res) {
  const keyword = req.body.keyword;

  const url = `https://readnovelfull.com/ajax/search-novel?keyword=${keyword}`;

  await axios
    .get(url)
    .then((response) => {
      const cheerioResponse = cheerio.load(response.data);

      // Links and titles
      const links = [];
      cheerioResponse("a").each((index, element) => {
        const title = cheerioResponse(element).attr("title");
        const href = cheerioResponse(element).attr("href");
        links.push({
          title,
          link: json.sign(href, "thisSiteisWebScrapedLol"),
        });
      });

      res.status(200).json(links);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: "An internal error has occured.",
      });
    });
}
