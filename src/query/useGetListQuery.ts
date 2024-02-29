import { InvitationList, getInvitationList } from "@/apis/list";
import {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  useSuspenseQuery,
} from "@tanstack/react-query";

export const GET_LIST_QUERY_KEY = "GET_LIST_QUERY_KEY";

export const useGetListQuery = (
  options?: Omit<
    UseSuspenseQueryOptions<InvitationList[], Error>,
    "queryKey" | "queryFn"
  >
) => {
  return useSuspenseQuery<InvitationList[], Error, InvitationList[]>({
    queryKey: [GET_LIST_QUERY_KEY],
    queryFn: getInvitationList,
    ...options,
  });
};
