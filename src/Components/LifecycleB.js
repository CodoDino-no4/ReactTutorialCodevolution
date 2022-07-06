import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Alice'
        }
        console.log('LifecycleB Constructor')
    }

    static getDerivedStateFromProps(props, state) { 
        console.log('LifecycleB getDerivdState')
        return null
    }

    componentDidMount() { 
        console.log('LifecycleB ComponentDidMount')
    }
    render() {
      console.log('LifecycleB render')
    return (
        <div>
          Lifecycle B  
      </div>
    )
  }
}

export default LifecycleB