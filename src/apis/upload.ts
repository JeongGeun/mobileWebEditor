import axios from "axios";
import { URLS, resultify } from ".";

export const uploadFiles = async (formData: any) => {
  return await resultify(
    axios.post(URLS.UPLOAD, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
