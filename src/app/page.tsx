import Mainnews from "@/components/Mainnews";
import Marquee from "@/components/Marquee";
import Mostread from "@/components/Mostread";
import NewsCard from "@/components/NewsCard";
import Image from "next/image";
interface othersection {
  title: string;
  curationId: string;
  category: string;

  articles: {
    id: number;

    imageUrl: string;
    category: string;
    title: string;
    description: string;
  }[];
}

export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const mainnews = section[0].articles;
  const othersection:othersection[] = section.slice(1);
  return (
    <div>
      <Marquee></Marquee>
      <div className="grid-cols-3 grid max-w-7xl mx-auto">
        <div className="col-span-2">
          <Mainnews news={mainnews}></Mainnews>
          {othersection.map((os) => (
            <div key={os.curationId}>
              <p>{os.category}</p>
              <h1 className="font-bold pt-9">{os.title}</h1>
              <hr className="text-red-700 h-13 border-t-4 " />
              <div className="grid grid-cols-3 gap-2">
                {os.articles.map((news) => (
                  <NewsCard key={news.id} news={news}></NewsCard>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 "><Mostread></Mostread></div>
      </div>
    </div>
  );
}
