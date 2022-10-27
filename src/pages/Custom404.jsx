import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Custom404 = () => {
const history = useNavigate()
    return (
    <div className='Custom404'>
        <p>Go back to <span style={{background: '#fff', color: '#000', cursor: 'pointer'}} onClick={()=> {history('/')}}> home page</span> <br /> <span>JHOOR</span></p>
    </div>
  )
}
