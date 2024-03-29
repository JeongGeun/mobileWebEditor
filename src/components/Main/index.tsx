"use client";

import { Button, Typography, Table } from "antd";
import styles from "./page.module.scss";
import { useGetListQuery } from "@/query/useGetListQuery";
import { useRouter } from "next/navigation";

const columns = [
  {
    title: "id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "신랑 및 신부 정보",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "일자",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "등록한 사람",
    dataIndex: "createdBy",
    key: "createdBy",
  },
];

const Main = () => {
  // v5에서 부터는 isLoading -> isPending으로 변경(데이터가 없는 상태를 의미)
  // V4 isInitialLoading은 데이터가 있지만 fetch되지는 않은 상태 v5에서는 isLoading으로 변경됨
  const { data } = useGetListQuery();
  const router = useRouter();

  return (
    <>
      <div className={styles.header}>
        <Typography.Title level={1} role="heading">모청 리스트</Typography.Title>
        <Button
          type="primary"
          onClick={() => {
            router.push("/editor");
          }}
          role="button"
        >
          등록하기
        </Button>
      </div>
      {data &&
        <Table
          className={styles.table}
          dataSource={data}
          columns={columns}
          onRow={(record) => {
            return {
              onClick: () => {
                router.push(
                  `${process.env.NEXT_PUBLIC_BASE_API_URL}/editor?id=${record._id}`
                );
              },
            };
          }}
        />}

    </>
  );
};

export default Main;
