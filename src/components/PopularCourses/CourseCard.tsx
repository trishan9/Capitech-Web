"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Clock, List } from "lucide-react";
import { CourseCardInterface } from "./data";
import dotenv from "dotenv";
dotenv.config();

interface VideoDetail {
  contentDetails: {
    duration: string;
  };
}

const CourseCard: React.FC<CourseCardInterface> = ({
  cardImage,
  label,
  title,
  description,
  url,
  date,
  content_type,
  livedate,
}: CourseCardInterface) => {
  const [videoDuration, setVideoDuration] = useState("");
  const [lessons, setLessons] = useState(0);
  const [img, setImg] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const callVideoDetailsApi = async (videoId: string) => {
    try {
      const apiKey = "AIzaSyCCfkzCsYVWoxVGwCO5tRQSAJ_i-5H0I6o";
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        const videoDetails = data.items[0];
        const videoDuration = getDuration(videoDetails.contentDetails.duration);

        if (!isNaN(videoDuration)) {
          return videoDuration;
        } else {
          console.error("Invalid video duration:", videoDuration);
          return 0; // Return 0 seconds for invalid durations
        }
      } else {
        console.error("No video details found for video ID:", videoId);
        return 0; // Return 0 seconds for missing video details
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
      return 0; // Return 0 seconds for errors
    }
  };

  const formatDate = (createdAt: string) => {
    const dateObject = new Date(createdAt);
    const day = dateObject.getDate();
    const month = dateObject.toLocaleString("default", { month: "short" });
    const year = dateObject.getFullYear();
    // return the string value of the date object
    return `${day} ${month} ${year}`;
  };

  const formatLiveDate = (liveDate: string) => {
    const date = new Date(liveDate).toLocaleDateString();
    const dates = date.split("/");
    return dates;
  };

  const getDuration = (durationString: string = ""): number => {
    const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
    const matches = durationString.match(regex);

    if (matches) {
      const hours: number = parseInt(matches[1] || "0");
      const minutes: number = parseInt(matches[2] || "0");
      const seconds: number = parseInt(matches[3] || "0");
      const durationInSeconds: number = hours * 3600 + minutes * 60 + seconds;

      return durationInSeconds;
    }

    return 0; // Default to 0 seconds if no match is found
  };

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    setVideoDuration(
      `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds
        .toString()
        .padStart(2, "0")}`,
    );
  };

  const callPlaylistApi = async (playlistUrl: string) => {
    const playlistId = playlistUrl.split("list=")[1];
    const apiKey = "AIzaSyCCfkzCsYVWoxVGwCO5tRQSAJ_i-5H0I6o";
    const maxResults = 50;
    const apiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${playlistId}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.items) {
        setLessons(data.items.length);
        setImg(data.items[0]?.snippet?.thumbnails?.maxres?.url || "");
        const videoIds = data.items.map(
          (item: any) => item.snippet.resourceId.videoId,
        );

        // Fetch video details for all videoIds.
        Promise.all(
          videoIds.map((videoId: any) => callVideoDetailsApi(videoId)),
        ).then((videoDurations) => {
          // Sum up video durations in seconds.
          const totalDurationInSeconds = videoDurations.reduce(
            (acc, duration) => acc + duration,
            0,
          );
          // Set the total duration to your state variable.
          formatDuration(totalDurationInSeconds);
        });
      }
    } catch (error) {
      console.error("Error fetching playlist details:", error);
    }
  };

  const callVideoApi = async (videoUrl: string) => {
    try {
      const apiKey = "AIzaSyCCfkzCsYVWoxVGwCO5tRQSAJ_i-5H0I6o";
      const videoId = videoUrl.split("v=")[1];
      const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${videoId}&key=${apiKey}`;

      const response = await fetch(apiUrl);
      const data: { items: VideoDetail[] } = await response.json();

      if (data.items && data.items.length > 0) {
        const videoDetails = data.items[0];
        const videoDuration = getDuration(videoDetails.contentDetails.duration);
        formatDuration(videoDuration);
      }
    } catch (error) {
      console.error("Error fetching video details:", error);
    }
  };

  useEffect(() => {
    if (content_type === "Course") {
      callPlaylistApi(url);
    } else {
      callVideoApi(url);
    }
  }, []);

  return (
    <div className="ml-auto mr-auto mt-3 flex w-full md:mt-0 xl:w-[400px]">
      <div className="relative flex w-full flex-col rounded-2xl bg-white drop-shadow-sm">
        <Image
          alt="Tourists trekking in Nepal"
          src={img || cardImage}
          width={500}
          height={300}
          className="mb-8 h-[300px] w-full  rounded-t-2xl bg-white object-cover"
        />
        <p
          className={`${
            label.toLowerCase() === "live" ? "bg-red-500" : "bg-primary"
          } absolute top-10 rounded-r-md px-3 py-1 text-xs text-white`}
        >
          {label}
        </p>
        <div className="flex flex-grow flex-col items-start justify-between gap-3 p-5 pb-10 pr-6">
          <p className="text-xs text-black/70">{formatDate(date)}</p>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <h2 className="text-lg font-medium text-primary">{title}</h2>
            <p className="text-xs text-black/70">
            {showFullDescription ? description : `${description.slice(0, 200)}...`}
            <span
              className="text-primary cursor-pointer"
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {showFullDescription ? " See less" : " See more"}
            </span>
          </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex w-full items-center justify-start gap-3">
              <Clock className="inline text-primary" opacity={0.85} />
              <p className="text-sm font-medium text-black">
                {label === "live" ? formatDate(livedate) : videoDuration}
              </p>
            </div>
            <div className="flex w-full items-center justify-start gap-3">
              <List className="inline" opacity={0.85} />
              <p className="text-sm font-medium text-black">
                {lessons === 0 ? 1 : lessons}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
