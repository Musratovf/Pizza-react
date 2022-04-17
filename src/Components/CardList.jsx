import React, {useState, useEffect} from 'react';
import Card from "../Components/Card"

const Cardlist = ({products, addNewCart}) => {
    const [delay, setdelay] = useState(true);

    useEffect(() => {
        setdelay(true)
        setTimeout(() => {
            setdelay(false)
        }, 5000);
    }, [products])
    
    return (
        <>
            {
                delay ? <div className='loader'>
                    <img src={"https://www.unclehugos.pizza/loader.gif"} alt="loader" 
                    className='loader'
                    />
                </div>
                :
                <>
                <div className='card-list'>
                    {
                        products.length === 0 ? <p>нет продукта!</p> :
                        products.map(item => {
                            return (
                                <Card key={item.id} item={item} addNewCart={addNewCart}/>
                            )
                        })
                    }
                </div>
                </>
            }   
        </>
    );
}

export default Cardlist;
