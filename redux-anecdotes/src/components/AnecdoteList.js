import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
  const store = props.store
  const anecdotes = props.store.getState().anecdotes
  const filter = props.store.getState().filter

  const vote = (id) => () => {
    const votedAnecdote = anecdotes.find(a => a.id === id)

    store.dispatch(voteAnecdote(id))
    store.dispatch(setNotification(`you voted '${votedAnecdote.content}'`))
    setTimeout(() => {
      store.dispatch(resetNotification())
    }, 5000)
  }

  const anecdotesToShow = () => 
    anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

  return (
    <div>
      {anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList