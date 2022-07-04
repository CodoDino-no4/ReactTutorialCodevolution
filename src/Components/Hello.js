import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello Alice</h1>
    //     </div>
    // )

    return React.createElement(
        'div', null, React.createElement('h1', {id:'hello', className: 'dummy'}, 'Hello Alice'))
}

export default Hello