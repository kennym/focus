import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import Goal from "./goal"
import NewGoalInput from "./new_goal_input"

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const goals = []
    const titles = ["Test #1", "Test #2"]

    for (var title of titles) {
      goals.push(<Goal key={title} title={title} />)
    }

    return (
      <div id="dashboard">
        <ul>
          { goals }
        </ul>

        <NewGoalInput />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Dashboard />,
    document.body.appendChild(document.createElement('div')),
  )
})
