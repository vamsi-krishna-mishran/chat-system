import './chat.css'
import { SendOutlined } from '@ant-design/icons'
import UploadDoc from './UploadDoc'
import { Tooltip } from 'antd'
import Loader from './Loader'
import { useState, useEffect } from 'react'
import { Message } from '../models/index.js'

const userData = {
  "friend1": "vamsi",
  "friend2": "krishna",
  "friend3": "jani",
  "group4": "Software",
  "group5": "Firmware",
  "group6": "Mechanincal"
}

function Chat({ profile })
{
  const user = userData[profile]

  const [message, setMessage] = useState(new Message())
  console.log(message)
  const updateMessageText = (e) =>
  {
    const copiedMessage = JSON.parse(JSON.stringify(message));
    copiedMessage.message = e.target.value;

    setMessage(() => copiedMessage)

  }
  const sendMessage = (e) =>
  {
    console.log("send message cicked")
    console.log(message)
    setMessage(() => new Message())
  }
  useEffect(() =>
  {
    setMessage(new Message());
  }, [profile])
  // alert(profile)
  return (
    <div className='chat'>
      <h3>Messages</h3>
      <hr />
      <div className='entry-msg' style={{ pointerEvents: user == null ? 'none' : 'auto', opacity: user == null ? 0.8 : 1 }} >

        {/* <FileAddOutlined /> */}

        <div >
          <input value={message.message} onChange={updateMessageText} type='text' placeholder='message here' autoComplete="off"></input>
          <Tooltip placement="right" title="send">
            <SendOutlined onClick={sendMessage} />

          </Tooltip>
        </div>
        <div>
          <UploadDoc message={message} setMessage={setMessage} />
        </div>

      </div>
      <div className='render-msg'>
        <h1>{user}</h1>
        {user ? <>
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <ReceiveMessage />
          <SendMessage />
          <SendMessage />
          <ReceiveMessage />
        </> : <Loader />}

        {/* {/* <SendMessage />
        <ReceiveMessage />
        <SendMessage />
       */}
      </div>
    </div>
  )
}

const ReceiveMessage = () =>
{
  return <div className='receive-message'>
    <span>Hi bro.</span>
  </div>
}

const SendMessage = () =>
{
  return <div className='send-message'>
    <span>Hi, how are you?</span>
  </div>
}

export default Chat
