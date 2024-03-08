import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  console.log("Navbar");
  return (
    <>
      <div className='Navbar-Area'>
        <div className='header'>
          <p className='Board-title'>Pila-Board</p>
          <p className='Board-title'>PilaBoard Corporation</p>
        </div>
        <div className='wrapped'>
          <nav className='navbar'>
            <h1 className='nav-Logo'>Pila-Logo</h1>
            <ul className='nav-list'>
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
              <li className='nav-item'>
                <NavLink className='Button' to='/serverBoard'>
                  Server
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='Button' to='/members'>
                  버튼2
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
