"use client";

import { Children, ReactNode, useState } from "react";
import { CarouselComponent } from "../carousel/carousel";
import Navbar from "../navbar/navbar";
import { useScreenPosition } from "@/hooks";

const HeroBanner = ({ children }: { children: ReactNode }) => {
  const screenPosition = useScreenPosition();

  return (
    <div>
      <Navbar screenPosition={screenPosition} />
      {children}
    </div>
  );
};

export default HeroBanner;
