import { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios");
const cheerio = require("cheerio");

export default async function handler(req: NextApiRequest,res:NextApiResponse) {
    const url = `https://readnovelfull.com${req.body.link}`;

    await axios.get(url).then((response) => {
        const cheerioResponse = cheerio.load(response.data);

        // Image
        const image = cheerioResponse(".book img").attr('src')
        // Title
        const title = cheerioResponse(".book img").attr('alt')
        // Description
        const description = []; 
        cheerioResponse('.desc-text').find("p").each((index, element) => {
            const text = cheerioResponse(element).text();
            description.push(text);
        })
        // Novel ID
        const novelID = cheerioResponse('#rating').attr('data-novel-id');

        const liInfoMeta = cheerioResponse(".info-meta").find("li");

        // Metadata Text
        const metaData = []

        liInfoMeta.each((index, element) => {
        const liH3 = cheerioResponse(element).find('h3').text();
        const liTxt = cheerioResponse(element).text();
        const cleanedLiTxt = liTxt.replace(liH3, '');
        metaData.push({
            heading: liH3,
            text: cleanedLiTxt
        });
        });

        // Latest Chapter Text
        const chapterInfoValue = cheerioResponse(".item").find(".item-value").text()

        return res.status(200).json({
            title: title,
            novelId: novelID,
            img: image,
            metaData,
            description: description,
            latestChapter: chapterInfoValue
          })
    })
}