"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HeartIcon from "@/assets/icons/Heart.png";
import EyeIcon from "@/assets/icons/Eye.svg";
import ShareIcon from "@/assets/icons/Share.svg";
import BlogCard from "@/components/Blogs/BlogCard";
import HeroBanner from "@/components/HeroBanner/page";
import { TBlogs } from "@/components/Blogs/index";

const BlogPreviewPage = ({
  params: { blogId },
}: {
  params: { blogId: number | string };
}) => {
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

  const blog = data?.find((blog) => blog.id == blogId);

  // const recommendedBlog = data?.find(
  //   (curBlog) => curBlog.id == blog.recommendedBlogId,
  // );

  return (
    <div>
      <HeroBanner>
        <div className="gradient-bg flex h-[17rem] flex-col items-center justify-center gap-4 px-8 pb-3 pt-16 text-white md:h-[32rem]">
          <h1 className="h-fit text-center text-xl font-bold md:text-5xl">
            {blog?.title}
          </h1>

          <p className="w-80 text-center text-xs md:w-[34rem] md:text-sm">
            {blog?.subtitle}
          </p>
        </div>
      </HeroBanner>

      <div className="p-4 py-8">
        <div className="grid w-full grid-cols-1 items-stretch justify-center border border-text-black md:grid-cols-2">
          <div className="flex w-full flex-col items-start justify-center gap-4 border-b border-b-text-black px-8 py-12 md:hidden md:px-24">
            <p className="text-xl text-text-black">Table of Contents</p>

            <ul className="flex w-full list-disc flex-col gap-5 rounded-xl bg-text-black p-5">
              {blog?.table_of_contents.map((content) => (
                <a href={`#${content.id}`} key={content.id}>
                  <li className="ml-5 text-white transition hover:opacity-80">
                    {content.topic}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center gap-8 border-r-text-black px-6 py-6 md:border-r md:py-12 xl:px-28">
            {blog?.topics.map((topic) => (
              <div
                key={topic.id}
                className="flex flex-col items-start justify-center gap-3"
              >
                <p id={topic.tableOfContentId} className="text-3xl font-medium">
                  {topic.heading}
                </p>

                <p className="text-justify text-text-black opacity-60">
                  {topic.body}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="my-auto hidden w-full items-center justify-center gap-3 self-center px-4 py-12 md:flex">
              {/* <div className="flex w-32 items-center justify-center gap-1 rounded-full bg-[#5D50F8] px-6 py-2 text-text-black">
                <Image src={HeartIcon} alt="Likes" />

                {blog?.likes}
              </div>

              <div className="flex w-32 items-center gap-1 rounded-full bg-[#5D50F8] px-6 py-2 text-text-black">
                <Image src={EyeIcon} alt="Views" />

                {blog?.views}
              </div>

              <div className="flex w-32 items-center gap-1 rounded-full bg-[#5D50F8] px-6 py-2 text-text-black">
                <Image src={ShareIcon} alt="Shares" />

                {blog?.shares}
              </div> */} 
            <Image
              src={blog?.image ?? "/default-image.jpg"} // Replace "/default-image.jpg" with your actual default image path
              alt="thumbnail"
              width={500}
              height={1000}
              className="mb-8 h-[130px] w-full rounded-2xl bg-white object-cover shadow-lg"
            />
          </div>

          <div className="hidden w-full flex-col items-start justify-center gap-4 border-t border-t-text-black px-8 py-12 md:flex xl:px-24">
            <p className="text-xl text-text-black">Table of Contents</p>

            <ul className="flex w-full list-disc flex-col gap-5 rounded-xl bg-text-black p-5">
              {blog?.table_of_contents.map((content) => (
                <a href={`#${content.id}`} key={content.id}>
                  <li className="ml-5 text-white transition hover:opacity-80">
                    {content.topic}
                  </li>
                </a>
              ))}
            </ul>
          </div>

          {/* <div className="flex w-full flex-col items-start justify-center gap-4 border-t border-t-text-black px-8 py-12 xl:px-24">
              <p className="text-xl text-text-black">Recommended</p>

              <Link href={`/blogs/${blog.recommendedBlogId}`}>
                {recommendedBlog ? <BlogCard blog={recommendedBlog} /> : null}
              </Link>
            </div> */}
        </div>
      </div>
    </div>
    </div >
  );
};

export default BlogPreviewPage;
