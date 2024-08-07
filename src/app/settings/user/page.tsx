import BugButton from '../../components/BugButton';
import { getUserInfo } from '@/app/lib/settings';
import React from 'react'

async function User() {
  const {age, email, name } = await getUserInfo();
  return (
    <div>
      <h1 className='text-2xl font-bold'>Settings Page User</h1>

      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    

      <div className='mt-4'>
        <BugButton />
      </div>      
    </div>
  );
}

export default User;