import './ChatHome.css'
import Profile from './Profile'
import Chat from './Chat'
import Friend from './Friend'

function ChatHome() {


    return (
        <div className="chat-body">
            <Profile/>
            <Chat/>
            <Friend/>
        </div>
        )
}

export default ChatHome
