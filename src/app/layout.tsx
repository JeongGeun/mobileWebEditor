import React from "react";
import { Inter } from "next/font/google";
import StyledComponentsRegistry from "../lib/AntdRegistry";
import AppLayout from "@/components/Layout";
import "react-calendar/dist/Calendar.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "모바일 청첩장 에디터",
  description: "누구나 간편하게 모바일 청첩장을 만들수 있다.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <body className={inter.className} style={{ margin: 0 }}>
      <StyledComponentsRegistry>
        <AppLayout>{children}</AppLayout>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
