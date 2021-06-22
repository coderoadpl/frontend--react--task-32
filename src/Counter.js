import React from 'react'
import PropTypes from 'prop-types'

import Number from './Number'
import Button from './Button'

export class Counter extends React.Component {
  constructor (initialProps) {
    super()
    this.state = {
      number: initialProps.initialNumber
    }
  }

  inc = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1
    }))
  }

  dec = () => {
    this.setState((prevState) => ({
      number: prevState.number - 1
    }))
  }

  reset = () => {
    this.setState((prevState) => ({
      number: this.props.initialNumber
    }))
  }

  render () {
    const { number } = this.state

    return (
      <div>
        <Number
          numberProp={number}
        />
        <Button
          label={'+'}
          onClick={this.inc}
        />
        <Button
          label={'-'}
          onClick={this.dec}
        />
        <Button
          label={'RESET'}
          onClick={this.reset}
        />
      </div>
    )
  }
}

Counter.defaultProps = {
  initialNumber: 0
}

Counter.propTypes = {
  initialNumber: PropTypes.number
}

export default Counter
