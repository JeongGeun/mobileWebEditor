"use client";
import { Table } from "antd";
import { useGetListQuery } from "@/query/useGetListQuery";
import { useRouter } from "next/navigation";
import styles from "./page.module.scss";

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

export default function MainTable() {
  // v5에서 부터는 isLoading -> isPending으로 변경(데이터가 없는 상태를 의미)
  // V4 isInitialLoading은 데이터가 있지만 fetch되지는 않은 상태 v5에서는 isLoading으로 변경됨
  const { data } = useGetListQuery();
  const router = useRouter();

  return (
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
    />
  );
}
