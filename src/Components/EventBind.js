import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello!'
        }
        // Binding happens once in the constructor, so this is better for performance
        // Binding in the class constructor
        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    // }

    // Class property as arrow functions
    // Experimental feature, might be best to bind in the constructor
    clickHandler = () => { 
        this.setState({
            message: 'Goodbye!'
        })
    }

  render() {
    return (
        <div>
            <div>
                {this.state.message}
            </div>
            {/* This rerenders every time its called, could impact performance */}
            {/* Binding in render */}
            {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

            {/* Arrow functions in the render method, can still have performance issues */}
            {/* Easiest way to pass parameters */}
            {/* Arrow function in render */}
            {/* <button onClick={() => this.clickHandler()}>Click</button> */}

            <button onClick={ this.clickHandler}>Click</button>

      </div>
    )
  }
}

export default EventBind