"use client";

import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import Categories from "./Categories";
import BlogCard from "@/components/Blogs/BlogCard";
import { TBlogs } from "@/components/Blogs/index";
export type TBlogCategory = {
  id: number;
  name: string;
};
type BlogProps = {
  blogs: TBlogs[];
  categories: TBlogCategory[];
};

const Blogs = (props: BlogProps) => {
  const [activeCategoryId, setActiveCategoryId] = useState<number | string>(0);
  const [blogs, setBlogs] = useState<TBlogs[]>();
  const [blogExists, setBlogExists] = useState<boolean>(true);

  const onCategoryChange = (categoryId: number | string) => {
    setBlogExists(true);
    setActiveCategoryId(categoryId);

    if (categoryId == 0) {
      return setBlogs(props.blogs);
    }

    const selectedCategoryName = props.categories.find(
      (category) => category.id === categoryId,
    );
    const filteredBlogs = props.blogs.filter(
      (blog) => blog.category === selectedCategoryName?.name,
    );
    setBlogs(filteredBlogs);

    if (filteredBlogs.length == 0) setBlogExists(false);
  };

  useEffect(() => {
    setBlogs(props.blogs);
  }, [props.blogs]);

  return (
    <Fragment>
      <Categories
        data={props.categories}
        activeCategoryId={activeCategoryId}
        setActiveCategoryId={setActiveCategoryId}
        onCategoryChange={onCategoryChange}
      />
      <div className="my-12 flex w-full flex-col flex-wrap items-stretch justify-center gap-x-8 gap-y-1 px-16 md:flex-row xl:px-32">
        {!blogExists && (
          <p className="text-center md:col-span-2 lg:col-span-3">
            Blog doesn&apos;t exist for the selected category.
          </p>
        )}

        {blogs?.map((blog) => (
          <Link href={`/blogs/${blog.id}`} key={blog.id}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>
    </Fragment>
  );
};

export default Blogs;
