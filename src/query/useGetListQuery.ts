import { InvitationList, getInvitationList } from "@/apis/list";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export const GET_LIST_QUERY_KEY = "GET_LIST_QUERY_KEY";

export const useGetListQuery = (
  options?: Omit<
    UseQueryOptions<InvitationList[], Error>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<InvitationList[], Error, InvitationList[]>({
    queryKey: [GET_LIST_QUERY_KEY],
    queryFn: getInvitationList,
    ...options,
  });
};
