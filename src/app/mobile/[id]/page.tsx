import { getInvitatationInfo } from "@/apis/list";
import getQueryClient from "@/app/getQueryClient";
import MobileRender from "@/components/MobileRenderer";
import { GET_INVI_INFO_QUERY_KEY } from "@/query/useGetInviInfoQuery";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

export const metadata = {
  title: "모바일 청첩장",
  description: "당신을 초대합니다.",
};

export default async function MobilePage({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = getQueryClient();
  const id = params.id;
  await queryClient.prefetchQuery({
    queryKey: [GET_INVI_INFO_QUERY_KEY, id],
    queryFn: () => getInvitatationInfo(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MobileRender id={id} />
    </HydrationBoundary>
  );
}
