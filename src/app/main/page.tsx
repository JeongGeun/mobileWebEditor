import { getInvitationList } from "@/apis/list";
import Main from "@/components/Main";
import { GET_LIST_QUERY_KEY } from "@/query/useGetListQuery";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import getQueryClient from "../getQueryClient";

const MainPage = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: [GET_LIST_QUERY_KEY],
    queryFn: getInvitationList,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Main />
    </HydrationBoundary>
  );
};

export default MainPage;
