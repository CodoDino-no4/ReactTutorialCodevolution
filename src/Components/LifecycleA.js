import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: 'Alice'
    }
    console.log('LifecycleA Constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedState')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA ComponentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null;
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  changeState = () => {
    this.setState({
      name: 'Alice'
    })
  }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        Lifecycle A <br />
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA