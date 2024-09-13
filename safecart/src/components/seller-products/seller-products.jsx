import './seller-products.css';

import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../services/usercontext.service';

export const SellerProducts = () => {

    const [product, setProduct] = useState([]); 
    const [deleteProductId, setDeleteProductId] = useState(0);

    const user = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() => { 
        if(user.SellerId){
            getSellerProducts(user.SellerId);
        }
    }, [user.SellerId]);

    async function getSellerProducts(SellerId){
            
            let response = await axios.get(`http://localhost:5000/sellerProductDetails/${SellerId}`);
            setProduct(response.data);
    }



    //Delete product
    async function deleteProduct(){

        if(deleteProductId > 0){

            let formData = new FormData();
            formData.append("ProductId", deleteProductId);

            let options = {
                headers: {
                    "content-type": "multipart/form-data"
                }
            }

            let res = await axios.post("http://localhost:5000/deleteProduct", formData, options);
            window.location.reload();

        }
    }
    



    return(

        <div>
            <h3 className='heading'>My Products</h3>

            <div className='container-fluid' id='seller-products-container'>

                <div className='main-post-products'>
                    
                    <div className="myProducts pb-5">
                    {
                        product.map(bindData)
                    }
                    </div>  
                    
                </div>

            </div>
        </div>



    )





    function bindData(item, index, arr){

        return (
            
            <div>

                <div className='sellerProductsCards'>
                    <div className='card'>

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

                            <div className="seller-prod-btns">
                                <button className='btn btn-danger prod-del-icon' onClick={() => {
                                    deleteProduct();
                                    setDeleteProductId(item.ProductId);
                                }}> <i class="bi bi-trash3"></i> </button>

                                <button className='btn prod-update-icon ms-2' onClick={() => {
                                    navigate('/update-product/'+item.ProductId);
                                }}> Update </button>
                            </div>
                                
                        </div> 
                    
                    </div>
                </div>


            </div>

        )
    }





}





