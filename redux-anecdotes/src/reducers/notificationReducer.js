export const setNotification = (notification) => {
  return {
    type: 'SET_MESSAGE',
    notification
  }
}

export const resetNotification = () => {
  return {
    type: 'RESET_MESSAGE'
  }
}

const notificationReducer = (state=null, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.notification
    case 'RESET_MESSAGE':
      return null
    default: 
    return state
  }
}

export default notificationReducer