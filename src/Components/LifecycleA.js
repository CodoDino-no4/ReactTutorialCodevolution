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
        console.log('LifecycleA getDerivdState')
        return null
    }

    componentDidMount() { 
        console.log('LifecycleA ComponentDidMount')
    }
    render() {
      console.log('LifecycleA render')
    return (
        <div>
            Lifecycle A  
            <LifecycleB />
      </div>
    )
  }
}

export default LifecycleA