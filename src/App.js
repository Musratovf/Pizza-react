import React, {useState, useEffect} from 'react';
import Cart from "./Components/Cart";
import Products from './Components/Products';
import Logo from "./Components/Assets/img/logo.png"
import filterList from "./Components/filterList"

const App = () => {

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(()=> {
      setProducts(filterList([], null));
      if(JSON.parse(localStorage.getItem('cart'))) {
        setCart(JSON.parse(localStorage.getItem("cart")));
      }
  })

  const addNewCart = (item) => {
    const productList = [...cart]
    if(!productList.includes(item)) {
      productList.push(item)
    }
    const index = productList.indexOf(item)
    productList[index].quantity++;
    setCart(productList)
    localStorage.setItem('cart', JSON.stringify(productList))

    alert("yangi pitsa qo'shildi", cart)
    console.log(index);
  }

  const changeQuantity = (item, e) => {
    const productList = [...cart]
    const index = productList.indexOf(item)

    if(e === "+") {
      productList[index].quantity++
    } else {
      if (productList[index].quantity > 1) {
        productList[index].quantity--;
      } else {
        productList.splice(index, 1)
      }
    }
    localStorage.setItem('cart', JSON.stringify(productList))
    setCart(productList)
  }
  
  return (
    <>
    <div className='header'>
      <img src={Logo} className='brand'/>
      <Cart products={cart} changeQuantity={changeQuantity}/>
      <Products products={products} addNewCart={addNewCart}/>
    </div>
    </>
  );
}

export default App;

