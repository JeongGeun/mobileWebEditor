import { URLS, resultify, axiosInstance } from ".";

interface FileResponse {
  url: string;
}

export const uploadFiles = async (formData: any) => {
  return resultify<FileResponse>(
    axiosInstance.post(URLS.UPLOAD, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
