import { UserCircleIcon } from '../Icons'
import './userCardOptions.css'

export default function UserCardOptions ({ handleShowInterface, handleShowMenu }) {
  const handleShowLogin = () => {
    handleShowInterface('Login')
    handleShowMenu()
  }

  const handleShowCreateAccount = () => {
    handleShowInterface('CreateAccount')
    handleShowMenu()
  }
  return (
    <section className='user-card-options-menu'>
      <div className='user-card-options-menu-message'>
        <span><UserCircleIcon /></span>
        <div>
          <h4>Bienvenido</h4>
          <p>Ingresa a tu cuenta para adoptar una mascota</p>
        </div>
      </div>
      <div className='user-card-options-menu-btn'>
        <button className='btn-login' onClick={handleShowLogin}>Ingresa</button>
        <button className='btn-create-account' onClick={handleShowCreateAccount}>Crea tu cuenta</button>
      </div>
    </section>
  )
}
