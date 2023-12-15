export const resultify = async (callback: Promise<Response>) => {
  try {
    const response = await callback;
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;

export const URLS = {
  INVITATION_LIST: `${baseUrl}/list`,
  CREATE_INVI: `${baseUrl}/create`,
};
