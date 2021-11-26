import { Link } from "react-router-dom";
export const TopBar = () => {
  return (
    <ul className="nav nav-tabs justify-content-center ">
      <li className="navbar-brand active ">
        <Link className="nav-link text-dark active" to="/">
          Users
        </Link>
      </li>

      <li className="navbar-brand ">
        <Link to="/posts" className="nav-link text-dark ">
          Posts
        </Link>
      </li>
      <li className="navbar-brand active ">
        <Link to="/residence" className="nav-link text-dark ">
          Residence
        </Link>
      </li>
    </ul>
  );
};
