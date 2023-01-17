import { connect } from 'react-redux'

const Notification = ({ notification }) => {
  console.log(notification)
  if (!notification) return null
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return <div style={style}>{notification}</div>
}

const mapStateToProps = state => {
  console.log(state)
  return {
    notification: state.notification
  }
}

const ConnectedNotifications = connect(mapStateToProps)(Notification)

export default ConnectedNotifications
