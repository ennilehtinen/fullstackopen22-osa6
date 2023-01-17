import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {
  addNotification,
  resetNotification
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const vote = anecdote => {
    dispatch(voteAnecdote({ id: anecdote.id }))
    dispatch(addNotification(`You voted '${anecdote.content}'`))
    setTimeout(() => dispatch(resetNotification()), 5000)
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
