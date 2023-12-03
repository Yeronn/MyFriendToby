import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'

function App () {
  const [showInterface, setShowInterface] = useState('Home')
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
      setShowInterface('Home')
    }
  }, [])

  const handleShowInterface = (interfaceOptionName) => {
    setShowInterface(interfaceOptionName)
  }

  const handleChangeUser = (newUser) => {
    if (user == null) {
      setUser(newUser)
      localStorage.setItem('user', JSON.stringify(newUser))
      console.log('Inicio de sesión exitoso:', newUser)
      handleShowInterface('Home')
    } else {
      setUser(null)
      localStorage.removeItem('user')
      console.log('Cierre de sesión')
      handleShowInterface('Home')
    }
  }

  return (
    <div className='app'>
      {(showInterface !== 'Login' && showInterface !== 'CreateAccount') &&
        <Header
          userLogged={user}
          handleChangeUser={handleChangeUser}
          handleShowInterface={handleShowInterface}
        />}
      <Main
        showInterface={showInterface}
        handleShowInterface={handleShowInterface}
        userLogged={user}
        handleChangeUser={handleChangeUser}
      />
    </div>
  )
}

export default App
