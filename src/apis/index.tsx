import type { AxiosResponse } from "axios";

export const resultify = async <T,>(result: Promise<AxiosResponse<T>>) => {
  try {
    const { data } = await result;
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const URLS = {
  UPLOAD: "/s3-upload",
};
