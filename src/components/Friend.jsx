import './friend.css'
import { SearchOutlined } from '@ant-design/icons';
import { Form, Input, Menu } from 'antd';
import { Children, useState } from 'react';
// const list=[
//   <RenderFriend/>,
//   <RenderFriend/>,
//   <RenderFriend/>,
//   <RenderFriend/>,
//   <RenderFriend/>,
//   <RenderFriend/>,
//   <RenderFriend/>,
//   <RenderFriend/>
// ]

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
function Friend({ setProfile })
{
  const [user, setUser] = useState(1)
  const [current, setCurrent] = useState('friend');
  const onClick = (e) =>
  {
    console.log('click ', e);
    setCurrent(e.key);
    setUser(1);
  };
  return (
    <div className='friend'>
      <h3>Chat</h3>
      <FormComp />
      <Menu className='active' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
      {current == 'friend' &&
        <div className='friend-wrap'>
          <RenderFriend onClick={() => { setUser(() => 1); setProfile(() => current + user.toString()); }} selected={user == 1}>Vamsi</RenderFriend>
          <RenderFriend onClick={() => { setUser(() => 2); setProfile(() => current + user.toString()); }} selected={user == 2}>Krishna</RenderFriend>
          <RenderFriend onClick={() => { setUser(() => 3); setProfile(() => current + user.toString()); }} selected={user == 3}>Jani</RenderFriend>

        </div>
      }
      {current == 'group' &&
        <div className='friend-wrap'>
          <RenderFriend onClick={() => { setUser(() => 1); setProfile(() => current + user.toString()); }} selected={user == 1}>Group1</RenderFriend>
          <RenderFriend onClick={() => { setUser(() => 2); setProfile(() => current + user.toString()); }} selected={user == 2}>Gropu2</RenderFriend>
          <RenderFriend onClick={() => { setUser(() => 3); setProfile(() => current + user.toString()); }} selected={user == 3}>Romancham</RenderFriend>

        </div>
      }
    </div>
  )
}
const FormComp = () =>
{
  const onFinish = (values) =>
  {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="search"

      >
        <Input style={{ borderBottom: 'none !important', color: 'black !important' }} prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="search here" />
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
