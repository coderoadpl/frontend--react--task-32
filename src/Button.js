import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button
      {...props}
    >
      +
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
