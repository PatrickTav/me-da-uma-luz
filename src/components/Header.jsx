import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Light from '../images/ideia.png'

const Header = () => {
  return (
    <header className="font-medium text-white bg-black opacity-80">
      <div className="containerCard">
        <nav className="flex items-center justify-between w-full px-6 py-5 ">
          <Link to="/">
            <div>
              <img src={Light} alt="logo_light" className='w-8' />
            </div>
          </Link>
          <ul className="flex gap-10">
            <NavLink className='navHover' to="/consumption">
              <li>Consumo</li>
            </NavLink>
            <NavLink className='navHover'to="/equipament">
              <li>Consumo Aparelho</li>
            </NavLink>
            <NavLink className='navHover' to="/about">
              <li>Sobre</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header