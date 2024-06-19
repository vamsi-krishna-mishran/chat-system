import './login.css'
import {FullscreenExitOutlined,GoogleOutlined} from '@ant-design/icons'
import { Divider,Form,Input,Button } from 'antd';

function LogIn({open,OnLogin}) {
    const [form] = Form.useForm();
    const logData=(values)=>{
        console.log(values);
    }
    const logError=(values)=>{
        console.log(values);
    }
  return (
    <div className="gradient-black box-shadow scale-in-center">
        <span title='close' className='close-icon' onClick={e=>OnLogin(0)}><FullscreenExitOutlined /></span>

        <h2>{open==1?"Welcome Back to":"Ready to Explore Vibe With"}</h2>
        <h2>Chat Vibe</h2>
        {open==1&&<span className='google-icon'><GoogleOutlined /></span>}
        <Divider className='divider'><i>{open==1?"or login with":"register"}</i></Divider>

        <Form onFinishFailed={logError} onFinish={logData} layout="vertical" style={{
            maxWidth: 600,
            }} form={form}>
            <Form.Item name="email" label={"email"} rules={[
                {
                required: true,
                type:'email'
                },
            ]}>
                <Input placeholder={open==1?"enter registered email":"enter email"} />
            </Form.Item>
            {open==2&&<Form.Item rules={[{required:true}]} name='fullname' label="fullname">
                <Input placeholder="enter your fullname" />
            </Form.Item>}

            <Form.Item name="password" label="password" rules={[{required:true}]}>
                <Input.Password placeholder="enter password" />
            </Form.Item>
            {open==2&&<Form.Item dependencies={["password"]} name='reenterpassword' rules={[{required:true},({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),]} label="reenter password">
                <Input.Password placeholder="re-enter password" />
            </Form.Item>}
            <Form.Item>
                <Button htmlType="submit" className='btn-login'>{open==1?"login":"register"}</Button>
            </Form.Item>
        </Form>
    </div>
  )
}

export default LogIn
