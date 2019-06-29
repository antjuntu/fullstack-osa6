import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux';

const AnecdoteForm = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)
    props.setNotification(`created anecdote '${content}'`)
    setTimeout(() => {
      props.resetNotification()
    }, 5000)
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createAnecdote,
    setNotification,
    resetNotification 
  }
)(AnecdoteForm)