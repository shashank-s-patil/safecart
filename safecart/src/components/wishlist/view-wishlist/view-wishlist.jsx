import './view-wishlist.css';
import { useContext, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { getDataFromCookie } from '../../../services/storage.service';
import { UserContext } from '../../../services/usercontext.service';
import { addToCart } from '../../../services/product.service';


export const ViewWishlist = () => {

    const QuantityRef = useRef();
    const [quantity, setQuantity] = useState(1);


    const [wish, setWish] = useState([]);
    const [deleteWishlistId, setDeleteWishlistId] = useState(0);


    const navigate = useNavigate();

    const user = useContext(UserContext);

    //Delete wish
    async function deleteWishlistProduct(){

        if(deleteWishlistId > 0){

            let formData = new FormData();
            formData.append("WishId", deleteWishlistId);

            let options = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }

            let res = await axios.post("http://localhost:5000/deleteWishlistItem", formData, options);
            window.location.reload();

        }
    }



    
    useEffect(() => { 
        if(user.UserId){
            getMyWishlist(user.UserId);    
        } 
    }, [user.UserId]);


    async function getMyWishlist(UserId){
           try{
                let response = await axios.get(`http://localhost:5000/myWishlist/${UserId}`);
                setWish(response.data); 
           }
            catch(err){

            }
            
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
    



    return(

        <div>
            <h3 className="heading">My Wishlist</h3>

            {
                wish.length === 0 ? (
                    <div className='wish-no-prod-div'>
                        <div className='no-prod'>
                            <img style={{width:"380px"}} src={require('../../../assets/images/No_product_img.webp')} />
                        </div>
                        <h5 className='text-center fw-bold mt-4'>No Products In Your Wishlist!</h5>
                   </div>
                ): (
                    
                    <div className="container mb-5" id='wish-container'>
                        <div className="row mt-3">
                            <div className="col-lg-12 col-md-12 col-12">
                                <table class="table table-bordered mt-3">
                                    <thead className='table-active'>
                                        <tr>
                                        <th scope="col" className='text-center'>Product Name</th>
                                        <th scope="col" className='text-center'>Price</th>
                                        <th scope="col" className='text-center'>Quantity</th>
                                        {/* <th scope="col" className='text-center'>Total Price</th> */}
                                        <th scope="col" className='text-center'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {wish.map((item) => {
                                            const totalPrice = item.OfferPrice * item.Quantity;
                                        return(
                                            <tr>
                                                <td style={{width: "300px"}}>
                                                    
                                                    <div className="addToWish">
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
                                                    <div className="action text-center wish-qty">
                                                        <div className='Quantity-btn' style={{width: "114px"}}>
                                                            <input type='button' className='btn btn-light' value="-" onClick={() => {
                                                                incDecQuantity("dec");
                                                            }}></input>
                                                            <input type='text' value={quantity} className='form-control' style={{width: "50px"}} ref={QuantityRef}></input>
                                                            <input type='button' className='btn btn-light' value="+" onClick={() => {
                                                                incDecQuantity("inc");
                                                            }}></input>
                                                        </div>
                                                    </div>
                                                </td>

                                                {/* <td>
                                                    <div className="action text-center" style={{color: "#006045"}}>Rs. {totalPrice}</div>
                                                </td> */}

                                                <td>
                                                    <div className="action">
                                                        <div className="row text-center">

                                                            <div className="col-lg-6 col-md-12 col-12">
                                                                <div className="add-cart-btn">
                                                                    <button className='btn btn-primary add-cart-icon' onClick={() => {
                                                                        if(quantity > 0){
                                                                            addDataToCart(item.ProductId); 
                                                                        }
                                                                    }}> <i class="bi bi-cart"></i> </button>
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-12 col-12">
                                                                <div className="wish-delete-btn">
                                                                    <button className='btn btn-danger wish-delete-icon' onClick={() => {
                                                                        deleteWishlistProduct();
                                                                        setDeleteWishlistId(item.WishId);
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

                        </div>
                    </div>
                )
            }
                    

        </div>
    )


}















