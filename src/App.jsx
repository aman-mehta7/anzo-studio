import React from 'react'
import Pg1 from './pages/pg1'
import Pg2 from './pages/Pg2'
import Header from './components/Header'
import Pg1Bottom from './pages/Pg1Bottom'
import Pg3 from './pages/Pg3'
import Pg4 from './pages/Pg4'
import Pg5 from './pages/Pg5'
import Pg6 from './pages/Pg6'
const App = () => {
  return (
    <div>
      <Header />
      <Pg1 />
      <Pg1Bottom />
      <Pg2 />
      <Pg3 />
      <Pg4 />
      <Pg5 />
      <Pg6 />
    </div>
  )
}

export default App