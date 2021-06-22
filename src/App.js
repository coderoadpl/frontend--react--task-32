import React from 'react'

import Counter from './Counter'
import Button from './Button'

export class App extends React.Component {
  state = {
    number1: 1,
    number2: 2,
    number3: 3
  }

  makeHandleChange = (counterNumber, delta) => () => this.setState((prevState) => ({
    ['number' + counterNumber]: prevState['number' + counterNumber] + delta
  }))

  reset1 = () => this.setState((prevState) => ({
    number1: 1
  }))

  reset2 = () => this.setState((prevState) => ({
    number2: 2
  }))

  reset3 = () => this.setState((prevState) => ({
    number3: 3
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
          onClickReset={this.reset1}
          number={this.state.number1}
        />
        <Counter
          onClickInc={this.makeHandleChange(2, 1)}
          onClickDec={this.makeHandleChange(2, -1)}
          onClickReset={this.reset2}
          number={this.state.number2}
        />
        <Counter
          onClickInc={this.makeHandleChange(3, 1)}
          onClickDec={this.makeHandleChange(3, -1)}
          onClickReset={this.reset3}
          number={this.state.number3}
        />
      </div>
    )
  }
}

export default App
