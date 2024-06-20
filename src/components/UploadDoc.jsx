import  { useState } from 'react';
import {FileAddOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const UploadDoc = () => {
  const [fileList, setFileList] = useState([]);
  
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <>
      <Upload {...props}>
        <Button  icon={<FileAddOutlined />}></Button>
      </Upload>
    </>
  );
};
export default UploadDoc;