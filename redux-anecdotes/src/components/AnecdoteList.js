import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const vote = (id) => () => {
    const votedAnecdote = props.anecdotes.find(a => a.id === id)

    props.voteAnecdote(id)
    props.setNotification(`you voted '${votedAnecdote.content}'`)
    setTimeout(() => {
      props.resetNotification()
    }, 5000)
  }

  const anecdotesToShow = () => 
    props.anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(props.filter.toLowerCase())
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteAnecdote,
  setNotification,
  resetNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)