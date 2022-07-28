import ProductsCarousel from './carousel';
import useSwr from 'swr';
import { useEffect, useState } from 'react';
const ProductsFeatured = () => {
  const [products, setProducts] = useState([]);
  
  const [data, seData] = useState([]);

  useEffect(() => {
    fetch(`https://orangli.com/server/api/Products/Products.php`, {

  })
  .then(response => response.json())
  .then((data_) => {
    console.log("Products")
    console.log(data_)
    seData(data_)
  })
  }, [])
  
  return (
    <section className="section section-products-featured">
      <div className="container">
        <header className="section-products-featured__header">
          <h3>Product you might like</h3>
          <a href="/products" className="btn btn--rounded btn--border">Show All</a>
        </header>

        <ProductsCarousel products={data} />
      </div>
    </section>
  )
};

export default ProductsFeatured