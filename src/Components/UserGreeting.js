import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false
      }
    }   
    render() {

        // Element variable approach 

        // let message;
        // if (this.state.isLoggedIn) {
        //     message = 'Welcome Alice'
        // } else { 
        //     message= 'Welcome Guest'
        // }

        //   return (
        // <div>
        //     <div>{ message}</div>
        // </div>
        // )
        
        
        // If/else approach
        
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Alice
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        
        // Ternary approach
        
        // return (
        //     this.state.isLoggedIn ? <div>Welcome Alice</div> : 
        //         <div>Welcome Guest</div>
        // )
        
        // Short circuit approach
             return (
                this.state.isLoggedIn && <div>Welcome Alice</div>
        )


    }
}

export default UserGreeting