import { NextApiRequest, NextApiResponse } from "next/types";

const axios = require("axios");
const cheerio = require("cheerio");
const json = require("jsonwebtoken")

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
    const pageRoute = req.body.pageRoute;

    if (pageRoute == undefined) {
        return res.status(400).json({
            error: "Page Route has not been given."
        })
    }

    const url = `https://readnovelfull.com${pageRoute}`;
    
    axios
    .get(url)
    .then((response) => {
      // Load the HTML content using Cheerio
      const cheerioResponse = cheerio.load(response.data);
      
      // Text paragraphs
      const content = [];
      const paragraphs = cheerioResponse(".chr-c").find("p");
      paragraphs.each((index, element) => {
        const text = cheerioResponse(element).text();
        content.push(text);
      });

      // Prev+Next Chapter Links
      const prevLink = cheerioResponse('#prev_chap').attr('href');
      const prevTitle = cheerioResponse('#prev_chap').attr('title');
      const nextLink = cheerioResponse("#next_chap").attr('href');
      const nextTitle = cheerioResponse('#next_chap').attr('title');
      const signedLinkPrev = json.sign({
        title: `${prevTitle}`,
        link: `${prevLink}`
      }, 'thisSiteisWebScrapedLol');
      const signedLinkNext = json.sign({
        title: `${nextTitle}`,
        link: `${nextLink}`
      }, 'thisSiteisWebScrapedLol');
      
      const links = {
        prevChapter: signedLinkPrev,
        nextChapter: signedLinkNext
      } 

      return res.status(200).json({
        content,
        links
      })
    });
}