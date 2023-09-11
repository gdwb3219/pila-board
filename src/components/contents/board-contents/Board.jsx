import { Link, NavLink } from 'react-router-dom';

function Board() {
  return (
    <>
      <div>This is Board Component</div>
      <Link className="Button" to="/">
        Home
      </Link>
    </>
  );
}

export default Board;
