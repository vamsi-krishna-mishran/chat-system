import './friend.css'
import { SearchOutlined,UserAddOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Form, Input, Menu } from 'antd';
import { Children, useEffect, useState } from 'react';
import { FloatButton } from 'antd';
import { useRef } from 'react';
import Modal from './Modal';



const items = [
  {
    label: 'Friends',
    key: 'friend',
  },
  {
    label: 'Groups',
    key: 'group',
  },
]

const friendlist2 = [{ id: 1, name: "vamsi" }, { id: 2, name: "krishna" }, { id: 3, name: "jani" }]
const grouplist2 = [{ id: 4, name: "group1" }, { id: 5, name: "group2" }, { id: 6, name: "group3" }]



function Friend({ setProfile })
{
  const [friendlist, setFriendList] = useState(friendlist2)
  const [grouplist, setGroupList] = useState(grouplist2)
  const [user, setUser] = useState(null)
  const [current, setCurrent] = useState('friend');
  const modalRef=useRef(null)
  //alert(current + user.toString())
  // alert(current)
  const onClick = (e) =>
  {
    console.log('click ', e);
    setCurrent(e.key);
    //setUser(null);
  };
  const handleChange = (curId) =>
  {
    setUser(() => curId);
    if (!current || !user)
      setProfile(null)
    else
      setProfile(() => (current + user.toString()))
  }

  const addGroupFriend=(e)=>{
    if(modalRef){
      modalRef.current.style.display='flex'
    }
  }
  useEffect(() => {
    const element = document.getElementById('my-modal-4');
    if (element) {
      modalRef.current = element; // Manually assign the element to the ref
      
    }
  }, []);

  useEffect(() =>
  {
    if (user == null || !current)
    {
      setProfile(null)
    }
    else
    {
      setProfile(() => (current + user.toString()))

    }
  }, [user])

  return (
    <div className='friend'>
      <h3>Chat</h3>
      <FormComp setGroupList={setGroupList} setFriendList={setFriendList} />
      <Menu className='active' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
      {current == 'friend' &&
        <div className='friend-wrap'>
          {friendlist.map((friend, ix) =>
          {
            return <RenderFriend key={ix} onClick={() => { handleChange(friend.id); }} selected={user == friend.id}>{friend.name}</RenderFriend>
          })}
          {/* <RenderFriend onClick={() => { handleChange(1); }} selected={user == 1}>Vamsi</RenderFriend>
          <RenderFriend onClick={() => { handleChange(2); }} selected={user == 2}>Krishna</RenderFriend>
          <RenderFriend onClick={() => { handleChange(3); }} selected={user == 3}>Jani</RenderFriend> */}

        </div>
      }
      {current == 'group' &&
        <div className='friend-wrap'>
          {grouplist.map((friend, ix) =>
          {
            return <RenderFriend key={ix} onClick={() => { handleChange(friend.id); }} selected={user == friend.id}>{friend.name}</RenderFriend>
          })}
        </div>
      }
      <FloatButton title={current=='friend'?'add new user':'create new group'}
      icon={current=='friend'?<UserAddOutlined title='add new user' />:<UsergroupAddOutlined title='create new group'/>}
      onClick={addGroupFriend}
      style={{
        insetInlineEnd: 84,
      
        backgroundColor:'var(--btn-color)',
        transform:'scale(1.5)',
        color:'white'
      }}
    />

   <Modal createGroup={current=='group'}/>

    </div>
  )
}
const FormComp = ({ setGroupList, setFriendList }) =>
{
  const prevFriend = friendlist2
  const prevGroup = grouplist2
  const updateSearch = (e) =>
  {
    const curPtrn = e.target.value;
    setGroupList(() =>
    {
      return prevGroup.filter(el => el.name.includes(curPtrn));

    });
    setFriendList(() =>
    {
      return prevFriend.filter(el => el.name.includes(curPtrn));
    });
  }

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}

    >
      <Form.Item
        name="search"

      >
        <Input autoComplete="off" onChange={updateSearch} style={{ borderBottom: 'none !important', color: 'black !important' }} prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="search here" />
      </Form.Item>



    </Form>
  );
}

const RenderFriend = ({ children, onClick, selected }) =>
{
  return <div onClick={onClick} className={selected ? 'one-friend active' : 'one-friend'}>
    <div className='img'>
      V
    </div>
    <div className='uname'>
      {children}
    </div>
  </div>

}
export default Friend




