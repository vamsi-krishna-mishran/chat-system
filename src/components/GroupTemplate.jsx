

import React from "react";

import { useState , useEffect} from "react";
import {SearchOutlined, CloseOutlined, GroupOutlined} from '@ant-design/icons'
import { Badge,Avatar } from "antd";
import './groupTemplate.css'

const friendsout=[
    {
        name:"vmasi",
        id:1
    },
    {
        name:'krisna',
        id:2
    },
    {
        name:"vmasi",
        id:3
    },
    {
        name:'krisna',
        id:4
    },
    {
        name:'krisna',
        id:5
    },
    {
        name:"vmasi",
        id:6
    },
    {
        name:'krisna',
        id:7
    }
]
const GroupTemplate=()=>{

    const[friends,setFriends]=useState([])
    const[selectedUsers,setSelectedUsers]=useState([])
   
    const [text,setText]=useState('')
    const [groupName,setGroupName]=useState('')
    const handleRemove=(user)=>{
        setSelectedUsers((prev)=>prev.filter(el=>el.id!=user.id))
    }
    const handleAdd=(user)=>{
        const iscontain=selectedUsers.filter(el=>el.id==user.id)
        if(iscontain.length<=0)
            setSelectedUsers(prev=>[...prev,user])
    }
    const handleCreate=()=>{
        setSelectedUsers([])
        setText('')
        setGroupName('')
        
    }
    useEffect(()=>{

        setTimeout(()=>{
            setFriends(()=>friendsout)
            // setSelectedUsers(()=>friendsout)
        },2000)

    },[])

    useEffect(()=>{
        
            setFriends((prev)=>friendsout.filter(el=>el.name.includes(text)))
        
    },[text])
    const dis=selectedUsers.length==0 || groupName==""
    const btncolor=dis?'var(--disable-btn)':'var(--accent-color)'
    
    return(
        <div className='group-template-wrapper'style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            <h2>create group</h2>
            <div className="search-user" style={{display:'flex',borderBottom:'1px solid white',paddingBottom:'0.5rem'}}> 
                <GroupOutlined />
                    <input placeholder="group name" style={{width:'100%',
                        backgroundColor:'transparent',
                        outline:'none',border:'none',
                        color:'white',
                        padding:'0.31rem'
                        }} 
                    type='text' autoComplete="off" value={groupName} onChange={(e)=>setGroupName(e.target.value)}/>
            </div>
            <div className='selected-users' style={{display:'flex',gap:'1.5rem',flexWrap:'wrap',marginTop:'1rem',marginBottom:'1rem'}}>
                {selectedUsers.map((user,ix)=><User handleRemove={handleRemove} key={ix} user={user}/>)}
            </div>
            <div className="search-user" style={{display:'flex',borderBottom:'1px solid white'}}> 
                <SearchOutlined />
                    <input placeholder="search user" style={{width:'100%',
                        backgroundColor:'transparent',
                        outline:'none',border:'none',
                        color:'white',
                        padding:'0.31rem'
                        }} 
                    type='text' autoComplete="off" value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className="friend-list" style={{display:'flex',flexDirection:'column',marginTop:'1rem',gap:'1rem',height:'200px',overflow:'scroll'}}>
                {friends.map((friend,ix)=><Friend handleAdd={handleAdd}  key={ix} friend={friend}/>)}
            </div>
            <button title='create-group' onClick={()=>handleCreate()} disabled={dis?'disabled':''} style={{cursor:selectedUsers.length==0?'default':'pointer',border:'1px solid white',outline:'none',backgroundColor:btncolor,color:'white'}}>create group</button>
        </div>
    )
}

function User({user,handleRemove}){
    return(
        <div style={{display:'flex',flexDirection:'column',gap:'0.1rem'}}>
        <Badge onClick={()=>handleRemove(user)}  count={<CloseOutlined/>} style={{cursor:'pointer',backgroundColor:'rgba(0,0,0,0.4)',zIndex:50,margin:'0.1rem solid white',padding:'0.3rem',borderRadius:'50%'}}>
            <Avatar style={{transform:'scale(1.4)'}} >
                {user.name[0]}
            </Avatar>
        </Badge>
            <small>{user.name}</small>
        </div>
    )
}

function Friend({handleAdd,friend}){
    return(
        <div onClick={()=>handleAdd(friend)} style={{display:'flex',gap:'1rem',alignItems:'center'}} className='friend-temp'>
            <Avatar style={{transform:'scale(1.2)'}} >
                {friend.name[0]}
            </Avatar>
            <b>{friend.name}</b>
        </div>
    )
}
export default GroupTemplate;