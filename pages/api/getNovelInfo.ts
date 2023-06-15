import { NextApiRequest, NextApiResponse } from 'next';
import { data } from './myNovels';
import axios from 'axios';

const cheerio = require("cheerio")

type NovelTarget = {
  title: string;
  link: string;
  novelId: number;
  img: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse): void {
  const novelId = req.body.novelId;

  if (novelId === undefined) {
    return res.status(400).json({
      error: 'Invalid call.',
    });
  }

  // Filter through the novels
  const novelTarget: NovelTarget | undefined = data.find((ele: NovelTarget) => {
    return ele.novelId == novelId;
  });

  if (novelTarget === undefined) {
    return res.status(302).json({
      error: "Novel not found in collection."
    })
  }

  axios.get(novelTarget.link).then(response => {
    const cheerioResponse = cheerio.load(response.data);

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



    // Description Text
    const descText = [];

    const pDescText = cheerioResponse(".desc-text").find("p");
    pDescText.each((index, element) => {
      const text = cheerioResponse(element).text();
      descText.push(text);
    })

    res.status(200).json({
      title: novelTarget.title,
      novelId: novelTarget.novelId,
      img: novelTarget.img,
      metaData,
      description: descText,
      latestChapter: chapterInfoValue
    })
  })

}
