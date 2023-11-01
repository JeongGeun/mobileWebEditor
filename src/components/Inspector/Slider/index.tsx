import { useFileUploadMutation } from "@/queries/useFileUploadMutation";
import styles from "./index.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import { useState } from "react";
import { File } from "buffer";

export default function SliderInspector() {
  const [fileList, setFileList] = useState<UploadFile<any>[]>([]);
  const { mutate: fileUpload } = useFileUploadMutation();

  const props: UploadProps = {
    fileList,
    customRequest({ file }) {
      const formData = new FormData();
      formData.append("file", file);
      fileUpload(formData, {
        onSuccess: () => {
          console.log("success");
        },
      });
    },
  };
  return (
    <div className={styles.layout}>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Upload</Button>
      </Upload>
    </div>
  );
}
