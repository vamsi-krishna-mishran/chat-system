import React, { useState } from "react";
import './profileComp.css'
import './myAccount.css'
import { Select } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'

const options2 = ['None', 'Allow Everyone']
const allUsers = [{ name: 'vamsi', id: 1 }, { name: 'krshna', id: 2 }, { name: 'mani', id: 3 }
    , { name: 'vamsi', id: 4 }, { name: 'krshna', id: 5 }, { name: 'mani', id: 6 }
]

const SettingComp = () =>
{
    const [options, setOptions] = useState([options2[0], options2[0], options2[0]])//profile,lastseen,online.
    const [blockedUsers, setBlockedUsers] = useState(allUsers)
    console.log(options)
    const changeProfile = (e) =>
    {
        let clone = [...options]
        clone[0] = e
        setOptions((prev) => clone)

    }
    const changeLastSeen = (e) =>
    {
        let clone = [...options]
        clone[1] = e
        setOptions((prev) => clone)
    }
    const changeOnline = (e) =>
    {
        let clone = [...options]
        clone[2] = e
        setOptions((prev) => clone)
    }
    const unBlockUser = (user2) =>
    {
        setBlockedUsers((prev) => prev.filter(user => user.id != user2.id))
    }
    return (
        <div className="setting-comp">
            <b className="title-bold">Settings</b>
            <div className='option'>
                <label>Profile Picture</label>
                <Select
                    // defaultValue={options2[0]}
                    value={options[0]}
                    style={{
                        width: "100%",
                    }}
                    onChange={changeProfile}
                    options={options2.map((province) => ({
                        label: province,
                        value: province,
                    }))}
                />
            </div>
            <div className='option'>
                <label>Online Status</label>
                <Select
                    // defaultValue={options2[0]}
                    value={options[1]}
                    style={{
                        width: "100%",
                    }}
                    onChange={changeLastSeen}
                    options={options2.map((province) => ({
                        label: province,
                        value: province,
                    }))}
                />
            </div>
            <div className='option'>
                <label>Last seen</label>
                <Select
                    // defaultValue={options2[0]}
                    value={options[2]}
                    style={{
                        width: "100%",

                    }}
                    onChange={changeOnline}
                    options={options2.map((province) => ({
                        label: province,
                        value: province,
                    }))}
                />
            </div>
            <div className='option'>
                <div className='label-add'>
                    <label>Blocked Users</label>
                    <UserAddOutlined title='block a user' style={{ fontSize: '1.5rem', cursor: 'pointer' }} />
                </div>
                <div className="blocked-users-wrapper">
                    {blockedUsers.map((user) => <UserComponent unBlock={() => unBlockUser(user)} user={user} />)}
                </div>
            </div>
        </div>
    )
}

const UserComponent = ({ user, unBlock }) =>
{

    return (
        <div className='user-wrapper'>
            <div className='name-wrapper'>
                {user.name}
            </div>
            <div className='unblock-wrapper'>
                <button onClick={unBlock} title='unblock user'>unblock</button>
            </div>
        </div>
    )
}

export default SettingComp;