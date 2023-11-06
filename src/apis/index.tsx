import type { AxiosResponse } from "axios";
import axios from "axios";

export const axiosInstance = axios.create({ timeout: 10000 });

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
