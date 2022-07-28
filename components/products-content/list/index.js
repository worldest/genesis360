
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import { useState, useEffect } from 'react';

const ProductsContent = () => {
  const [datas, setData] = useState([])
  useEffect(() => {
    fetch(`https://orangli.com/server/api/Products/Products.php`, {

  })
  .then(response => response.json())
  .then((data_) => {
    console.log(data_)
    setData(data_)
  })
  }, [])
  return (
    <>      
        <section className="products-list">
          {datas.map((item)  => (
            <ProductItem 
              id={item.product.id} 
              name={item.product.product_name}
              price={item.product.price}
              color={item.product.color}
              currentPrice={item.product.price}
              key={item.product.id}
              images={item.product.image} 
            />
          ))}
        </section>
    </>
  );
};
  
export default ProductsContent