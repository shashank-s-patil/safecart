import './menu.css'

import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react";
import { store } from "../../../services/redux-storage.service";
import { setDataInCookie } from "../../../services/storage.service";
import axios from "axios";
import { UserContext } from '../../../services/usercontext.service';


export const Menu = () => {

    const [wishCount, setWishCount] = useState({});
    const [cartCount, setCartCount] = useState({});
    const [search, setSearch] = useState("");
    

    const navigate = useNavigate();

    const user = useContext(UserContext);

    function userLogout(){
       document.cookie='user=;'

       //redux
    //    setDataInCookie(null);
    //    let action = {type: "userdata", data: null}
    //    store.dispatch(action);

    //    document.getElementById('logout').style.display = 'none';

        navigate("/login");
        window.location.reload();
    }


    function sellerLogout(){
        document.cookie='user=;'
 
         navigate("/seller-login");
         window.location.reload();
    }
 



    const [product, setProduct] = useState([]); 


    function removeDisplay(){
        document.getElementById("search_suggestion_wrap").classList.remove("d-none");
    }


    useEffect(() => { 
        getProducts();  
    }, []);

    async function getProducts(){
            let response = await axios.get("http://localhost:5000/productDetails");
            setProduct(response.data);
    }













    useEffect(() => {   
        if(user.UserId){
            getMyWishlistCount();  
        }
        else{
            setWishCount({WishlistCount:"0"});
        }
          
    }, [user.UserId]);

    async function getMyWishlistCount(){
        const userid= user.UserId;

        if(userid){
            let response = await axios.get("http://localhost:5000/myWishlistCount/" + userid);
            setWishCount(response.data[0]); 
        }
        else{
            console.log("user does not exist");
        }
                   
    }


    useEffect(() => {  
        if(user.UserId){ 
            getMyCartCount();  
        }
        else{
            setCartCount({CartCount:"0"});
        }  
    }, [user.UserId]);


    async function getMyCartCount(){

        const userid= user.UserId;

        if(userid){
            let response = await axios.get("http://localhost:5000/myCartCount/" + userid);
            setCartCount(response.data[0]); 
        }
        else{
            console.log("user does not exist");
        }  
    }





    return (

        <div className='container-fluid'> 
            
            <div className="menu">
                <div className="col-lg-12 col-md-12 col-12">
                
                    <div className="row menu-panel1">
                        <div className="menu-panel1-left">
                            <i class="fab fa-twitter"></i>
                            <i class="fa-brands fa-facebook-f"></i>
                            <i class="fab fa-accessible-icon"></i>                        
                            <i class="fa-brands fa-instagram"></i>
                        </div>

                        <div className="menu-panel1-right">

                            {user.SellerId>0 ? (
                                <div>
                                    <span className="seller-username"><i class="bi bi-person" style={{color: "#006045"}}></i> {user.SellerName}</span>
                                    <a href="/sell-product">Sell</a>
                                    <a className='ms-3' href="/seller-products">My Products</a>
                                    <a className='ms-3' src="#" id="logout" value="Logout" onClick={() => {
                                        sellerLogout();
                                    }}>Logout</a>
                                </div>
                            ):(
                                <div>
                                    <button className='btn btn-warning' onClick={() => {
                                        navigate('/seller-signup');
                                    }}>Become a seller</button>

                                    <a className='ms-3' href="/seller-login">Seller login</a>
                                </div>
                            )}
                            
                        </div>
                    </div>

                    <div className="menu-panel2">

                            <div className="menu-panel2-logo">
                                <img src={require('../../../assets/images/safecart_logo.webp')} onClick={() => {
                                    navigate('/');
                                }}/>
                            </div>
                        

                        <div className="menu-panel2-search">
                            <input type='text' placeholder="Search For Products"  onChange={(e) => {
                                setSearch(e.target.value);
                                removeDisplay();
                            }}></input>

                            <div className='search-icon'>
                                <i class="fa-solid fa-magnifying-glass"></i>  



                                <div className='search-suggestion d-none' id='search_suggestion_wrap'>
                                    <div className="search-inner">
                                        <div className="category-suggestion item-suggestions">
                                            <h6 className='item-title fw-bold p-1' style={{background:"#f0f0f0"}}>Category Suggestions</h6>
                                            <ul id='search_result_categories' className='category-suggestion-list mt-3'>
                                                <li className='list'>
                                                    <a href='#' className='item'>Electronics</a>
                                                </li>
                                                <li className='list'>
                                                    <a href="#" className='item'>Fashion</a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="product-suggestion item-suggestions">
                                            <h6 className='item-title fw-bold p-1' style={{background:"#f0f0f0"}}>Product Suggestions</h6>
                                            <ul id='search_result_products' className='product-suggestion-list mt-3'>
                                                <li className='list' style={{display:"flex", flexDirection:"column", gap:"20px"}}>
                                                {  product.filter((product)=> product.ProductName.toLowerCase().includes(search)).map((product) => {
                                                        return(
                                                            <div className="product-suggestion-item">
                                                                
                                                                <div className="product-image">
                                                                    <a href={`/view-product/${product.ProductId}`}>
                                                                        <img src={product.ProductImage} />
                                                                    </a>
                                                                </div>
                                                                

                                                                <div className="product-info">
                                                                    <div className="product-info-top">
                                                                        <a href={`/view-product/${product.ProductId}`} className="product-name">{product.ProductName}</a>
                                                                    </div>

                                                                    <div className="product-price mt-2">
                                                                        <div className="price-update">
                                                                            <span className='offer-price'>Rs. {product.OfferPrice}</span>
                                                                            <span className='old-price'>Rs. {product.MRP}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="product-in-stock">
                                                                    <button className='btn in-stock'>In Stock</button>
                                                                </div>

                                                            </div>
                                                        )
                                                    })}
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>





                            </div>
                        </div>

                        <div className="menu-panel2-tracking">
                            <a href="/track-order">
                                <i class="fas fa-map-marker-alt"></i>
                                Order Tracking
                            </a>
                        </div>
                    </div>


                    <div className="menu-panel3">
                        <div className="menu-panel3-left">

                            <div className='panel3-categories'>
                                {/* <i class="fa-solid fa-bars me-2"></i>
                                Categories */}



                                <button class="btn btn-light" style={{fontSize: "13px"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft"> <i class="fa-solid fa-bars me-2"></i> Categories</button>

                                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel" style={{zIndex:'9999'}}>
                                    <div class="offcanvas-header">
                                        <h5 className='fw-bold' id="offcanvasLeftLabel">All Category</h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">

                                        <div className='offcanvas-body-divs'><a href="#">Home & Living</a></div>
                                        <div className='offcanvas-body-divs'><a href="#">Fashion</a></div>
                                        <div className='offcanvas-body-divs'><a href="#">Electronics</a></div>
                                        <div className='offcanvas-body-divs'><a href="#">Personal Care & Beauty</a></div>
                                        <div className='offcanvas-body-divs'><a href="#">Kids & Babies</a></div>
                                        <div className='offcanvas-body-divs'><a href="#">Arts & Crafts</a></div>
                                        <div className='offcanvas-body-divs'><a href="#">Health & Wellness</a></div>

                                    </div>
                                </div>




                            </div>

                            <span className='line'>|</span>

                                    <a className='panel3-tabs' href="/about">About</a>
                                    
                                    <div className="dropdown panel3-pages">
                                        <span class="dropbtn">Pages <i class="fa-solid fa-angle-down"></i> </span>
                                        <div class="dropdown-content">
                                            <a href="/terms-&-conditions">Terms & Conditions</a>
                                            <a href="/privacy-policy">Privacy Policy</a>
                                            <a href="/faq">FAQ </a>
                                        </div>
                                    </div>

                                    <a className='panel3-tabs' href="/blog">Blog</a>
                                    <a className='panel3-tabs' href="/contact">Contact</a>

                        </div>

                        <div className="menu-panel3-right">
                            <div className="panel3-right-wishnCart">

                                <div className="panel3-wishlist">
                                    <a href="/view-wishlist"> 
                                        <i class="bi bi-heart green"></i> 
                                        <sup>{wishCount.WishlistCount}</sup> 
                                    </a> 
                                </div>

                                <div className="panel3-cart">
                                    <a href="/view-cart"> 
                                        <i class="bi bi-cart  green"></i> 
                                        <sup>{cartCount.CartCount}</sup>
                                    </a>
                                </div>

                                <div className="panel3-compare">
                                    <a href="#"> 
                                        <i class="bi bi-repeat  green"></i> 
                                    </a>
                                </div>

                            </div>
                            
                            <div className="dropdown panel3-pages">
                                {user.length == 0  ? (
                                <div>
                                    <span className="dropbtn  green"> <i class="bi bi-person" style={{color: "#006045"}}></i>User Login/Reg</span>
                                    <div class="dropdown-content">
                                        <a href="/login" id='login'>Login</a>
                                        <a href="/signup" id='signup'>Signup</a>
                                    </div>
                                </div>
                                ):(
                                <div>
                                    <span className="username"><i class="bi bi-person" style={{color: "#006045"}}></i> {user.FullName}</span>
                                    <div class="dropdown-content">
                                        {   
                                            user && user.UserId>0 && <a href="/dashboard" id='dashboard'>Dashboard</a>
                                        }

                                        {   
                                            user && user.UserId>0 && <a src="#" id="logout" value="Logout" onClick={() => {
                                                userLogout();
                                            }}>User Logout</a> 
                                        }
                                    </div>
                                </div>
                                )}           
                                
                            </div>
                            
                        </div>
                    </div>



                        

                </div>
            </div>

        </div>

    );
};