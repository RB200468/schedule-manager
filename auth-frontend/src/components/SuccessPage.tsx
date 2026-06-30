import React from 'react'
import {useNavigate} from 'react-router-dom'

function SuccessPage() {
    const navigate = useNavigate();
  return (
    <div onClick={() =>navigate('/')}>SuccessPage</div>
  )
}

export default SuccessPage