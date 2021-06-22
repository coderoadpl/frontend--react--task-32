import React from 'react'

import Number from './Number'
import Button from './Button'

export class Counter extends React.Component {
    state = {
      number: 0
    }

    inc = () => {
      this.setState((prevState) => ({
        number: prevState.number + 1
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
            className={'button-class-name'}
            onClick={this.inc}
          />
        </div>
      )
    }
}

export default Counter
