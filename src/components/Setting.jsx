import React, { useState } from "react";
import './profileComp.css'
import './myAccount.css'
import { Select } from 'antd'

const options2 = ['None', 'Allow Everyone']


const SettingComp = () =>
{
    const [options, setOptions] = useState([options2[0], options2[0], options2[0]])//profile,lastseen,online.
    console.log(options)
    const changeProfile = (e) =>
    {
        let clone = [...options]
        clone[0] = e
        setOptions((prev) => clone)

    }
    const changeLastSeen = (e) =>
    {
        let clone = [...options]
        clone[1] = e
        setOptions((prev) => clone)
    }
    const changeOnline = (e) =>
    {
        let clone = [...options]
        clone[2] = e
        setOptions((prev) => clone)
    }
    return (
        <div className="setting-comp">
            <b className="title-bold">Settings</b>
            <div className='option'>
                <label>Profile Picture</label>
                <Select
                    // defaultValue={options2[0]}
                    value={options[0]}
                    style={{
                        width: "100%",
                    }}
                    onChange={changeProfile}
                    options={options2.map((province) => ({
                        label: province,
                        value: province,
                    }))}
                />
            </div>
            <div className='option'>
                <label>Online Status</label>
                <Select
                    // defaultValue={options2[0]}
                    value={options[1]}
                    style={{
                        width: "100%",
                    }}
                    onChange={changeLastSeen}
                    options={options2.map((province) => ({
                        label: province,
                        value: province,
                    }))}
                />
            </div>
            <div className='option'>
                <label>Last seen</label>
                <Select
                    // defaultValue={options2[0]}
                    value={options[2]}
                    style={{
                        width: "100%",

                    }}
                    onChange={changeOnline}
                    options={options2.map((province) => ({
                        label: province,
                        value: province,
                    }))}
                />
            </div>
        </div>
    )
}

export default SettingComp;