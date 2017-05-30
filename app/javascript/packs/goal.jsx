import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Goal = props => (
  <li>{ props.title }</li>
)

Goal.defaultProps = {
  title: 'David'
}

Goal.propTypes = {
  title: PropTypes.string
}

export default Goal
