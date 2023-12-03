import './header.css'
import { useEffect, useState } from 'react'
import UserCardOptions from './UserCardOptions'
import Navbar from './Navbar'
import SubMenu from './SubMenu'

export default function Header ({ userLogged, handleChangeUser, handleShowInterface }) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  })
  const handleShowMenu = () => {
    setShowSubMenu(!showSubMenu)
  }
  const handleLogOut = () => {
    handleShowInterface('Home')
    handleChangeUser()
    handleShowMenu()
  }
  return (
    <section className='header'>
      <div className='nav-container'>
        <Navbar
          showSubMenu={showSubMenu}
          windowWidth={windowWidth}
          handleShowMenu={handleShowMenu}
          handleShowInterface={handleShowInterface}
          userLogged={userLogged}
          handleChangeUser={handleChangeUser}
          handleLogOut={handleLogOut}
        />
        <hr />
        {/* TODO: Hacer que no se muestre el submenu cuando el usuario esta logeado */}
        {(showSubMenu && windowWidth < 500 && !userLogged) &&
          <UserCardOptions
            handleShowInterface={handleShowInterface}
            handleShowMenu={handleShowMenu}
          />}
        {(showSubMenu && windowWidth < 700 && userLogged) &&
          <SubMenu
            handleShowInterface={handleShowInterface}
            handleChangeUser={handleChangeUser}
            handleShowMenu={handleShowMenu}
            handleLogOut={handleLogOut}
          />}
      </div>
    </section>
  )
}
