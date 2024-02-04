import { Fragment } from "react";

const FacebookPagePreview = ({ pageNameOrId }: { pageNameOrId: string }) => {
  return (
    <Fragment>
      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${pageNameOrId}&tabs=timeline&width=500&height=750&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
        width="500"
        height="750"
        className="hidden overflow-hidden rounded-[21px] border-0 sm:block"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />

      <iframe
        src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F${pageNameOrId}&tabs=timeline&width=350&height=750&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
        width="350"
        height="750"
        className="overflow-hidden rounded-[21px] border-0 sm:hidden"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </Fragment>
  );
};

export default FacebookPagePreview;
