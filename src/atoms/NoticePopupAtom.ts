import { NoticeProps } from "@/components/NoticePopup/NoticePopup";
import { atom } from "recoil";

const NoticePopupAtom = atom({
  key: "noticePopupAtom",
  default: false,
});

export const NoticeDataAtom = atom({
  key: "noticeDataAtom",
  default: {} as NoticeProps,
});

export default NoticePopupAtom;
