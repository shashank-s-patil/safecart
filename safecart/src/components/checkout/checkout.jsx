import './checkout.css';

import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../services/usercontext.service';


export const Checkout = () => {

    const [cart, setCart] = useState([]); 
    const user = useContext(UserContext);

    const{
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();



    async function saveDeliveryAddress(data){

        let formData = new FormData();
        formData.append("HouseNo", data.HouseNo);
        formData.append("StreetName", data.StreetName);
        formData.append("City", data.City);
        formData.append("State", data.State);
        formData.append("Country", data.Country);


        let options = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }

        let res = await axios.post("http://localhost:5000/saveUserAddress", formData, options);
        navigate("/checkout");
        alert("Your address has saved!");

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



    async function saveData(data){

        let formData = new FormData();
        // formData.append("ProductId", ProductId);
        // formData.append("ProductCategory", data.ProductCategory);


        let options = {
            headers: {
                "content-type": "multipart/form-data"
            }
        }

        // let res = await axios.post("http://localhost:5000/saveProduct", formData, options);
        // navigate("/");

    }




    return(

        <div>
            <h3 className="heading">Checkout</h3>

            <div className='container' id='checkout-container'>
                <div className="row">

                    <div className="col-lg-7" id='checkout-left'>
                        <div className="row">
                            <div className="col-lg-12" >

                                <Link to='/shipping-address'>
                                    <button className='btn mb-4 p-2' style={{backgroundColor:"#006040", borderRadius: "3px"}}>New Shipping Address</button>
                                </Link>

                                <h5>Billing Details</h5>

                                <form onSubmit={handleSubmit(data => {
                                    saveData(data)
                                })}>

                                    <div class="form-group mt-4">
                                        <label>Full Name</label>
                                        <input type="text" class="form-control mt-1" name="FullName" style={{width: "80%"}} {...register('FullName', {required: true})}/>

                                        {errors.FullName && errors.FullName?.type == "required" && <div className='text-danger'>Full Name is required.</div>}
                                    </div>

                                    <div class="form-group mt-3">
                                        <label>Address</label>
                                        <input type="text" class="form-control mt-1" name="Address" style={{width: "80%"}} {...register('Address', {required: true})}/>

                                        {errors.Address && errors.Address?.type == "required" && <div className='text-danger'>Address is required.</div>}
                                    </div>

                                    <div className="two-fields-div">
                                        <div class="form-group mt-3">
                                            <label>Country</label>
                                            <input type="text" class="form-control mt-1" name="Country" style={{width: "100%"}} {...register('Country', {required: true})}/>

                                            {errors.Country && errors.Country?.type == "required" && <div className='text-danger'>Country is required.</div>}
                                        </div>

                                        <div class="form-group mt-3 ms-4">
                                            <label>State</label>
                                            <input type="text" class="form-control mt-1" name="State" style={{width: "100%"}} {...register('State', {required: true})}/>

                                            {errors.State && errors.State?.type == "required" && <div className='text-danger'>State is required.</div>}
                                        </div>
                                    </div>

                                    <div className="two-fields-div">
                                        <div class="form-group mt-3">
                                            <label>City/Town</label>
                                            <input type="text" class="form-control mt-1" name="City" style={{width: "100%"}} {...register('City', {required: true})}/>

                                            {errors.City && errors.City?.type == "required" && <div className='text-danger'>City is required.</div>}
                                        </div>

                                        <div class="form-group mt-3 ms-4">
                                            <label>Zip Code</label>
                                            <input type="text" class="form-control mt-1" name="ZipCode" style={{width: "100%"}} {...register('ZipCode', {required: true})}/>

                                            {errors.ZipCode && errors.ZipCode?.type == "required" && <div className='text-danger'>ZipCode is required.</div>}
                                        </div>
                                    </div>

                                    <div className="two-fields-div">
                                        <div class="form-group mt-3">
                                            <label>Mobile Number</label>
                                            <input type="text" class="form-control mt-1" name="MobileNumber" style={{width: "100%"}} {...register('MobileNumber', {required: true})}/>

                                            {errors.MobileNumber && errors.MobileNumber?.type == "required" && <div className='text-danger'>MobileNumber is required.</div>}
                                        </div>

                                        <div class="form-group mt-3 ms-4">
                                            <label>Email Address</label>
                                            <input type="text" class="form-control mt-1" name="EmailAddress" style={{width: "100%"}} {...register('EmailAddress', {required: true})}/>

                                            {errors.EmailAddress && errors.EmailAddress?.type == "required" && <div className='text-danger'>EmailAddress is required.</div>}
                                        </div>
                                    </div>

                                    <div class="form-group mt-3">
                                        <label>Order Notes</label>
                                        <textarea type="text" class="form-control mt-1" row="4" name="OrderNotes" style={{width: "80%"}} {...register('OrderNotes', {required: true})}/>

                                        {errors.OrderNotes && errors.OrderNotes?.type == "required" && <div className='text-danger'>OrderNotes is required.</div>}
                                    </div>

                                    
                                    
                                </form>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-lg-12 col-md-12 col-12">
                                <h5>Order Details</h5>
                                <table class="table table-bordered mt-3">
                                    <thead className='table-active'>
                                        <tr>
                                        <th scope="col" className='text-center'>Product Name</th>
                                        <th scope="col" className='text-center'>Price</th>
                                        <th scope="col" className='text-center'>Quantity</th>
                                        <th scope="col" className='text-center'>Total Price</th>
                                        {/* <th scope="col" className='text-center'>Action</th> */}
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
                                            </tr>
                                        )
                                        } )}                               
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-5 col-md-12 col-12" id='checkout-right'>
                        <h3>Order Summary</h3>


                        <div>
                            <div className='form-data'>
                                
                                <div class="form-group mt-4 ApplyCoupon-div">
                                    <div className='ApplyCoupon'>
                                        <input type="text" class="form-control mt-1" name="ApplyCoupon" {...register('ApplyCoupon')}/> 
                                        <button className='btn btn-coupon' value="ApplyCoupon">Apply Coupon</button>
                                    </div>
                                </div>
                                <hr />

                                <h6 className='text-center'>Cart Total: Rs. 5000</h6>
                                <hr />

                                <div class="form-group mt-4 payment-method">
                                    <h6 className='mb-4'>Select payment method</h6>

                                    <img src={require('../../assets/images/payment.png')}/> <br /><br />

                                    <input type="radio" value="Credit or debit card" name="PaymentMethod" {...register('PaymentMethod', {required: true})}/><label className='ms-1 me-3'>Credit or debit card</label><br />                        
                                    <input type="radio" value="Net Banking" name="PaymentMethod" {...register('PaymentMethod', {required: true})}/><label className='ms-1 me-3'>Net Banking</label><br />
                                    <input type="radio" value="Other UPI Apps" name="PaymentMethod" {...register('PaymentMethod', {required: true})}/><label className='ms-1 me-3'>Other UPI Apps</label><br />
                                    <input type="radio" value="Cash on Delivery/Pay on Delivery" name="PaymentMethod" {...register('PaymentMethod', {required: true})}/><label className='ms-1 me-3'>Cash on Delivery/Pay on Delivery</label>

                                </div>
                                <hr />

                                <div class="checkbox form-group mt-3">
                                    <div>
                                        <input type="checkbox" />
                                        <label className="orderTerms ms-2 mb-2" for="orderTerms">I have read and agree to the terms & conditions</label>
                                    </div>
                                </div>

                                <div class="mt-2 mb-2">
                                    <center><input type="submit" class="btn btn-submit" value="Confirm your order" onClick={() => {
                                        navigate('/order-placed');
                                    }}/></center>
                                </div>

                                <div class="mt-2 mb-2">
                                    <center><input type="cancel" class="btn btn-cancel" value="Return to cart" onClick={() => {
                                        navigate('/view-cart');
                                    }}/></center>
                                </div>

                            </div>

                        </div>



                    </div>


                    
                </div>
            </div>
        </div>

    )
}















