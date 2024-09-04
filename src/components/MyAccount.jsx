import React, { useState, useEffect } from "react";
import { FullscreenExitOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { message } from "antd";
import './groupTemplate.css'

import './myAccount.css'
import './profileComp.css'
import './login.css'

const MyAccount = () =>
{
    const [open, setOpen] = useState(false)
    return (
        <div className="wrap-account" >
            <b className="title-bold">My Account</b>
            <div className="my-account-wrapper">
                {/* <!-- <b>My Account</b> --> */}
                <div className="user-profile">
                    <div className="avatar-profile">
                        V
                    </div>
                    <b>vamsi</b>
                    <span style={{ width: "10px", height: "10px", backgroundColor: "green", borderRadius: "50%", display: "block" }}></span>
                </div>
                <div className="edit-area">
                    <div className="option">
                        <div className="left-area">
                            <small className="key">display name</small>
                            <small className="value">Vamsi</small>
                        </div>
                        <div className="right-area">
                            <button className="edit">
                                Edit
                            </button>
                        </div>
                    </div>
                    <div className="option">
                        <div className="left-area">
                            <small className="key">email</small>
                            <small className="value">Vamsi</small>
                        </div>
                        <div className="right-area">
                            <button className="edit">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <b className="title-bold">Password and Authentication</b>
            <button onClick={() => setOpen(true)} className="change-pwd">Change Password</button>
            {open && <ChangePassword handleClose={setOpen} />}
        </div>
    )
}

const ChangePassword = ({ handleClose }) =>
{
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        e.stopPropagation();
        if (!(data2.curPwd.trim() != "" && data2.newPwd.trim() != "" && data2.newPwd2.trim() != ""))
        {
            message.error('empty fields detected.')
            return;
        }
        else if (data2.newPwd.trim() != data2.newPwd2.trim())
        {
            message.error('password mismatch detected')
            return;
        }

        message.success('sending password')
    }


    const [data2, setData] = useState({ curPwd: '', newPwd: '', newPwd2: '' })
    const [showPwd, setShowPwd] = useState(true);
    const [dis, setDis] = useState(true);
    const [misMatch, setMisMatch] = useState(false);

    let btncolor = dis ? 'var(--disable-btn)' : 'var(--accent-color)'
    useEffect(() =>
    {

        console.log(data2);
        if (data2.curPwd.trim() != "" && data2.newPwd.trim() != "" && data2.newPwd2.trim() != "")
        {
            if (data2.newPwd.trim() == data2.newPwd2.trim())
            {
                setDis(false);
                setMisMatch(false);
            }
            else
            {
                setDis(false);
                setMisMatch(true);

            }
        }
        else
        {
            setDis(true);

        }
    }, [data2])
    return <div className="change-pwd-wrapper ">
        <div className="gradient-black box-shadow scale-in-center  change-pwd-container">
            <span title='close' className='close-icon' onClick={e => handleClose(false)}><FullscreenExitOutlined /></span>
            <div className="change-pwd-form">

                <form onSubmit={(e) => { handleSubmit(e); return false; }}>
                    <fieldset>

                        <legend>Change Password</legend>


                        <div className="field-input">
                            <label> Current Password</label>
                            <input onChange={(e) => setData(prev => ({ ...prev, curPwd: e.target.value }))} value={data2.curPwd} autoComplete="off" type='text' placeholder="enter current password" />
                        </div>
                        <div className="field-input">
                            <label> New Password</label>
                            <input onChange={(e) => setData(prev => ({ ...prev, newPwd: e.target.value }))} value={data2.newPwd} autoComplete="off" type='password' placeholder="enter new password" />

                        </div>
                        <div className="field-input">
                            <label> Re Enter New Password</label>
                            <input onChange={(e) => setData(prev => ({ ...prev, newPwd2: e.target.value }))} value={data2.newPwd2} autoComplete="off" type={showPwd ? 'password' : 'text'} placeholder="reenter new password" />
                            {/* <small>new password and reenter password should be same</small> */}
                            <span onClick={(e) => { setShowPwd(prev => !prev) }} className="showpwd-icon-wrapper">
                                {showPwd ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </span>

                        </div>

                        <div className={"field-input"}>
                            <button style={{ backgroundColor: btncolor, pointerEvents: dis ? 'none' : "auto" }} type='submit'>Change Password</button>

                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
}

export default MyAccount;