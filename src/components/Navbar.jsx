import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'
import { useCart } from '../contexts/CartContext'

export default function Navbar(){
  const { theme, toggleTheme } = useTheme()
  const { totalQty } = useCart()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Amazon</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="nav" className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link disabled">Login</a>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-sm btn-outline-light position-relative" onClick={toggleTheme} title="Toggle theme">
              <i className={theme === 'dark' ? 'bi bi-moon-stars' : 'bi bi-brightness-high'}></i>
            </button>
            <NavLink to="/cart" className="btn btn-warning position-relative">
              <i className="bi bi-cart3"></i>
              <span className="ms-2">Cart</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalQty}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
