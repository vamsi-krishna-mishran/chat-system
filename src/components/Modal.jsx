import React from "react";
import './modal.css'



// import './login.css'
import {FullscreenExitOutlined,GoogleOutlined} from '@ant-design/icons'
import { Divider,Form,Input,Button } from 'antd';
import { useRef,useEffect    } from "react";
import GroupTemplate from "./GroupTemplate";

function Modal({createGroup}) {
    const modalRef=useRef(null)
    const [form] = Form.useForm();
    const logData=(values)=>{
        console.log(values);
    }
    const logError=(values)=>{
        console.log(values);
    }
    const closeModal=()=>{
        modalRef.current.style.display='none'
    }
    useEffect(()=>{
        const element=document.getElementById('my-modal-4')
        if(element){
            modalRef.current=element;
        }

    },[])
  return (
    <div id='my-modal-4' className='my-modal'>
    <div className="gradient-black2 box-shadow scale-in-center">
        <span title='close' className='close-icon' onClick={e=>closeModal()}><FullscreenExitOutlined /></span>

        
        {createGroup?<GroupTemplate/>:<>
        <Divider className='divider'><i>{"connect"}</i></Divider>

        <Form onFinishFailed={logError} onFinish={logData} layout="vertical" style={{
            
            }} form={form}>
            <Form.Item name="email" label={"connection email"} rules={[
                {
                required: true,
                type:'email'
                },
            ]}>
                <Input placeholder={"Enter friend email"} />
            </Form.Item>
            
            <Form.Item>
                <Button htmlType="submit" className='btn-login'>{open==1?"login":"send request"}</Button>
            </Form.Item>
        </Form></>}
    </div>
    </div>
  )
}




export default Modal;