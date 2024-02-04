import Link from "next/link";
import { cn } from "@/lib/utils";

export type LinkGroup = {
  label: string;
  href?: string;
  icon?: any;
};

export type LinksGroupProps = {
  links: LinkGroup[];
  title: string;
  subTitle?: string;
  className?: string;
};

const LinkGroup = (props: LinksGroupProps) => {
  const { links, title, className, subTitle } = props;

  return (
    <div className={cn("flex flex-col items-start gap-4", className)}>
      <p className="font-poppins text-footerTitle font-semibold">{title}</p>

      {subTitle ? <p className="font-roboto font-bold">{subTitle}</p> : null}

      {links.map((link) => {
        if (link.icon) {
          return (
            <div key={link.label} className="flex w-full items-center gap-4">
              <link.icon className="max-h-5 min-h-5 min-w-5 max-w-5 text-primary" />

              <p
                key={link.label}
                className={cn(
                  "font-roboto text-gray-300",
                  link.href
                    ? "cursor-pointer  hover:text-white"
                    : "cursor-text",
                )}
              >
                {link.label}
              </p>
            </div>
          );
        } else {
          return (
            <Link key={link.label} href={link.href ?? ""}>
              <p
                className={cn(
                  "font-roboto text-gray-300",
                  link.href
                    ? "cursor-pointer  hover:text-white"
                    : "cursor-text",
                )}
              >
                {link.label}
              </p>
            </Link>
          );
        }
      })}
    </div>
  );
};
export default LinkGroup;
