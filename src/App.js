import React from 'react'

import Counter from './Counter'
import Button from './Button'

export const App = () => {
  return (
    <div>
      <Button
        label={'RESET ALL'}
        onClick={console.log}
      />
      <Counter />
      <Counter
        initialNumber={5}
      />
      <Counter
        initialNumber={10}
      />
    </div>
  )
}

export default App
