import CreateAccount from './createAccount/CreateAccount'
import Home from './home/Home'
import Login from './login/Login'
import './main.css'

export default function Main ({ showInterface, handleShowInterface }) {
  return (
    <div className='main'>

      {(showInterface === 'Login') && <Login handleShowInterface={handleShowInterface} />}

      {showInterface === 'CreateAccount' && <CreateAccount handleShowInterface={handleShowInterface} />}

      {showInterface === 'Home' && <Home />}
    </div>
  )
}
