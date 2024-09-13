import './products.css';

import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addToCart, addToWishlist } from '../../services/product.service';

import { UserContext } from '../../services/usercontext.service';



export const Products = () => {

    // const QuantityRef = useRef();

    const [product, setProduct] = useState([]); 
    const [wishlistDetails, setWishlistDetails] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const user= useContext(UserContext);
    
    useEffect(() => { 
            getProducts();  
    }, []);

    async function getProducts(){
            
            let response = await axios.get("http://localhost:5000/productDetails");
            setProduct(response.data);
            setWishlistDetails(response.data.map(() => ({
                Quantity: 1
            })))
    }


    // useEffect(() => {
    //     if(document.cookie != null && document.cookie != "" && document.cookie.split("=")[1] != 'null'){
    //         try{
    //             setUser(JSON.parse(document.cookie.split("=")[1]));
    //         }
    //         catch(error){
    //         }
    //     }
        
    // }, []);

    

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
            formdata.append("Quantity",quantity );

            let res = await addToCart(formdata);
            alert("added to cart!");
        }
    }



    // add To Wishlist
    async function addDataToWishlist(ProductId){
        if(!user){
            navigate('/');
        }
        else {
            let UserId = user.UserId; 
            
            let formdata = new FormData();
            formdata.append("UserId", UserId);
            formdata.append("ProductId", ProductId);

            let res = await addToWishlist(formdata);
            alert("added to wishlist!");
        }
        
    }




    return(

        <div className='container-fluid' id='products-container'>

            <div className='main-post-products'>
                
                <div className="myProducts pb-5">
                {
                    product.map(bindData)
                }
                </div>  
                
            </div>

        </div>

    )




    function bindData(item, index, arr){

        return (
            
            <div>

                <div className='productCards'>
                    <div className='card mt-3'>

                        <div className='card-body'> 
                            <Link to={`/view-product/${item.ProductId}`}>
                                <img src={item.ProductImage}/>
                            </Link> 
                        </div>
        
                        <div className='card-footer'>

                            <a className='prod-name' href={`/view-product/${item.ProductId}`}> {item.ProductName}</a>

                            <div className='prod-prices'>
                                <p className='text-primary off-price'> <span>Rs.</span> {item.OfferPrice}</p>
                                <p className='mrp-price'> <span>Rs.</span> {item.MRP}</p>
                            </div>
                                
                            <center>
                                <button className='btn add-btn mb-2' value="cart" onClick={() => {
                                    if(quantity > 0){
                                        addDataToCart(item.ProductId); 
                                    }                                     
                                }}>Add to Cart</button>
                            </center>

                            <div className="comp-wish-btn-div">

                                <button className='comp-wish-btn' onClick={() => {

                                }}> <i class="bi bi-repeat"></i> </button>

                                <button className='btn comp-wish-btn ms-2' onClick={() => {
                                    addDataToWishlist(item.ProductId);
                                }}><i class="bi bi-heart wishlist-icon"></i></button>
                            
                            </div>
                        </div> 
                    
                    </div>
                </div>


            </div>

        )
    }







}
