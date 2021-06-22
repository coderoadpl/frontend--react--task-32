import React from 'react'
import PropTypes from 'prop-types'

export const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
    >
      +
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button
