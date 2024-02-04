"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { FC, ReactNode } from "react";
import type { LinkProps } from "next/link";
import { cn } from "@/lib/utils";
import { useScreenPosition } from "@/hooks";

interface ActiveLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

const ActiveLink: FC<ActiveLinkProps> = ({
  href,
  children,
  className = "",
  ...rest
}) => {
  const pathName = usePathname();
  const isActive = href === pathName;
  const screenPosition = useScreenPosition();

  return (
    <Link
      href={href}
      className={cn(
        className,
        isActive
          ? ` mb-[2px] rounded-b-md border-b-2 border-white bg-blue-100 bg-opacity-20  sm:bg-transparent sm:underline-offset-4 ${screenPosition > 160 ? "border-black" : "border-white"}`
          : "border-none bg-none",
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
