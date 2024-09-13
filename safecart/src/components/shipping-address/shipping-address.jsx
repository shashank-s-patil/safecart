import './shipping-address.css';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export const ShippingAddress = () => {

    const{
        register,
        setValue,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const navigate = useNavigate();


    async function saveData(data){

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



    return(

        <div>
            <h3 className="heading">Shipping Address</h3>

            <div className='container' id='address-container'>
                <div className="row">

                    <div className="col-lg-12 col-md-12 col-12">
                        <div className="shipping-main-div">
                        <div className="shipping-add-div">
                            <div className="shipping-add">
                                <form onSubmit={handleSubmit(data => {
                                    saveData(data)
                                })}>

                                    <div class="form-group mt-4">
                                        <label>House Number</label>
                                        <input type="text" class="form-control mt-1" name="HouseNo" {...register('HouseNo', {required: true})}/>

                                        {errors.HouseNo && errors.HouseNo?.type == "required" && <div className='text-danger'>House Number is required.</div>}
                                    </div>

                                    <div class="form-group mt-3">
                                        <label>Street Name</label>
                                        <input type="text" class="form-control mt-1" name="StreetName" {...register('StreetName', {required: true})}/>

                                        {errors.StreetName && errors.StreetName?.type == "required" && <div className='text-danger'>Street Name is required.</div>}
                                    </div>

                                    <div class="form-group mt-3">
                                        <label>City</label>
                                        <input type="text" class="form-control mt-1" name="City" {...register('City', {required: true})}/>

                                        {errors.City && errors.City?.type == "required" && <div className='text-danger'>City is required.</div>}
                                    </div>

                                    <div class="form-group mt-3">
                                        <label>State</label>
                                        <input type="text" class="form-control mt-1" name="State" {...register('State', {required: true})}/>

                                        {errors.State && errors.State?.type == "required" && <div className='text-danger'>State is required.</div>}
                                    </div>

                                    <div class="form-group mt-3">
                                        <label>Country</label>
                                        <input type="text" class="form-control mt-1" name="Country" {...register('Country', {required: true})}/>

                                        {errors.Country && errors.Country?.type == "required" && <div className='text-danger'>Country is required.</div>}
                                    </div>

                                    <div class="mt-4">
                                        <input type="submit" class="btn mt-4" value="Create Shipping Address"/>
                                    </div>
                                </form>

                            </div>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>





    )
}













