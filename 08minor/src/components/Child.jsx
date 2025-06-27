import React from 'react'


// example of prop drilling

export default function Child(props) {
  return (
    <div>
      <i>Mai child hu {props.childprops} ka</i>
    </div>
  )
}
