import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound()
{
    const navigate = useNavigate()
    const handleClick = (e) =>
    {
        navigate("/")
    }
    return (
        <>
            <div>path NotFound.
                <b><button onClick={handleClick}>Back To Home</button></b>
            </div>

        </>
    )
}

export default NotFound