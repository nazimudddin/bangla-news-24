import NewsCard from '@/components/NewsCard';
import { strict } from 'assert';
import React from 'react';

interface News {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    category:string
}

interface CategoryResponse {
    title: string;
    data: News[];
}

interface DetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
    const { id } = await params;

    const res = await fetch(
        `https://news-api-v2.vercel.app/api/category/${id}`
    );

    const data: CategoryResponse = await res.json();

    return (
        <div className="container mx-auto">
            <h4 className="my-10 border-b-3 border-red-700 pb-2 text-2xl font-bold text-red-700">
                {data.title}
            </h4>

            <div className="grid grid-cols-3 gap-4">
                {data.data.map((news) => (
                    <NewsCard
                        key={news.id}
                        news={news}
                    />
                ))}
            </div>
        </div>
    );
};

export default DetailPage;