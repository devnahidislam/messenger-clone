'use client'

import { signOut } from 'next-auth/react';

const Users = () => {
  return (
    <div>
      <h2>Users page</h2> 
      <button onClick={()=> signOut()}>LogOut</button>
    </div>
  );
}

export default Users;