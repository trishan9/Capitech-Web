"use client";

import NoticePopupAtom, { NoticeDataAtom } from "@/atoms/NoticePopupAtom";
import NoticePopup, { NoticeProps } from "@/components/NoticePopup/NoticePopup";
import { useRecoilState } from "recoil";

const formatNoticeDate = (createdAt: string) => {
  const dateObject = new Date(createdAt);
  const day = dateObject.getDate();
  const month = dateObject.toLocaleString('default', { month: 'short' });
  const year = dateObject.getFullYear();
  
  return { day, month, year };
};

const NoticeBox = ({ data }: { data: NoticeProps[] }) => {
  const [, setIsOpen] = useRecoilState(NoticePopupAtom);
  const [, setData] = useRecoilState(NoticeDataAtom);

  return (
    <div className="flex max-h-[14.5rem] w-full items-start gap-32 overflow-y-auto px-4 py-4 md:max-w-[100rem]">
      <div className="grid-auto-rows-auto grid w-full grid-cols-1 gap-10 md:grid-cols-2">
        {data &&
          data.map((notice) => {
            const { day, month, year } = formatNoticeDate(notice.created_at);

            return (
              <div
                key={notice.id}
                onClick={() => {
                  setIsOpen(true);
                  setData(notice);
                }}
                className="flex w-full cursor-pointer items-center gap-3 rounded-md px-1 py-3 transition hover:bg-white hover:shadow-md"
              >
                <div className="flex w-1/2 flex-col items-center justify-center">
                  <h3 className="text-xl font-bold lg:text-4xl">
                    {day} <span className="text-primary">{month}</span>
                  </h3>
                  <p className="text-sm">{year}</p>
                </div>

                <h4 className="text-neutral text-xs leading-relaxed opacity-60 md:w-1/2 lg:text-base">
                  {notice.title}
                </h4>

                <NoticePopup />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NoticeBox;
