import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdote',
  initialState,
  reducers: {
    updateAnecdote (state, action) {
      const anecdoteIndex = state.findIndex(
        item => item.id === action.payload.id
      )
      const votedAnecdote = {
        ...state[anecdoteIndex],
        ...action.payload
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

export const {
  updateAnecdote,
  addAnecdote,
  setAnecdotes
} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const notes = await anecdoteService.getAll()
    dispatch(setAnecdotes(notes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch(addAnecdote(newAnecdote))
  }
}

export const addVote = anecdote => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.voteAnecdote(
      anecdote.id,
      anecdote.votes + 1
    )
    dispatch(updateAnecdote(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer
