import { useDispatch } from 'react-redux';
import { removeProduct, setCount } from 'store/reducers/cart';
import { ProductStoreType } from 'types';
import { useEffect, useState } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const ShoppingCart = ({ thumb, name, id, color, size, count, price }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    
  }, [])
  const removeFromCart = () => {
    fetch(`https://genesis360.com.ng/api/Products/deleteCart.php?id=${id}`, {

  })
  .then(response => response.json())
  .then((data_) => {
    toast.success(data_.message, {
      position: toast.POSITION.TOP_RIGHT
    });
    window.location.href = "/cart";
  })
  }

  const setProductCount = (count) => {
    if(count <= 0) {
      return;
    }

    const payload = {
      product: { 
        thumb, 
        name, 
        id, 
        color, 
        size, 
        count, 
        price
      },
      count,
    }

    dispatch(setCount(payload))
  }

  return (
    <>
      <ToastContainer
          
          />
    
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      {/* <td className="cart-item-before" data-label="Color">{color}</td>
      <td className="cart-item-before" data-label="Size">{size}</td> */}
      <td>
        <div className="quantity-button">
          {/* <button type="button" onClick={() => setProductCount(count - 1)} className="quantity-button__btn">
            -
          </button> */}
          <span>{ count }</span>
          {/* <button type="button" onClick={() => setProductCount(count + 1)} className="quantity-button__btn">
            +
          </button> */}
        </div>
      </td>
      <td>NGN {price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel" onClick={() => removeFromCart()}></i></td>
    </tr>
    </>
  )
};

  
export default ShoppingCart