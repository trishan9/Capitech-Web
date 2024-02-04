"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import BlogCard from "./BlogCard";
import Image from "next/image";

export type TBlogs = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  category: string;
  likes: number;
  views: number;
  shares: number;
  table_of_contents: {
    id: string;
    topic: string;
  }[];
  topics: {
    id: number;
    tableOfContentId: string;
    heading: string;
    body: string;
  }[];
  created_at: string;
  updated_at: string;
};

const Blogs = () => {
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
    <section className="bg-gray-50 px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 py-20 xl:w-[1180px]">
      <div className="flex flex-col items-end">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Our Blogs
          </h1>
          <Image
            src="/lotties/underline.svg"
            width={180}
            height={20}
            alt="underline"
          />
        </div>

        <div
          className={`xl:px-15 2xl:px-40 grid w-full place-self-stretch ${data && data.length === 1 ? "justify-center" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} items-stretch gap-x-8 gap-y-2`}
        >
          {data?.slice(0, 3).map((blog) => (
            <Link
              href={`/blogs/${blog.id}`}
              key={blog.id}
              className="flex items-stretch"
            >
              <BlogCard blog={blog} />
            </Link>
          ))}
        </div>

        <Link
          href="/blogs"
          className="flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-primary/90"
        >
          <span>Explore Blogs</span>

          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default Blogs;