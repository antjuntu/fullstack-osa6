import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

  const vote = (id, content) => () => {
    props.voteAnecdote(id)
    props.setNotification(`you voted '${content}'`)
    setTimeout(() => {
      props.resetNotification()
    }, 5000)
  }

  return (
    <div>
      {props.anecdotesToShow.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter }) => 
    anecdotes.filter(anecdote => 
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    )

const mapStateToProps = (state) => {
  return {
    anecdotesToShow: anecdotesToShow(state)
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