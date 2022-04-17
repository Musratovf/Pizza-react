import React from 'react';
import ShoppingCart from "./Assets/img/cart.svg"

const Card = ({item, addNewCart}) => {
    return (
        <div className='card'>
            <div className="cardHeader">
                <img className='card-image' src={item.url}
                 alt="product image" />
            </div>
            <div className="cardBody">
                <h3>{item.title}</h3>
                <p className='cardDesc'>{item.discription}</p>
                <p className='cardPrice'><span>{item.price}сум</span></p>
                <button className='add-to-card' onClick={()=> addNewCart(item)}>
                    <img src={ShoppingCart} alt="card icon" />
                    заказать
                </button>
            </div>
        </div>
    );
}

export default Card;
