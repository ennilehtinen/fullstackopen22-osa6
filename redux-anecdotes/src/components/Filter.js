import { connect } from 'react-redux'
import { updateFilter } from '../reducers/filterReducer'

const Filter = props => {
  const handleChange = event => {
    const currentFilter = event.target.value
    props.updateFilter(currentFilter)
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

const mapDispatchToProps = {
  updateFilter
}

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter)
export default ConnectedFilter
