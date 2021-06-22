import React from 'react'
import PropTypes from 'prop-types'

import Number from './Number'
import Button from './Button'

export const Counter = (props) => {
  const {
    number,
    onClickInc,
    onClickDec,
    onClickReset
  } = props

  return (
    <div>
      <Number
        numberProp={number}
      />
      <Button
        label={'+'}
        onClick={onClickInc}
      />
      <Button
        label={'-'}
        onClick={onClickDec}
      />
      <Button
        label={'RESET'}
        onClick={onClickReset}
      />
    </div>
  )
}

Counter.propTypes = {
  onClickInc: PropTypes.func.isRequired,
  onClickDec: PropTypes.func.isRequired,
  onClickReset: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired
}

export default Counter
