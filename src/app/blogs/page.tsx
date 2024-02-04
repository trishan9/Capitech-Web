"use client";

import { useEffect, useState } from "react";
import HeroBanner from "@/components/HeroBanner/page";
import Blogs from "./_components/Blogs";
import { TBlogs } from "@/components/Blogs/index";

const BLOG_CATEGORIES = [
  { id: 1, name: "Marketing" },
  { id: 2, name: "Trading" },
  { id: 3, name: "Stocks" },
];

const BlogsPage = () => { 
  const [data, setData] = useState<TBlogs[]>();
  useEffect(() => {
    const getBlogs = async () => {
      try {
        const res = await fetch(`/api/getblogs`);
        const result = await res.json();

        if (result.success) {
          setData(result.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getBlogs();
  }, []);
  return (
    <div>
      <HeroBanner>
        <div className="bg-gradient-bg flex h-[17rem] flex-col items-center justify-center gap-4 pb-3 pt-16 text-white md:h-[32rem]">
          <h1 className="h-fit text-3xl font-bold md:text-7xl">Our Blogs</h1>

          <p className="w-80 text-center text-xs md:w-[34rem] md:text-sm">
            
          </p>
        </div>
      </HeroBanner>

      <Blogs blogs={data || []} categories={BLOG_CATEGORIES} />
    </div>
  );
};

export default BlogsPage;
