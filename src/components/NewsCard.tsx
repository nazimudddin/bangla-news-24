import React from 'react';
import Image from 'next/image';
interface news{
    
imageUrl: string,
category: string,
title: string,
description:string

}
const NewsCard = ({news}:{news: news}) => {
    return (
        <div>
            <div className="card bg-base-100  shadow-sm">
  <figure>
    <Image
    src={news.
imageUrl}
    width={500}
    height={500}
    alt='newscard'
 />
  </figure>
  <div className="card-body">
    <p>{news.category
}</p>
    <h2 className="card-title">{news.title
}</h2>
    <p>{news.description}</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
        </div>
    );
};

export default NewsCard;