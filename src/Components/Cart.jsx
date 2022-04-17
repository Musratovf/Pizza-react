import React, {useState, useEffect} from 'react';
import CartItem from "../Components/CartItem"

const Cart = ({products, changeQuantity}) => {
    const [classActive, toggleClass] = useState(false)
    const [sum, setSum] = useState(0)

    const toggleBtn = () => {
        toggleClass(!classActive)
    }

    useEffect(() => {
        let total = 0;
        for (let i = 0; i < products.length; i++) {
            total+= products[i].price*products[i].quantity            
        }
        setSum(total)
    }, [products])

    const checkOut = () => {
        alert(`Subtotal: $ ${sum.toFixed(2)}`)
    }
    
    return (
        <div>
            <button className='toggle-btn' onClick={toggleBtn}>
                Cart
            </button>
            <div className={classActive ? "active" : "bnnma"}>
                <div className='shopping-cart'>
                    <div className='cartContent'>
                        <div className="cartList">
                            {
                                products.length === 0 ?
                                <div className='emptyCart'>
                                    <img src="https://ettrico.com/public_assets/images/empty-cart.gif" alt="pustoy cart" />
                                </div> : 
                                products.map(product => {
                                    return (
                                        <>
                                         <CartItem
                                         key={product.id}
                                         product={product}
                                         changeQuantity={changeQuantity}
                                         />
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="total">
                            <div className="info">
                                <p className='totalText'>total</p>
                                <p className='totalPrice'>UZS: {sum.toFixed(2)}</p>
                            </div>
                            <button onClick={checkOut} className='purchaseBtn'>Purchase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
