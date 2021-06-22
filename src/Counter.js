import React from 'react'

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
          <h1>{number}</h1>
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
