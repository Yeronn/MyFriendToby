import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App () {
  const [showInterface, setShowInterface] = useState('Home')

  const handleShowInterface = (interfaceOptionName) => {
    setShowInterface(interfaceOptionName)
  }
  return (
    <div className='app'>
      {(showInterface !== 'Login' && showInterface !== 'CreateAccount') &&
        <Header
          handleShowInterface={handleShowInterface}
        />}
      <Main showInterface={showInterface} handleShowInterface={handleShowInterface} />
    </div>
  )
}

export default App
