// src/components/Nav.jsx
import { NavLink } from 'react-router'; // Make sure to import Link from react-router

function Nav() {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <strong>Gizmos, Inc.</strong> {/* Or your app's name */}
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/" end> {/* NEW: Add the 'end' prop for the root route */}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;