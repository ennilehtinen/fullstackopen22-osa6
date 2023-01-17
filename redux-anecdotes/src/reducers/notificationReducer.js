import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    addNotification (state, action) {
      return action.payload
    },
    resetNotification (state, action) {
      return ''
    }
  }
})

export const { addNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer
