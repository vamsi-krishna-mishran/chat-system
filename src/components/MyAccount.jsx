import React from "react";
import './groupTemplate.css'

import './myAccount.css'
import './profileComp.css'

const MyAccount=()=>{

    return(
        <div className="wrap-account" >
            <b className="title-bold">My Account</b>
            <div className="my-account-wrapper">
                    {/* <!-- <b>My Account</b> --> */}
                    <div className="user-profile">
                        <div className="avatar-profile">
                            V
                        </div>
                        <b>vamsi</b>
                        <span style={{width:"10px",height:"10px",backgroundColor: "green",borderRadius: "50%",display: "block"}}></span>
                    </div>
                    <div className="edit-area">
                        <div className="option">
                            <div class="left-area">
                                <small className="key">display name</small>
                                <small className="value">Vamsi</small>
                            </div>
                            <div class="right-area">
                                <button class="edit">
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
            <button className="change-pwd">Change Password</button>
            
        </div>
    )
}

export default MyAccount;