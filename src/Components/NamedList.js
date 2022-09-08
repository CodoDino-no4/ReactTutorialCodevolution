import React from 'react'
import Person from './Person'

function NamedList() {
  const names = [{ name: 'Alice', age: 25 }, { name: 'Emma', age: 24 }, { name: 'Tilly', age: 25 }, { name: 'Lewis', age: 25 }]
  const namedList = names.map(person => <Person key={person.name} person={person} />)
  return <div>{namedList}</div>

}

export default NamedList