import { initGA, logPageView } from '../utils/analytics'
import { Component } from 'react'

export default class Layout extends Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return <div>{this.props.children}</div>
  }
}
