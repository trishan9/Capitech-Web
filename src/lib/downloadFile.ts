// @ts-ignore
import { saveAs } from "file-saver";

const downloadFile = (url: string, fileName: string) => {
  return saveAs(url, fileName);
};

export default downloadFile;
