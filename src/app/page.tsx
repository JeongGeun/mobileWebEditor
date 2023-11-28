"use client";

import { Button, Typography, Table } from "antd";
import styles from "./page.module.scss";
import { useEffect } from "react";
import { getInvitationList } from "@/apis/list";

const dataSource = [
  {
    key: "1",
    _id: "1",
    title: "동우&채련의 청첩장",
    date: "2023-05-08",
    createdBy: "손동우",
  },
];

const columns = [
  {
    title: "id",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "청첩장 제목",
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

const App = () => {
  useEffect(() => {
    async function getList() {
      const result = await getInvitationList();
      console.log(result);
      return result;
    }

    getList();
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Typography.Title>모청 리스트</Typography.Title>
        <Button type="primary">등록하기</Button>
      </div>
      <Table
        className={styles.table}
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
};

export default App;
