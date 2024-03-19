import { useDispatch, useSelector } from 'react-redux';
import UserSlice from './UserSlice';
import { userSlice } from './UserSlice';
import { useState } from 'react';


const UsersList = () => {
  const users = useSelector(state => state.user.users) 
  const dispatch = useDispatch()
  // const [confirmation, setConfirmation] = useState(null)
  

  // function handleRemoveUser(index) {
  //   dispatch(userSlice.actions.removeUser(index))
  // }


  function handleRemoveUser(index) {
    if (window.confirm("remove user?")) {
      dispatch(userSlice.actions.removeUser(index))
    }
  }
  

  return (
    <div>
      <h2>USERS LIST</h2>
      <ul className='liste'>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} {user.lastName} {user.age}
            <button onClick={() => handleRemoveUser(index)}>REMOVE</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersList
