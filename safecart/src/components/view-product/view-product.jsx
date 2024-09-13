import './view-product.css';

import React, { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../../services/usercontext.service';
import { addToCart, addToWishlist } from '../../services/product.service';

export const ViewProduct = () => {

    const [product, setProduct] = useState([]); 
    const {productId} = useParams();

    const QuantityRef = useRef();
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();
    const user= useContext(UserContext);


    useEffect(() => { 
        getProduct(productId);  
    }, []);

    async function getProduct(ProductId){           
        let response = await axios.get(`http://localhost:5000/product/${ProductId}`);
        setProduct(response.data);
    }



    // Quantity Toggle button
    function incDecQuantity(type) { 
        switch(type) { 
            case "inc": if(QuantityRef.current.value == 0){ 
                QuantityRef.current.value = 1; 
            } 
            else { 
                setQuantity(parseInt(QuantityRef.current.value)+1); 
            } 
            break; 
            
            case "dec": if(QuantityRef.current.value == 0){
                QuantityRef.current.value = 0; 
            }
            else { 
                setQuantity(parseInt( QuantityRef.current.value)-1); 
            } 
            break; 
        } 
    }



    // Add to cart button
    async function addDataToCart(ProductId){
        if(!user){
            navigate('/login');
        }
        else{
            let UserId = user.UserId; 
            
            let formdata = new FormData();
            formdata.append("UserId", UserId);
            formdata.append("ProductId", ProductId);
            formdata.append("Quantity", QuantityRef.current.value);

            let res = await addToCart(formdata);
            alert("added to cart!");
        }
    }



    // add To Wishlist
    async function addDataToWishlist(ProductId){
        if(!user){
            navigate('/');
        }
        else{
            let UserId = user.UserId; 
            
            let formdata = new FormData();
            formdata.append("UserId", UserId);
            formdata.append("ProductId", ProductId);

            let res = await addToWishlist(formdata);
            alert("added to wishlist!");
        }
    }




    return(

        <div className="container" id='view_prod_container'>
            <div className="row">
                
                {product.map((item) => {
                    return(
                        <div className="col-lg-9" id='prod_details_section'>
                            <div className="row">
                                <div className="col-lg-7" id='prod_img'>
                                    <img src={item.ProductImage} />
                                </div>
        
                                <div className="col-lg-5" id='prod_details'>
                                    <h4>{item.ProductName}</h4>
                                    <p className='prod-para' style={{color:"#198754"}}>In Stock (670)</p>
        
                                    <div className='view-prod-prices'>
                                        <h5>Rs. {item.OfferPrice}</h5>
                                        <h6>Rs. {item.MRP}</h6>
                                    </div>
        
                                    <p>No Import Fees Deposit and $25.56 Shipping to Bangladesh</p>
        
                                    <div className='view-prod-qty'>
                                        <p>Quantity:</p>
        
                                        <div className='Quantity-btn' style={{width: "114px"}}>
                                            <input type='button' className='btn btn-light' value="-" onClick={() => {
                                                incDecQuantity("dec");
                                            }}></input>
                                            <input type='text' value={quantity} className='form-control' style={{width: "50px"}} ref={QuantityRef}></input>
                                            <input type='button' className='btn btn-light' value="+" onClick={() => {
                                                incDecQuantity("inc");
                                            }}></input>
                                        </div>

                                        <p style={{color:"#198754"}}>In Stock (670)</p>
                                    </div>
        
                                    <div className="prod-cart-wish mt-2">
                                        
                                        <button className='btn prod-cart-btn' value="cart" onClick={() => {
                                            if(quantity > 0){
                                                addDataToCart(item.ProductId); 
                                            }                                     
                                        }}>Add to Cart</button>

                                        <button className='btn prod-wish-btn ms-3' onClick={() => {
                                            addDataToWishlist(item.ProductId);
                                        }}><i class="bi bi-heart wishlist-icon"></i></button>

                                    </div>
        
                                    <button className='btn prod-buy-btn mt-5' onClick={() => {
                                        if(quantity > 0){
                                            addDataToCart(item.ProductId);
                                            navigate('/checkout');
                                        }                                     
                                    }}>Buy Now</button>
        
                                    <p className='mt-4'>Guaranteed Safe Checkout</p>
        
                                </div>
                            </div>
        
                            {/* <div className="row">
                                <div className="col-lg-12" id='prod_desc'>
                                    
                                </div>
                            </div> */}
                                  
                        </div>
    
                    )
                })}

                <div className="col-lg-3" id='seller_details_section'>
                    <div className="sold-by">
                        <h5>Sold By:</h5>
                        <img style={{width:"70px"}} src={require('../../assets/images/seller_logo.webp')} />
                        <h6>{user.SellerName}</h6>
                        <p className='seller-prod-count'>7 Products</p>

                        <div className="store-n-chat">
                            <button className='btn visit-store-btn'>Visit Store</button>
                            <button className='btn chat-btn ms-2'> <i class="bi bi-chat-square-text me-1"></i> Chat</button>
                        </div>
                    </div>

                    <div className="share">
                        <h5>Share:</h5>
                        <div className="share-links">
                            <div className='link'>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            </div>

                            <div className='link'>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </div>

                            <div className='link'>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            </div>

                            <div className='link'>
                                <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                            </div>

                            <div className='link'>
                                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            </div>

                            <div className='link'>
                                <a href="#"><i class="fa-brands fa-reddit-alien"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="row">
                <div className="col-lg-12" id='related_prod_section'>

                </div>
            </div> */}


        </div>
        


    );
};















