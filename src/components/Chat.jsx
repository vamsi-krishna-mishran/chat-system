import './chat.css'
import { SendOutlined, FileAddOutlined } from '@ant-design/icons'

function Chat()
{
  return (
    <div className='chat'>
      <h3>Messages</h3>
      <hr />
      <div className='entry-msg'>
        <FileAddOutlined />
        <input type='text' placeholder='message here'></input>
        <SendOutlined />

      </div>
      <div className='render-msg'>
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
        {/* <SendMessage />
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
    Hi bro.
  </div>
}

const SendMessage = () =>
{
  return <div className='send-message'>
    Hi, how are you?
  </div>
}

export default Chat
