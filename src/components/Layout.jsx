import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to="/livres">
          <li>Livres</li>
        </Link>

        <Link to="/inscription">
          <li>Inscription</li>
        </Link>

        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};
export default Layout;
