import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import anecdoteService from '../services/anecdotes'
import {
  addNotification,
  resetNotification
} from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const add = async e => {
    e.preventDefault()
    const { content } = e.target
    const newAnecdote = await anecdoteService.createAnecdote(content.value)
    dispatch(addAnecdote(newAnecdote))
    dispatch(addNotification(`Added '${content.value}'`))
    setTimeout(() => dispatch(resetNotification()), 5000)
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={add}>
        <div>
          <input name='content' />
        </div>
        <button>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm
