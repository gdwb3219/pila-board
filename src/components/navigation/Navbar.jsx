import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div>Hello Navbar!</div>
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
