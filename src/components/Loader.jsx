import './loader.css'
import React from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';
function Loader()
{
    return (
        <div className='loader'>
            <Spin fullscreen={true}
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                        }}
                        spin
                    />
                }
            >

            </Spin>
            <div>Loading chat. please wait...</div>
        </div>
    )
}

export default Loader