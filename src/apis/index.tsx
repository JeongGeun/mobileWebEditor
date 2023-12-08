import type { AxiosResponse } from "axios";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  timeout: 5000,
});
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
  INVITATION_LIST: "/list",
};
