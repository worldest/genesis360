
import ProductItem from '../../product-item';
import ProductsLoading from './loading';
import { ProductTypeList } from 'types';
import { useState, useEffect } from 'react';

const ProductsContent = () => {
  const [datas, setData] = useState([])
  useEffect(() => {
    fetch(`https://genesis360.com.ng/api/Products/Products.php`, {

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
              id={item.id} 
              name={item.product_name}
              price={item.price}
              color={item.color}
              currentPrice={item.price}
              key={item.id}
              images={item.image} 
            />
          ))}
        </section>
    </>
  );
};
  
export default ProductsContent