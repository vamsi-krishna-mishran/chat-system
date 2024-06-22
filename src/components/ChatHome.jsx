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
    const [profile, setProfile] = useState('U-profile1')
    alert(profile)
    return (
        <>
            <Chat profile={profile} />
            <Friend setProfile={setProfile} />
        </>
    )
}

export default ChatHome
