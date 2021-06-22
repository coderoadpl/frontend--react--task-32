import React from 'react'

import Counter from './Counter'
import Button from './Button'

const initialState = {
  number1: 1,
  number2: 2,
  number3: 3
}

export class App extends React.Component {
  state = initialState

  makeHandleChange = (counterNumber, delta) => () => this.setState((prevState) => ({
    ['number' + counterNumber]: prevState['number' + counterNumber] + delta
  }))

  makeHandleReset = (counterNumber) => () => this.setState((prevState) => ({
    ['number' + counterNumber]: initialState['number' + counterNumber]
  }))

  render () {
    return (
      <div>
        <Button
          label={'RESET ALL'}
          onClick={console.log}
        />
        <Counter
          onClickInc={this.makeHandleChange(1, 1)}
          onClickDec={this.makeHandleChange(1, -1)}
          onClickReset={this.makeHandleReset(1)}
          number={this.state.number1}
        />
        <Counter
          onClickInc={this.makeHandleChange(2, 1)}
          onClickDec={this.makeHandleChange(2, -1)}
          onClickReset={this.makeHandleReset(2)}
          number={this.state.number2}
        />
        <Counter
          onClickInc={this.makeHandleChange(3, 1)}
          onClickDec={this.makeHandleChange(3, -1)}
          onClickReset={this.makeHandleReset(3)}
          number={this.state.number3}
        />
      </div>
    )
  }
}

export default App
