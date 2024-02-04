"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CourseCard from "./CourseCard";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const tabNames = ["All", "Class", "Course"];

interface CourseDataInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  content_url: string;
  content_type: string;
  category: string;
  note: string;
  date: string;
  created_at: string;
  updated_at: string;
}

const PopularCourses: React.FC = () => {
  const [courseData, setCourseData] = useState<
    CourseDataInterface[] | undefined
  >();
  const [filteredData, setFilteredData] = useState<
    CourseDataInterface[] | undefined
  >();
  const [selectedTab, setSelectedTab] = useState(0);

  const fetchCourseData = async () => {
    try {
      const res = await fetch("/api/getcourses");
      const data = await res.json();
      setCourseData(data.data);
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };

  useEffect(() => {
    fetchCourseData();
  }, []);

  useEffect(() => {
    setFilteredData(
      selectedTab === 0
        ? courseData
        : courseData?.filter(
            (item) => item.content_type === tabNames[selectedTab],
          ) || [],
    );
  }, [courseData, selectedTab]);

  const renderTabs = () => (
    <div className="flex items-center justify-center gap-6">
      {tabNames.map((name, index) => (
        <div
          key={index}
          className={cn(
            "flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 text-xs font-medium md:text-sm",
            selectedTab == index
              ? "bg-primary text-white"
              : "border border-[#c3c3c3] bg-white text-text-black hover:border-primary",
          )}
          onClick={() => setSelectedTab(index)}
        >
          <p className="font-medium ">{name}</p>
        </div>
      ))}
    </div>
  );

  const renderCourseCards = () => {
    const randomItems = filteredData
      ? filteredData.sort(() => Math.random() - 0.5).slice(0, 3)
      : [];

    return (
      <div className="flex  flex-col items-stretch justify-center gap-8 md:flex-row">
        {randomItems.slice(0, 3).map((course) => (
          <CourseCard
            key={course.id}
            cardImage={course.image}
            label={course.category}
            title={course.title}
            url={course.content_url}
            description={course.description}
            date={course.created_at}
            content_type={course.content_type}
            livedate={course.date}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="bg-gray-50 px-5">
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-10 py-20 xl:w-[1180px]">
        <div className="flex flex-col items-end">
          <h1 className="text-center text-3xl font-bold md:text-5xl">
            Popular Courses
          </h1>
          <Image
            src="/lotties/underline.svg"
            width={180}
            height={20}
            alt="underline"
          />
        </div>

        {renderTabs()}

        {renderCourseCards()}

        <Link
          href="/learning-app"
          className="flex items-center justify-center gap-1 rounded-lg bg-primary px-5 py-3 text-sm text-white transition hover:bg-primary/90"
        >
          Explore Courses
          <ArrowRight className="inline" color="#ffffff" />
        </Link>
      </div>
    </section>
  );
};

export default PopularCourses;
