import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { some } from 'lodash';
import { toggleFavProduct } from 'store/reducers/user';
import { ProductType } from 'types';
import { RootState } from 'store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

type ProductContent = {
  product: ProductType;
}

const Content = ({ product }: ProductContent) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>('');
  const [itemSize, setItemSize] = useState<string>('');

  const onColorSet = (e: string) => setColor(e);
  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setItemSize(e.target.value);

  const { favProducts } = useSelector((state: RootState) => state.user);
  const isFavourite = some(favProducts, productId => productId === product.id);

  const toggleFav = () => {
    dispatch(toggleFavProduct(
      { 
        id: product.id,
      }
    ))
  }

  const addToCart = () => {
    toast.info("Adding to cart...", {
      position: toast.POSITION.TOP_RIGHT
    });
    var userid = localStorage.getItem("userid");
    var token = localStorage.getItem("token");
    var qty;
    if(qty === undefined || qty === null){
      qty = 1;
    }else{
      qty = count;
    }
    var form = new FormData();
    form.append("id", product.id);
    form.append("userid", `${userid}`);
    form.append("price", `${product.price}`);
    form.append("qty", `${count}`);
    fetch(`https://genesis360.com.ng/api/Products/AddToCart.php`, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      method: "POST",
      body: form
    })
    .then(response => response.json())
    .then((data) => {
      toast.info(data.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    })
  }

  return (
    <section className="product-content">
      <ToastContainer
          
          />
      <div className="product-content__intro">
        <h5 className="product__id">Product ID:<br></br>{product.id}</h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product.product_name}</h2>

        <div className="product__prices">
          <h4>N { product.price }</h4>
          {product.discount &&
            <span>N { product.price }</span>
          }
        </div>
      </div>

      <div className="product-content__filters">
        
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button type="button" onClick={() => setCount(count - 1)} className="quantity-button__btn">
                -
              </button>
              <span>{count}</span>
              <button type="button" onClick={() => setCount(count + 1)} className="quantity-button__btn">
                +
              </button>
            </div>
            
            <button type="submit" onClick={() => addToCart()} className="btn btn--rounded btn--yellow">Add to cart</button>
            <button type="button" onClick={toggleFav} className={`btn-heart ${isFavourite ? 'btn-heart--active' : ''}`}><i className="icon-heart"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};
  
export default Content;
    