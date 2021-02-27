import React, { useState } from 'react';
import fakeData  from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('Product added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            {/* <h1>This is Shop</h1> */}
            {/* <h3>{products.length}</h3> */}

            <div className="product-container">
                {
                    products.map(pd => <Product 
                        handleAddProduct={handleAddProduct}
                        product={pd}
                        ></Product>)
                }
                
                {/* <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul> */}
            </div>
            <div className="cart-container">
                {/* <h3>This is cart</h3>
                <h5>Order Summary: {cart.length}</h5> */}

                <Cart cart={cart}></Cart>

            </div>
            
        </div>
    );
};

export default Shop;