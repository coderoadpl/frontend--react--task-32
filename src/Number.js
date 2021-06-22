import React from 'react'
import PropTypes from 'prop-types'

export const Number = (props) => {
  const {
    numberProp,
    ...otherProps
  } = props

  return (
    <h1
      {...otherProps}
    >
      {numberProp}
    </h1>
  )
}

Number.propTypes = {
  numberProp: PropTypes.number.isRequired
}

export default Number
