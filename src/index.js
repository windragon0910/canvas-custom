import React from 'react'
import { render } from 'react-dom'
import 'fabric-webpack'

import DesignCanvas from './DesignCanvas'
import Rect from './Rect'
import Circle from './Circle'
import Image from './Image'

const App = () => (
  <div>
    <DesignCanvas>
      <Rect width={100} height={100} fill="blue" />
      <Circle radius={20} top={200} />
      <Image url="https://http.cat/100" scale={0.2} top={100} />
    </DesignCanvas>
  </div>
)

render(<App />, document.getElementById('root'))
