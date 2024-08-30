import { useState, useEffect } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { Button, Upload, Tooltip } from 'antd';
import './chat.css'

const UploadDoc = ({ setMessage }) =>
{
  const [fileList, setFileList] = useState([]);
  useEffect(() =>
  {
    setMessage((message) =>
    {
      const cloneMessage = JSON.parse(JSON.stringify(message));
      cloneMessage.files = fileList
      return cloneMessage
    })
  }, [fileList])
  const props = {
    onRemove: (file) =>
    {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);

    },
    beforeUpload: (file) =>
    {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <>
      <Upload {...props}>
        <Tooltip placement="bottom" title="attach a file">
          <Button icon={<FileAddOutlined />}></Button>

        </Tooltip>
      </Upload>
    </>
  );
};
export default UploadDoc;