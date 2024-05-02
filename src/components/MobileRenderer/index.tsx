"use client";

import { useGetInviInfoQuery } from "@/query/useGetInviInfoQuery";
import Renderer from "../Renderer";

interface MobileRendererProps {
  id: string;
}

export default function MobileRenderer({ id }: MobileRendererProps) {
  const { data } = useGetInviInfoQuery(id, { enabled: !!id });

  return <Renderer data={data} isMobile />;
}
