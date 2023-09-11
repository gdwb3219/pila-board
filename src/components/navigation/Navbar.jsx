import { NavLink } from 'react-router-dom';

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
            <NavLink className="Button" to="/board">
              게시판
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="Button" to="/members">
              회원
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
