import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    voteAnecdote (state, action) {
      const anecdoteIndex = state.findIndex(
        item => item.id === action.payload.id
      )
      const votedAnecdote = {
        ...state[anecdoteIndex],
        votes: state[anecdoteIndex].votes + 1
      }
      const newState = [...state]
      newState[anecdoteIndex] = votedAnecdote
      return newState.sort((a, b) => b.votes - a.votes)
    },
    addAnecdote (state, action) {
      const newState = [...state, action.payload]
      return newState
    },
    setAnecdotes (state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, addAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer
