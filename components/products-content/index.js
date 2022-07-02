import { useState } from 'react';
import List from './list';

const ProductsContent = () => {
  const [orderProductsOpen, setOrderProductsOpen] = useState(false);
  
  return (
    <section className="products-content">
      <div className="products-content__intro">
        <button type="button" onClick={() => setOrderProductsOpen(!orderProductsOpen)} className="products-filter-btn"><i className="icon-filters"></i></button>
        
      </div>

      <List />
    </section>
  );
};
  
export default ProductsContent
  