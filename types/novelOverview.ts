export interface NovelResponse {
  title: string;
  novelId: number;
  img: string;
  metaData: NovelMetaData[];
  description: string[];
  latestChapter: string;
}
  
export interface NovelMetaData {  
  heading: string;
  text: string;
}
  