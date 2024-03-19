import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { userSlice } from './ComponentsBis/UserSlice' 
import UsersList from './ComponentsBis/UsersList'

function App() {
  const users = useSelector((state) => state.user.users) 
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  

  // const handleSubmit = (e) => {
  //   // empeche d'ecrire au clavier dans un champ texte
  //   e.preventDefault()
  //   dispatch(userSlice.actions.addUser({ name, lastName, age })) 
  //   setName('')
  //   setLastName('')
  //   setAge('')
  // }
  



  const handleSubmit = (e) => {

    // empeche d'ecrire au clavier dans un champ texte
    e.preventDefault()
  
    if (!name || !lastName || !age) {
      alert("provide the fields")
      return
    }
  
    const userAge = parseInt(age)
    if (userAge < 18 || userAge > 45) {
      alert("age between 18 and 45")
      return
    }
  
    dispatch(userSlice.actions.addUser({ name, lastName, age }))
    setName('')
    setLastName('')
    setAge('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="last name" />
        <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder="age" />
        <button type="submit">ADD USER</button>
      </form>
      <UsersList />
    </div>
  )
}

export default App
