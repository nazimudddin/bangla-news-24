import { NewsCategory } from '@/type';
import Link from 'next/link';
import React from 'react';

const Navlinks = async() => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navs:NewsCategory[] =  data.data;
    const filternavs = navs.filter((filternav)=> filternav.scrapable)

    return (
        <div>
            <div className='flex justify-center items-center mt-4 gap-4'>
                <Link href="/">হোম</Link>
                {
                    filternavs.map((n,i)=> <Link key={i} href={`/category/${n.slug}`}>{n.title}</Link>)
                }
            </div>
        </div>
    );
};

export default Navlinks;