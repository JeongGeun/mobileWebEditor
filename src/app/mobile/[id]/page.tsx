import { getInvitatationInfo } from "@/apis/list";
import getQueryClient from "@/app/getQueryClient";
import MobileRender from "@/components/MobileRenderer";
import { GET_INVI_INFO_QUERY_KEY } from "@/query/useGetInviInfoQuery";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const data = await getInvitatationInfo(id);

  return {
    title: data.block.ogTitle,
    description: data.block.ogDescription,
    openGraph: {
      images: data.block.representativeImage,
    },
  };
}

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
