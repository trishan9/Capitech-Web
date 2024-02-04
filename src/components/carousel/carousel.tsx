"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useIsClient, useMediaQuery } from "usehooks-ts";
import { ChevronLeft, ChevronRight } from "lucide-react";

import SliderOne from "./_components/SliderOne";
import SliderTwo from "./_components/SliderTwo";
import SliderThree from "./_components/SliderThree";

const CarouselItemImage = (image: string, alt: string) => (
  <div className="w-full">
    <Image
      src={image}
      alt={alt}
      height={551}
      width={1000}
      priority
      unoptimized
      className="h-[100vh] object-cover brightness-50"
    />
  </div>
);

export const CarouselComponent = () => {
  const isClient = useIsClient();
  const isMobile = useMediaQuery("(min-width: 768px)");

  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      swipeable={false}
      className="relative"
      interval={5000}
      renderArrowPrev={(clickHandler, hasPrev, label) =>
        hasPrev && (
          <button
            type="button"
            onClick={clickHandler}
            title={label}
            className="absolute bottom-[calc(50%-15px)] z-[2] md:left-4"
          >
            <ChevronLeft
              size={37}
              fill="none"
              className="inline rounded-full text-white opacity-75 transition hover:opacity-100"
            />
          </button>
        )
      }
      renderArrowNext={(clickHandler, hasNext, label) =>
        hasNext && (
          <button
            type="button"
            onClick={clickHandler}
            title={label}
            className="absolute bottom-[calc(50%-15px)] right-0 z-[4] md:right-4"
          >
            <ChevronRight
              size={37}
              fill="none"
              className="inline rounded-full text-white opacity-75 transition hover:opacity-100"
            />
          </button>
        )
      }
    >
      <SliderOne />
      <SliderTwo />
      <SliderThree />
    </Carousel>
  );
};
