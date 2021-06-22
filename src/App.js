import React from 'react'

import Counter from './Counter'

export const App = () => {
  return (
    <div>
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
