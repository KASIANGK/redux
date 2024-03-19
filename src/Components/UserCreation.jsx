import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from './Actions';

const UserCreation = () => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({ name, lastName, age }))
    setName('')
    setLastName('')
    setAge('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <button type="submit">ADD USER</button>
    </form>
  )
}

export default UserCreation