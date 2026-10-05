import React from 'react';
import Image from 'next/image';
import { discoverValidationDepths } from 'next/dist/server/app-render/instant-validation/instant-validation';
interface news{
    id: number,
    title: string,
    description: string,
    imageUrl:string

}
const Mainnews = ({news}:{news:news[]}) => {
  const [firstnews,...othernews] = news;
    return (
        <div className='flex gap-3'>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <Image
    width={500}
    height={600}
    alt='firstnewsimage'
    src={firstnews.imageUrl}
    />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstnews.title}</h2>
    <p>{firstnews.description}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="rounded-lg border border-gray-200 overflow-hidden bg-white">
  {othernews.slice(0,4).map((item) => (
    <div
      key={item.id}
      className="px-4 py-5 border-b border-gray-200 last:border-b-0"
    >
      <p className="text-xs text-red-600 mb-2">
        প্রধান খবর
      </p>

      <h3 className="text-base font-medium leading-6 text-gray-900">
        {item.title}
      </h3>
    </div>
  ))}
</div>
        </div>
    );
};

export default Mainnews;