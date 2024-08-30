import './ChatHome.css'
import Profile from './Profile'
import Chat from './Chat'
import Friend from './Friend'
import { useState } from 'react'

function ChatHome()
{

    const [tab, setTab] = useState('messages')

    return (
        <div className="chat-body">
            <Profile tab={tab} setTab={setTab} />
            {tab == 'messages' ? <ChatFriend /> : null}
        </div>
    )
}

function ChatFriend()
{
    const [profile, setProfile] = useState(null)
    //alert(profile)

    return (
        <>
            {profile != null ? <Chat profile={profile} /> : <div className='chat set-center'>Select a user to view chat</div>}

            <Friend setProfile={setProfile} />
        </>
    )
}

export default ChatHome
