
import React from "react";
import { useNavigate,Routes,Route } from "react-router-dom";
import ChatHome from "../../components/ChatHome";
import NotFound from "../notfound/NotFound";
import { useState } from "react";
import Profile from "../../components/Profile";
import ProfileComp from "../../components/ProfileComp";
import SettingComp from "../../components/Setting";




const NestedRoute=()=>{
    const [tab, setTab] = useState('messages')
    const auth=true;
    const navigate=useNavigate()
    const changeRoute=()=>{
        navigate('/')
    }

    if(!auth){
        //user is unathenticated.
        return (
            <div>
                <small> seems like you are not logged in</small>
                <button onClick={changeRoute}>Go to Home/Login</button>
            </div>
        );
    }

    return(<>
        <div className="chat-body">
            <Profile tab={tab} setTab={setTab} />
            
        
    
        <Routes>
            
            <Route path='/' element={<ChatHome/>}/>
            <Route path='/profile' element={<ProfileComp/>}/>
            <Route path='/settings' element={<SettingComp/>}/>

            <Route path='/*' element={<NotFound/>}/>
        </Routes>
        </div>
        
    </>);
}

export default NestedRoute;