
import { marqueetype } from "@/type";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data = await res.json();
  const headlinks:marqueetype[] =  data.data;

  return (
    <div className="bg-red-600 text-white">
      {/* Content container */}
      <div className="max-w-7xl mx-auto flex items-center">

        {/* সর্বশেষ */}
        <div className="bg-red-800 px-4 py-2 whitespace-nowrap">
          সর্বশেষ
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden py-2">
          <MarqueeText direction="left" duration={10}>
            {headlinks.map((h) => (
              <span key={h.id}>
                <span>{h.title}</span>
                <span className="mx-5">•</span>
              </span>
            ))}
          </MarqueeText>
        </div>

      </div>
    </div>
  );
};

export default Marquee;

