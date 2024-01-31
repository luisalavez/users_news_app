
import React from 'react'
import H1 from '../UI/H1'
import UserForm from './UserForm'
import { UserT } from '../../lib/types';

export default function Create() {
    const userFile: UserT =  {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
      };
  return (
    <>
        <H1>User Information</H1>
        <UserForm {...userFile} />
    </>
  )
}
