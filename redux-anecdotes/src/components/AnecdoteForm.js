import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  const store = props.store

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    store.dispatch(createAnecdote(content))
    store.dispatch(setNotification(`created anecdote '${content}'`))
    setTimeout(() => {
      store.dispatch(resetNotification())
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

export default AnecdoteForm