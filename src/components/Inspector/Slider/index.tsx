import styles from "./index.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import { useFieldArray } from "react-hook-form";
import { deleteS3file, getUploadedS3Url } from "@/util/s3";

export default function SliderInspector() {
  const {
    fields: _fileList,
    append,
    remove,
  } = useFieldArray({
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
    onRemove: async (file: UploadFile<any>) => {
      const index = fileList.findIndex(({ uid }) => uid === file.uid);
      await deleteS3file(file);
      remove(index);
      window.alert("삭제되었습니다.");
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
