import { URLS, resultify, axiosInstance } from ".";

export const uploadFiles = async (formData: any) => {
  return resultify(
    axiosInstance.post(URLS.UPLOAD, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  );
};
