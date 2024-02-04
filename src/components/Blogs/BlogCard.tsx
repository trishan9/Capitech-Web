import Image from "next/image";
import { TBlogs } from ".";

const BlogCard = ({ blog }: { blog: TBlogs }) => {
  return (
    <div className="mb-10 flex w-full flex-col items-start justify-center gap-3 rounded-xl bg-white px-5 py-7 shadow-lg transition hover:scale-105 hover:cursor-pointer hover:shadow-xl md:px-12  md:py-14 xl:w-[400px]">
      <Image
        src={blog.image}
        alt="thumbnail"
        width={500}
        height={300}
        className="mb-8 h-[130px] w-full rounded-2xl bg-white object-cover shadow-lg"
      />

      <p className="mb-1 text-sm text-text-black opacity-60 md:text-base">
        {new Date(blog.created_at).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </p>

      <p className="text-base font-medium text-text-black md:text-2xl">
        {blog.title}
      </p>

      <p className="text-sm text-text-black opacity-60 md:text-lg">
        {blog.subtitle}
      </p>
    </div>
  );
};

export default BlogCard;
