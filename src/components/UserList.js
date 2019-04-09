import React from 'react'
import useResources from './useResouces'

const UserList=()=>{
  const users=useResources("users")

  return (
    <ul>{users.map(user=>{
      return <li key={user.id}>{user.name}</li>
    })}</ul>
  )
}

export default UserList