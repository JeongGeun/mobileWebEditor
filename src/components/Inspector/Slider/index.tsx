import { useFileUploadMutation } from "@/queries/useFileUploadMutation";
import styles from "./index.module.scss";
import { UploadOutlined } from "@ant-design/icons";
import type { UploadFile, UploadProps } from "antd";
import { Button, Upload } from "antd";
import { useFieldArray } from "react-hook-form";

export default function SliderInspector() {
  const { fields: _fileList, append } = useFieldArray({ name: "block.fileList" });
  const fileList = (_fileList as unknown as UploadFile<any>[]) || [];
  const { mutate: fileUpload } = useFileUploadMutation();

  const props: UploadProps = {
    fileList,
    listType: "picture",
    customRequest({ file }) {
      const formData = new FormData();
      formData.append("file", file);
      fileUpload(formData, {
        onSuccess: ({ url }) => {
          append({ uid: `${new Date().getTime()}`, name: url, thumbUrl: url });
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
