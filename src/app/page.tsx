import { WhyTrade } from "@/components/WhyTrade";
import { PopularCourses } from "@/components/PopularCourses";
import { StatsBar } from "@/components/StatsBar";
import ThreeSteps from "@/components/ThreeSteps/ThreeSteps";
import HeroBanner from "@/components/HeroBanner/page";
import Facebook from "@/components/Facebook/Facebook";
import Announcements from "@/components/Announcements/page";
import Blogs from "@/components/Blogs";
import { PaymentPartner } from "@/components/PaymentPartner";
import { CarouselComponent } from "@/components/carousel/carousel";
import { LiveStockPriceBar } from "@/components/LiveStockPriceBar";
import { PublicOfferings } from "@/components/PublicOfferings";
import { Notices } from "@/components/Notices";

export default function Home() {
  return (
    <section className=" h-full w-full">
      <HeroBanner>
        <CarouselComponent />
      </HeroBanner>
      <LiveStockPriceBar />
      <WhyTrade />
      <ThreeSteps />
      <PopularCourses />
      <Notices />
      <Facebook />
      <Announcements />
      <PublicOfferings />
      <Blogs />
      <StatsBar />
      <PaymentPartner />
    </section>
  );
}
