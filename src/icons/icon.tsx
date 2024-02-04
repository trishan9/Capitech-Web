import type { SVGProps } from "react";

export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

const Icon = ({
  size,
  height,
  width,
  className,
  children,
  ...rest
}: IconProps) => {
  const heightN = size !== -1 ? size : height;
  const widthN = size !== -1 ? size : width;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        size !== -1 ? `h-${size} w-${size}` : `h-${heightN} w-${widthN}`
      } ${className}`}
      width={widthN}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      {...rest}>
      {children}
    </svg>
  );
};

export default Icon;
