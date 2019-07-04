export const resetNotification = () => {
  return {
    type: 'RESET_MESSAGE'
  }
}

export const setNotification = (message, timeoutInSecs) => {
  return {
    type: 'SET_MESSAGE',
    data: {
      message,
      timeout: timeoutInSecs * 1000
    }
  }
}

const initialState = {
  message: null
}

const notificationReducer = (state=initialState, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return action.data
    case 'RESET_MESSAGE':
      return {
        message: null
      }
    default: 
    return state
  }
}

export default notificationReducer