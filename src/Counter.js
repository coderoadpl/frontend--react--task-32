import React from 'react'

import Number from './Number'

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
          <button
            onClick={this.inc}
          >
            +
          </button>
        </div>
      )
    }
}

export default Counter
