import React from 'react'

export default function Output({ initialVal }) {
  const binaryVal = Number(initialVal).toString(2);
  return (
    <>
      <h2>The binary value of {initialVal} is:</h2>
      <h2>{binaryVal}</h2>
    </>
  )
}
