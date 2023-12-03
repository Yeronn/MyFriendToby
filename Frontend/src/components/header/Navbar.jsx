import { HamburguerIcon, HomeIcon, LogoutIcon, NotificationIcon, PawIcon, SearchIcon, SettingsIcon, XIcon } from '../Icons'

export default function Navbar ({ showSubMenu, windowWidth, handleShowMenu, handleShowInterface, userLogged, handleLogOut }) {
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

      {(windowWidth < 500 || (userLogged && windowWidth < 700)) &&
        <div className='nav-menu-switch' onClick={handleShowMenu}>
          {!showSubMenu && <HamburguerIcon />}
          {showSubMenu && <XIcon />}
        </div>}

      {(windowWidth >= 500 && !userLogged) &&
        <>
          <li className='nav-btn login-btn'>
            <button onClick={() => handleShowInterface('Login')}>Iniciar sesion</button>
          </li>
          <li className='nav-btn'>
            <button className='logup-btn' onClick={() => handleShowInterface('CreateAccount')}>Crear cuenta</button>
          </li>
        </>}

      {((windowWidth >= 700 && userLogged)) &&
        <>
          <li className='nav-options' onClick={() => { handleShowInterface('Home') }}>
            <HomeIcon />
          </li>
          <li className='nav-options' onClick={() => { handleShowInterface('MyPets') }}>
            <PawIcon />
          </li>
          <li className='nav-options' onClick={() => { handleShowInterface('Notification') }}>
            <NotificationIcon />
          </li>
          <li className='nav-options' onClick={() => { handleShowInterface('Configuration') }}>
            <SettingsIcon />
          </li>
          <li className='nav-options' onClick={handleLogOut}>
            <LogoutIcon />
          </li>
        </>}
    </ul>
  )
}
