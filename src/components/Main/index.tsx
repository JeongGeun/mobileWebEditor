import { Suspense } from "react";
// import { useRouter } from "next/navigation";
// import { Button, Typography, Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";

import styles from "./page.module.scss";
import MainTable from "./Table";

const Main = () => {
  //  const router = useRouter();
  return (
    <>
      {/* <div className={styles.header}>
        <Typography.Title level={1} role="heading">
          모청 리스트
        </Typography.Title>
        <Button
          type="primary"
          // onClick={() => {
          //   router.push("/editor");
          // }}
          role="button"
        >
          등록하기
        </Button>
      </div> */}
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* <Spin
              indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            /> */}
            로딩중..
          </div>
        }
      >
        <MainTable />
      </Suspense>
    </>
  );
};

export default Main;
