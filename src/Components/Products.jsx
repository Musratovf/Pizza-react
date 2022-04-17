import React from 'react';
import CartLis from "../Components/CardList"

const Products = ({products, addNewCart}) => {
    return (
        <div className='products'>
            <h3 className='themeText'>пиццa</h3>
            <CartLis products={products} addNewCart={addNewCart}/>
        </div>
    );
}

export default Products;
