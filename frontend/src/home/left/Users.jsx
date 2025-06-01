import React from 'react'
import User from './User'
import useGetAllUsers from "../../context/useGetAllUsers";

function Users() {
  const [allUsers, loading] = useGetAllUsers();
  console.log(allUsers);
  return (
    <div style={{maxHeight:"calc(84vh - 1vh)"}} className='py-2 hide-scrollbar overflow-y-auto'>
        {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
    </div>
  )
}

export default Users