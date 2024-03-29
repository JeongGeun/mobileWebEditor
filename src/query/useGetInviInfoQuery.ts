import {
  FormListType,
  InvitationList,
  getInvitatationInfo,
  getInvitationList,
} from "@/apis/list";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

export const GET_INVI_INFO_QUERY_KEY = "GET_INVI_INFO_QUERY_KEY";

export const useGetInviInfoQuery = (
  id: string,
  options?: Omit<UseQueryOptions<FormListType, Error>, "queryKey" | "queryFn">
) => {
  return useQuery<FormListType, Error, FormListType>({
    queryKey: [GET_INVI_INFO_QUERY_KEY, id],
    queryFn: () => getInvitatationInfo(id),
    ...options,
  });
};
