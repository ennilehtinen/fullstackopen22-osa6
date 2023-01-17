import { useDispatch } from 'react-redux'
import { updateFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = event => {
    const currentFilter = event.target.value
    dispatch(updateFilter(currentFilter))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter
