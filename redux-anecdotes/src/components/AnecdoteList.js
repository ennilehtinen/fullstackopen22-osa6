import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote, initializeAnecdotes } from '../reducers/anecdoteReducer'

import { displayNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch])

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const vote = anecdote => {
    dispatch(addVote(anecdote))
    dispatch(displayNotification(`You voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {anecdotes
        .filter(anecdote =>
          anecdote.content.toLowerCase().includes(filter.toLowerCase())
        )
        .map(anecdote => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
