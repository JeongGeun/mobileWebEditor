import styles from "./index.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import { useFieldArray } from "react-hook-form";
import { getUploadedS3Url } from "@/util/s3";

export default function SliderInspector() {
  const { fields: _fileList, append } = useFieldArray({
    name: "block.fileList",
  });
  const fileList = (_fileList as unknown as UploadFile<any>[]) || [];

  const props: UploadProps = {
    fileList,
    listType: "picture",
    customRequest: async ({ file }) => {
      const url = await getUploadedS3Url(file as File);
      append({ uid: `${new Date().getTime()}`, name: url, thumbUrl: url });
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
