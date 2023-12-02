import { HamburguerIcon, SearchIcon, XIcon } from '../Icons'

export default function Navbar ({ showSubMenu, windowWidth, handleShowMenu, handleShowInterface }) {
  return (
    <ul className='nav'>
      <li className='nav-logo' onClick={() => handleShowInterface('Home')}>
        <img src='./../../../public/logo.png' alt='' />
      </li>
      <li className='nav-search'>
        <form className='nav-search-container'>
          <button className='search-btn'>
            <SearchIcon />
          </button>
          <input className='search-bar' type='text' placeholder='Estoy buscando...' />
        </form>
      </li>

      {(windowWidth < 500) &&
        <div className='nav-menu-switch' onClick={handleShowMenu}>
          {!showSubMenu && <HamburguerIcon />}
          {showSubMenu && <XIcon />}
        </div>}

      {windowWidth >= 500 &&
        <>
          <li className='nav-btn login-btn'>
            <button onClick={() => handleShowInterface('Login')}>Iniciar sesion</button>
          </li>
          <li className='nav-btn'>
            <button className='logup-btn' onClick={() => handleShowInterface('CreateAccount')}>Crear cuenta</button>
          </li>
        </>}
    </ul>
  )
}
