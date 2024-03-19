import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user', 
  initialState: {
    users: []
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload, 1)
    }
  }
})

export const { addUser, removeUser } = userSlice.actions 

export default userSlice.reducer
