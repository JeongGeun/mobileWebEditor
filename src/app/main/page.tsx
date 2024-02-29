import { getInvitationList } from "@/apis/list";
import Main from "@/components/Main";
import { GET_LIST_QUERY_KEY } from "@/query/useGetListQuery";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

const MainPage = async () => {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: [GET_LIST_QUERY_KEY],
  //   queryFn: getInvitationList,
  // });

  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    //   <Main />
    // </HydrationBoundary>
    <Main />
  );
};

export default MainPage;
