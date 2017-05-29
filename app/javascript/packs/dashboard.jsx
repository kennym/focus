import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Dashboard = props => (
  <div>Hello {props.name}!</div>
)

Dashboard.defaultProps = {
  name: 'David'
}

Dashboard.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
