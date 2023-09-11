import { Link } from 'react-router-dom';

function Members() {
  return (
    <>
      <div>This is Membership Page!</div>
      <Link className="Button" to="/">
        Home
      </Link>
    </>
  );
}

export default Members;
