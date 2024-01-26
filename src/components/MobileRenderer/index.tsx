"use client";

import { useGetInviInfoQuery } from "@/query/useGetInviInfoQuery";
import Renderer from "../Renderer";
import { useEffect } from "react";

interface MobileRendererProps {
  id: string;
}

export default function MobileRenderer({ id }: MobileRendererProps) {
  const { data } = useGetInviInfoQuery(id, { enabled: !!id });
  useEffect(() => {
    window.kakao.maps.load(() => {});
  }, []);
  return <Renderer data={data} isMobile />;
}
