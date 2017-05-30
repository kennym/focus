import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const NewGoalInput = props => {
  return (
    <input type="text" onKeyUp={handleKeyUp}/>
  )
}

const handleKeyUp = (e) => {
  if (e.key === "Enter") {
    // TODO Add goal
  }
}

export default NewGoalInput
