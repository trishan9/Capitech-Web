export type TLinkObject = {
  label: string;
  href?: string;
  icon?: any;
};

export type LinksProps = {
  links: TLinkObject[];
  title: string;
  subTitle?: string;
  className?: string;
};
