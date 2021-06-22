import React from 'react'

import Counter from './Counter'
import Button from './Button'

export class App extends React.Component {
  state = {
    number1: 1,
    number2: 2,
    number3: 3
  }

  handleInc = (counterNumber) => {
    const stateChange = {
      ['number' + counterNumber]: this.state['number' + counterNumber] + 1
    }
    this.setState(stateChange)
  }

  dec1 = () => this.setState((prevState) => ({
    number1: prevState.number1 - 1
  }))

  dec2 = () => this.setState((prevState) => ({
    number2: prevState.number2 - 1
  }))

  dec3 = () => this.setState((prevState) => ({
    number3: prevState.number3 - 1
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
          onClickInc={() => this.handleInc(1)}
          onClickDec={this.dec1}
          onClickReset={this.reset1}
          number={this.state.number1}
        />
        <Counter
          onClickInc={() => this.handleInc(2)}
          onClickDec={this.dec2}
          onClickReset={this.reset2}
          number={this.state.number2}
        />
        <Counter
          onClickInc={() => this.handleInc(3)}
          onClickDec={this.dec3}
          onClickReset={this.reset3}
          number={this.state.number3}
        />
      </div>
    )
  }
}

export default App
