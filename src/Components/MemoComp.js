import React from 'react'

function MemoComp() {
    console.log('Rendering memo component')
  return (
    <div>
          {name}
    </div>
  )
}

export default React.memo(MemoComp)
