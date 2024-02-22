/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import React from "react";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import AppLayout from "@/components/Layout";
import "react-calendar/dist/Calendar.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Providers from "./providers";
import Script from "next/script";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import { server } from '@/mocks/node';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);


if (process.env.NODE_ENV === 'test') {
  server.listen();
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "모바일 청첩장 에디터",
  description: "누구나 간편하게 모바일 청첩장을 만들수 있다.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <head>
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=893057f10023d283eb6d23d177fbf578&autoload=false&libraries=services"
        strategy="beforeInteractive"
      />
      <Script
        src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        strategy="beforeInteractive"
      />
    </head>
    <body className={inter.className} style={{ margin: 0 }}>
      <Providers>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
