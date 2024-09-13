import './view-cart.css';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../services/usercontext.service';
import { MdDeleteOutline } from 'react-icons/md';
import { addToWishlist } from '../../../services/product.service';


export const ViewCart = () => {

    const [cart, setCart] = useState([]); 
    const [deleteCartId, setDeleteCartId] = useState(0);
    

    const navigate = useNavigate();

    const user = useContext(UserContext);
    


    //Delete cart item
    async function deleteCartProduct(){

        if(deleteCartId > 0){

            let formData = new FormData();
            formData.append("CartId", deleteCartId);

            let options = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }

            let res = await axios.post("http://localhost:5000/deleteCartItem", formData, options);
            window.location.reload();

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
    

    


    useEffect(() => {   
        if(user.UserId){
            getMyCart(user.UserId);
        }   
    }, [user.UserId]);

    async function getMyCart(UserId){
            let response = await axios.get(`http://localhost:5000/myCart/${UserId}`);
            setCart(response.data);    
    }



    return(

        <div>
            <h3 className="heading">My Cart</h3>
            
            {
                cart.length === 0 ? (
                    <div className='cart-no-prod-div'>
                        <div className='no-prod'>
                            <img style={{width:"380px"}} src={require('../../../assets/images/No_product_img.webp')} />
                        </div>
                        <h5 className='text-center fw-bold mt-4'>No Products In Your Cart!</h5>
                   </div>
                ): (
                    <div className="container mb-5" id='cart-container'>
                <div className="row mt-3">
                    <div className="col-lg-12">
                        <table class="table table-bordered mt-3">
                            <thead className='table-active'>
                                <tr>
                                <th scope="col" className='text-center'>Product Name</th>
                                <th scope="col" className='text-center'>Unit Price</th>
                                <th scope="col" className='text-center'>Quantity</th>
                                <th scope="col" className='text-center'>Total Price</th>
                                <th scope="col" className='text-center'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => {
                                    const totalPrice = item.OfferPrice * item.Quantity;
                                return(
                                    <tr>
                                        <td style={{width: "300px"}}>
                                            
                                            <div className="addToCart">
                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <img src={item.ProductImage} style={{width:"100%"}}/>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <p>{item.ProductName}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <div className="action text-center">Rs. {item.OfferPrice}</div>
                                        </td>

                                        <td>
                                            <div className="action text-center">{item.Quantity}</div>
                                        </td>

                                        <td>
                                            <div className="action text-center" style={{color: "#006045"}}>Rs. {totalPrice}</div>
                                        </td>

                                        <td>
                                            <div className="action">
                                                <div className="row text-center">

                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <div className="add-wish-btn">
                                                            <button className='btn btn-primary add-wish-icon' onClick={() => {
                                                                addDataToWishlist(item.ProductId);
                                                            }}> <i class="bi bi-heart"></i> </button>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-md-12 col-12">
                                                        <div className="add-delete-btn">
                                                            <button className='btn btn-danger add-delete-icon' onClick={() => {
                                                                deleteCartProduct();
                                                                setDeleteCartId(item.CartId);
                                                            }}> <i class="bi bi-trash3"></i> </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )
                                } )}                               
                            </tbody>
                        </table>
                    </div>

                    <div>            
                        <center><button className='btn btn-checkout' onClick={() => {
                            navigate('/checkout');
                        }}>Checkout</button></center>
                    </div>

                </div>
            </div>
                )
            }

        </div>
    )



}















