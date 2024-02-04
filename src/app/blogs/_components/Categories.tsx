"use client";

import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { TBlogCategory } from "./Blogs";

type CategoriesProps = {
  data: TBlogCategory[];
  activeCategoryId: number | string;
  setActiveCategoryId: Dispatch<SetStateAction<number | string>>;
  onCategoryChange: (categoryId: number | string) => void;
};

const Categories = (props: CategoriesProps) => {
  return (
    <div className="mx-12 my-8 flex items-center justify-center gap-6">
      <button
        onClick={() => props.onCategoryChange(0)}
        className={cn(
          "flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-medium md:text-sm",
          props.activeCategoryId == 0
            ? "bg-primary text-white"
            : "border border-[#c3c3c3] bg-white text-text-black hover:border-primary",
        )}
      >
        All
      </button>

      {props.data.map((category) => (
        <button
          key={category.id}
          onClick={() => props.onCategoryChange(category.id)}
          className={cn(
            "flex items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-medium md:text-sm",
            props.activeCategoryId == category.id
              ? "bg-primary text-white"
              : "border border-[#c3c3c3] bg-white text-text-black hover:border-primary",
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
