import React from 'react'

function LogOut() {

localStorage.removeItem('token')

  return (
    <div>LogOut</div>
  )
}

export default LogOut 