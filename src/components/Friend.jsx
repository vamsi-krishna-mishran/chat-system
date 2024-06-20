import './friend.css'
import { SearchOutlined} from '@ant-design/icons';
import { Form, Input } from 'antd';
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
function Friend() {
  const [user,setUser]=useState(0)
  return (
    <div className='friend'>
      <h3>Chat</h3>
      <FormComp/>
      <div className='friend-wrap'>
          <RenderFriend onClick={()=>setUser(1)} selected={user==1}>Vamsi</RenderFriend>
          <RenderFriend onClick={()=>setUser(2)} selected={user==2}>Krishna</RenderFriend>
          <RenderFriend onClick={()=>setUser(3)} selected={user==3}>Jani</RenderFriend>
          
      </div>
    </div>
  )
}
const FormComp=()=>{
  const onFinish = (values) => {
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
        <Input style={{borderBottom:'none !important',color:'black !important'}} prefix={<SearchOutlined className="site-form-item-icon" />} placeholder="search here" />
      </Form.Item>
      
      
      
    </Form>
  );
}

const RenderFriend=({children,onClick,selected})=>{
  return <div onClick={onClick} className={selected?'one-friend active':'one-friend'}>
    <div className='img'>
      V
    </div>
    <div className='uname'>
      {children}
    </div>
  </div>

}
export default Friend
