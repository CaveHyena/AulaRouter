import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="nav-container">
        <ul className="nav-list">
          <li>
            <Link to="/">Heart</Link>
          </li>
          <li>
            <Link to="/blogs">Sins</Link>
          </li>
          <li>
            <Link to="/contact">Name</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
