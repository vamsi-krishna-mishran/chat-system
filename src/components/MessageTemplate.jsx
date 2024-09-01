import React from 'react'
import './messageTemplate.css'
import { FileOutlined, FilePdfOutlined, DownloadOutlined, FileImageOutlined, VideoCameraOutlined, MoreOutlined } from '@ant-design/icons';
import { Space, Dropdown, Menu } from 'antd';


function MessageTemplate({ message })
{

    const { messageId, sender, receiver, timeStamp, message: messageText, files, isDelivered, isViewd } = message;
    return (
        <div className='message-wrapper'>
            <div className='message-text'>{messageText}</div>
            {/* <hr /> */}
            <div className='message-attachments'>
                {files.map((file, ix) => <FileTemplate key={ix} file={file} />)}
            </div>
        </div>
    )
}
function FileTemplate({ file })
{
    console.log(file)
    const dropDownElementClicked = (e) =>
    {
        const opVal = +e.key
        console.log('Clicked item key:', opVal);
        if(opVal==1){
            //download the file..
            if (file) {
                const url = URL.createObjectURL(new Blob([file]));
                console.log("Blob URL:", url);
          
                const link = document.createElement("a");
                link.href = url;
                link.download = file.name; // Uses the original file name
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
          
                console.log("Download initiated for:", file.name);
              } else {
                console.log("No file selected.");
              }
        }
        // Add additional logic based on the clicked item's key
    };
    const menu = (
        <Menu style={{ backgroundColor: "rgba(0,0,0,0.7)", borderRadius: '2px', padding: '0rem' }} onClick={dropDownElementClicked}>
            <Menu.Item style={{ padding: '0.3rem' }} key="1">
                <div className='drop-down'>
                    <span>Download</span>
                    <Space>
                        <DownloadOutlined />
                    </Space>

                </div>
            </Menu.Item>

        </Menu>
    );


    let component = <FileOutlined />
    if (file.name.endsWith('.png') || file.name.endsWith('.jpg'))
    {
        component = <FileImageOutlined />
    }
    if (file.name.endsWith('.pdf'))
    {
        component = <FilePdfOutlined />
    }
    if (file.name.endsWith('.mp4'))
    {
        component = <VideoCameraOutlined />
    }

    const name = file.name.length > 25 ? file.name.substring(0, 15) + "..." : file.name;
    return <div className='attachment'>
        <Space>
            {component}
        </Space>
        <span>
            {name}
        </span>

        <Dropdown
            overlay={menu}
            placement="bottom"

        >
            <Space style={{ cursor: "pointer", borderRadius: '1px' }} title='more'>
                <MoreOutlined />
            </Space>
        </Dropdown>



    </div>
}

export default MessageTemplate