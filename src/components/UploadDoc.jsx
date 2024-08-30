import { useState, useEffect } from 'react';
import { FileAddOutlined } from '@ant-design/icons';
import { Button, Upload, Tooltip } from 'antd';
import './chat.css'

const UploadDoc = ({ message, setMessage }) =>
{
  console.log(message.files)
  const [fileList, setFileList] = useState(message.files);
  useEffect(() =>
  {
    setMessage((message) =>
    {
      const cloneMessage = JSON.parse(JSON.stringify(message));
      cloneMessage.files = fileList
      return cloneMessage
    })
  }, [fileList])

  useEffect(() =>
  {
    setFileList(message.files)
  }, [message])

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