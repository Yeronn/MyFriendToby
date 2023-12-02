import './header.css'
import { useEffect, useState } from 'react'
import UserCardOptions from './UserCardOptions'
import Navbar from './Navbar'

export default function Header ({ userLogged, handleShowInterface }) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(windowWidth)
  })
  const handleShowMenu = () => {
    setShowSubMenu(!showSubMenu)
  }
  return (
    <section className='header'>
      <div className='nav-container'>
        <Navbar
          showSubMenu={showSubMenu}
          windowWidth={windowWidth}
          handleShowMenu={handleShowMenu}
          handleShowInterface={handleShowInterface}
        />
        <hr />
        {/* TODO: Hacer que no se muestre el submenu cuando el usuario esta logeado */}
        {(showSubMenu && windowWidth < 500) &&
          <UserCardOptions handleShowInterface={handleShowInterface} handleShowMenu={handleShowMenu} />}
      </div>
    </section>
  )
}
