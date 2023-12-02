import './createAccount.css'
import { PawIcon, UserCircleIcon } from '../../Icons'

export default function CreateAccount ({ handleShowInterface }) {
  const handleShowHome = () => {
    handleShowInterface('Home')
  }
  const handleShowLogin = () => {
    handleShowInterface('Login')
  }
  return (
    <section className='create-account'>
      <div className='logo-container' onClick={handleShowHome}>
        <img src='./../../../../public/logo.png' alt='Logotipo de la pagina web' />
      </div>
      <div className='account-type-container'>
        <h3>¿Qué tipo de cuenta quieres crear?</h3>
        <ul className='account-types'>
          <li className='account-type-card user-type'>
            <span className='account-type-card--icon-container'><UserCircleIcon /></span>
            <span>Usuario</span>
          </li>
          <li className='account-type-card vet-type'>
            <span><PawIcon /></span>
            <span>Veterinaria</span>
          </li>
        </ul>
      </div>
      <div className='create-account--login'>
        <p>¿Ya tienes una cuenta?</p>
        <span onClick={handleShowLogin}>¡Inicia sesión!</span>
      </div>
    </section>
  )
}
