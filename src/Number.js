import React from 'react'
import PropTypes from 'prop-types'

export const Number = (props) => {
  const {
    number,
    ...otherProps
  } = props

  return (
    <h1
      {...otherProps}
    >
      {number}
    </h1>
  )
}

Number.propTypes = {
  number: PropTypes.number.isRequired
}

export default Number
