import React, { Component } from 'react'
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom'

export class TestComponent extends Component {
  render() {
    return (
      <div>
        <p>If you see this after refreshing, it works.</p>
      </div>
    )
  }
}

export default withRouter(TestComponent)
