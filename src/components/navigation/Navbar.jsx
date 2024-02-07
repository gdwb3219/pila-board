import { NavLink } from "react-router-dom";
import "./Navbar.css";
import KakaoLogin from "/workspaces/pila-board/src/components/contents/members/KakaoLogin.jsx"
import KakaoLogout from "/workspaces/pila-board/src/components/contents/members/KakaoLogout.jsx"

function Navbar() {
  return (
    <>
      <div className='header'>
        <h2 className='Board-title'>Pila-Board</h2>
        <h3 className='Board-title'>PilaBoard Corporation</h3>
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
              <NavLink className='Button' to='/members'>
                버튼1
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='Button' to='/members'>
                버튼2
              </NavLink>
            </li>
          </ul>
          <div className="mem-box">
          <ul className='mem-list'>
          <li className='mem-item'>
              <NavLink className='Button' to='/signup'>
                회원가입
              </NavLink>
            </li>
            <li className='mem-item'>
                <KakaoLogin/>
            </li>
            <li className='mem-item'>
                <KakaoLogout/>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
