import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <h1 className='Board-title'>Pila-Board</h1>
      <nav className='navbar'>
        <ul className='nav-list'>
          nav-list
          <li className='nav-item'>
            <NavLink className='Button' to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink className='Button' to='/members'>
              회원
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
