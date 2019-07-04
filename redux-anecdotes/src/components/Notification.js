import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { resetNotification } from '../reducers/notificationReducer'

const Notification = (props) => {

  useEffect(() => {
    if (props.notification.message !== null) {
      setTimeout(() => {
        props.resetNotification()
      }, props.notification.timeout)
    }
  }, [props])

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }
  if (props.notification.message === null) {
    return null
  }
  return (
    <div style={style}>
      {props.notification.message}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}

export default connect(
  mapStateToProps,
  { resetNotification }
)(Notification)