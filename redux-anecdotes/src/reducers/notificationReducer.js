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

export const displayNotification = (notification, duration) => {
  return async dispatch => {
    dispatch(addNotification(notification))
    setTimeout(() => dispatch(resetNotification()), duration * 1000)
  }
}

export default notificationSlice.reducer
