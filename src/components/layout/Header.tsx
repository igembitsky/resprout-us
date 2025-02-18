import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <nav className="px-4 py-2">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/dashboard" className="mr-4">
          Dashboard
        </Link>
      </nav>
    </header>
  );
};

export default Header;
