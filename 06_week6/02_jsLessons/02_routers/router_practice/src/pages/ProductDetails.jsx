// src/pages/ProductDetails.jsx
import { useParams } from 'react-router';

function ProductDetails() {
  const { productId } = useParams(); 

  return (
    <section>
      <h1>Product Details</h1>
      <p>This is the page for Product ID: <strong>{productId}</strong>.</p>
    </section>
  );
}

export default ProductDetails;