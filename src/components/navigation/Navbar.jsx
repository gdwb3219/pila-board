import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div>Hello Navbar!</div>
      <div>nav</div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink className="Button" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="Button" to="/Board.jsx">
              게시판
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="Button" to="/">
              회원
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
