
import React from 'react'
import { useNavigate } from 'react-router-dom'

function AddFriend()
{
    const navigate = useNavigate()
    const handleClick = (e) =>
    {
        navigate("/")
    }
    return (
        <>
            <div>AddFriend
                <b><button onClick={handleClick}>Back To Home</button></b>
            </div>

        </>
    )
}

export default AddFriend