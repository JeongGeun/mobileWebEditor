import { InvitationList, getInvitationList } from "@/apis/list";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const GET_LIST_QUERY_KEY = "GET_LIST_QUERY_KEY";

export const useGetListQuery = (
  options?: Omit<
    UseQueryOptions<InvitationList[], AxiosError>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<InvitationList[], AxiosError, InvitationList[]>({
    queryKey: [GET_LIST_QUERY_KEY],
    queryFn: getInvitationList,
    ...options,
  });
};
