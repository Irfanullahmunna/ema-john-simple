import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // console.log(props);

    // function add(a,b){
    //     return a+b;
    // }
    // function abc(){
    //     return add(2,3);
    // }


    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            {/* <h3>This is Product</h3> */}
            <div>
                <img src={img} alt=""/>
                {/* <img src={props.product.img} alt=""/> */}
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <br/>
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <button 
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                    >
                    <FontAwesomeIcon icon={faShoppingCart}/>Add to Cart
                </button>
                
                {/* <h4>{props.product.name}</h4> */}
            </div>
            
        </div>
    );
};

export default Product;