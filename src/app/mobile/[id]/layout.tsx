import Script from "next/script";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=893057f10023d283eb6d23d177fbf578&autoload=false&libraries=services" defer/>
      <script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" defer/>
      {children}
    </>
  );
}
