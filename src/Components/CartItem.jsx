import React from 'react';

const Cartitem = ({product, changeQuantity}) => {
    return (
        <div className='cartItem'>
            <img src={product.url} alt="cart item" className='cartItemImg'/>
            <div className="cartMain">
                <div>
                    <p>{product.title}</p>
                    <span>UZS:{product.price}</span>
                </div>
                <div>
                    <p>data <span>{product.quantity}</span></p>
                    <div> 
                        <button
                         className='quantityBtn' 
                         onClick={()=>changeQuantity(product, "-")}>-
                         </button>
                        <button
                         className='quantityBtn' 
                         onClick={()=>changeQuantity(product, "+")}>+
                         </button>
                    </div>
                </div>
            </div>            
        </div>
    );
}

export default Cartitem;
