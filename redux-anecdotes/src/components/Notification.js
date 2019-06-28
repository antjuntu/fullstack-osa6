import React from 'react'

const Notification = (props) => {
  const { notification } = props.store.getState()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }
  if (notification === null) {
    return null
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification