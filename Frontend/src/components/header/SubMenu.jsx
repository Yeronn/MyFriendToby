import './submenu.css'
import { NotificationIcon, SettingsIcon, LogoutIcon, PawIcon, HomeIcon } from '../Icons'
export default function SubMenu ({ handleShowInterface, handleShowMenu, handleLogOut }) {
  const handleInterface = (nameInterface) => {
    handleShowInterface(nameInterface)
    handleShowMenu()
  }
  return (
    <div className='submenu'>
      <div className='submenu--option' onClick={() => { handleInterface('Home') }}>
        <HomeIcon />
        <span>Inicio</span>
      </div>
      <div className='submenu--option' onClick={() => { handleInterface('MyPets') }}>
        <PawIcon />
        <span>Mis mascotas</span>
      </div>
      <div className='submenu--option' onClick={() => { handleInterface('Notification') }}>
        <NotificationIcon />
        <span>Notificaciones</span>
      </div>
      <div className='submenu--option' onClick={() => { handleInterface('Configuration') }}>
        <SettingsIcon />
        <span>Configuración</span>
      </div>
      <div className='submenu--option' onClick={handleLogOut}>
        <LogoutIcon />
        <span>Cerrar sesión</span>
      </div>
    </div>
  )
}
