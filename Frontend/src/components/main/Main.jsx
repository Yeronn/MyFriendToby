import CreateAccount from './createAccount/CreateAccount'
import Home from './home/Home'
import Login from './login/Login'
import './main.css'
import MyPets from './myPets/MyPets'
import Notification from './notification/Notification'
import Configuration from './configuration/Configuration'

export default function Main ({ showInterface, handleShowInterface, userLogged, handleChangeUser }) {
  return (
    <div className='main'>

      {(showInterface === 'Login' && !userLogged) &&
        <Login
          handleShowInterface={handleShowInterface}
          handleChangeUser={handleChangeUser}
        />}

      {(showInterface === 'CreateAccount' && !userLogged) && <CreateAccount handleShowInterface={handleShowInterface} />}

      {showInterface === 'Home' && <Home />}

      {showInterface === 'MyPets' && <MyPets userLogged={userLogged} handleShowInterface={handleShowInterface} />}

      {showInterface === 'Notification' && <Notification />}

      {showInterface === 'Configuration' && <Configuration />}
    </div>
  )
}
