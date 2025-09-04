// src/pages/Products.jsx
import { Link } from 'react-router';

function Products() {
  return (
    <section>
      <h1>Our Amazing Gizmos</h1>
      <p>Click on a product to see its details:</p>
      <ul>
        <li>
          <Link to="/products/1">Gizmo Model 100</Link>
        </li>
        <li>
          <Link to="/products/2">Gizmo Pro 2000</Link>
        </li>
        <li>
          <Link to="/products/3">Gizmo Mini-X</Link>
        </li>
        <li>
          <Link to="/products/4">Gizmo Ultra-Max</Link>
        </li>
        <li>
          <Link to="/products/5">Gizmo Eco-Lite</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;