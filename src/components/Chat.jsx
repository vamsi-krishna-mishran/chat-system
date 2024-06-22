import './chat.css'
import { SendOutlined } from '@ant-design/icons'
import UploadDoc from './UploadDoc'

function Chat({ profile })
{
  return (
    <div className='chat'>
      <h3>Messages</h3>
      <hr />
      <div className='entry-msg'>
        <UploadDoc />
        {/* <FileAddOutlined /> */}

        <input type='text' placeholder='message here'></input>
        <SendOutlined />

      </div>
      <div className='render-msg'>
        <h1>{profile}</h1>
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
