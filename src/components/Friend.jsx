import './friend.css'
import { SearchOutlined} from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';

function Friend() {
  return (
    <div className='friend'>
      <h3>Chat</h3>
      <FormComp/>
      <div className='friend-wrap'>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          <RenderFriend/>
          
          
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

const RenderFriend=()=>{
  return <div className='one-friend'>
    HI
  </div>

}
export default Friend
