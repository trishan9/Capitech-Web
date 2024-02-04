import type { Metadata } from "next";
import { Inter, Poppins, Roboto, Oswald } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";
import RecoilProvider from "@/components/providers/RecoilProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const fontInter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const fontRoboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const fontOswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const fontDigital = localFont({
  src: "../assets/fonts/DigitalNumbers.ttf",
  variable: "--font-digital",
});

export const metadata: Metadata = {
  title: "MIDAS Stock Broking Company Limited",
  description: "NEPSE Brokerage Company in Nepal",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,
          fontInter.variable,
          fontRoboto.variable,
          fontDigital.variable,
          fontOswald.variable,
          "bg-gray-50 font-primary",
        )}
      >
        <RecoilProvider>{children}</RecoilProvider>

        <Footer />
      </body>
    </html>
  );
}
