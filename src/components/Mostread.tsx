import React from 'react';

interface newstype {
    id: string;
    title: string;
}

const Mostread = async () => {
    const res = await fetch(
        "https://news-api-v2.vercel.app/api/news/most-read"
    );

    const data = await res.json();
    const news: newstype[] = data.data;

    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">

            {/* Header */}
            <div className="mb-3 flex items-center gap-2 border-b border-gray-200 pb-3">
                <div className="h-5 w-1 rounded-full bg-red-600"></div>

                <h3 className="text-lg font-bold text-gray-900">
                    সর্বাধিক পঠিত
                </h3>
            </div>

            {/* News */}
            <div>
                {news.map((n, i) => (
                    <div
                        key={n.id}
                        className="group flex gap-3 border-b border-gray-100 py-2.5 last:border-none"
                    >
                        {/* Number */}
                        <div
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold
                            ${
                                i === 0
                                    ? "bg-red-600 text-white"
                                    : i === 1
                                    ? "bg-gray-700 text-white"
                                    : i === 2
                                    ? "bg-gray-500 text-white"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                        >
                            {i + 1}
                        </div>

                        {/* Title */}
                        <p className="cursor-pointer text-sm font-medium leading-6 text-gray-700 transition-colors group-hover:text-red-600">
                            {n.title}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Mostread;