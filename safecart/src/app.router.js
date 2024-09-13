import { Route, Routes } from "react-router-dom";
import { Menu } from "./components/layout/menu/menu";
import { Footer } from "./components/layout/footer/footer";
import { Home } from "./components/home/home";

import { Login } from "./components/registration/login/login"
import { Signup } from "./components/registration/signup/signup"
import { ViewWishlist } from "./components/wishlist/view-wishlist/view-wishlist"
import { ViewCart } from "./components/cart/view-cart/view-cart"
import { Checkout } from "./components/checkout/checkout"
import { SellerLogin } from "./components/seller-registration/seller-login/seller-login";
import { SellerSignup } from "./components/seller-registration/seller-signup/seller-signup";
import { SellProduct } from "./components/sell-product/sell-product";

import { About } from "./components/about/about";
import { Blog } from "./components/blog/blog";
import { Contact } from "./components/contact/contact";
import { TermsAndConditions } from "./components/terms-&-conditions/terms-&-conditions";
import { PrivacyPolicy } from "./components/privacy-policy/privacy-policy";
import { Faq } from "./components/faq/faq";
import { ViewProduct } from "./components/view-product/view-product";
import { TrackOrder } from "./components/track-order/track-order";
import { Dashboard } from "./components/dashboard/dashboard";
import { OrderPlaced } from "./components/order-placed/order-placed";
import { SellerProducts } from "./components/seller-products/seller-products";
import { ShippingAddress } from "./components/shipping-address/shipping-address";


export const AppRouter = () => {

    return (

        <div>

            <Menu/>
            <Routes>

                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup' element={<Signup></Signup>}></Route>
                <Route path='/view-cart' element={<ViewCart></ViewCart>}></Route>
                <Route path='/view-wishlist' element={<ViewWishlist></ViewWishlist>}></Route>
                <Route path='/checkout' element={<Checkout></Checkout>}></Route>

                <Route path='/seller-login' element={<SellerLogin></SellerLogin>}></Route>
                <Route path='/seller-signup' element={<SellerSignup></SellerSignup>}></Route>
                <Route path='/sell-product' element={<SellProduct></SellProduct>}></Route>
                <Route path='/update-product/:ProductId' element={<SellProduct></SellProduct>}></Route>

                <Route path='/about' element={<About></About>}></Route>
                <Route path='/blog' element={<Blog></Blog>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/terms-&-conditions' element={<TermsAndConditions></TermsAndConditions>}></Route>
                <Route path='/privacy-policy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
                <Route path='/faq' element={<Faq></Faq>}></Route>
                <Route path='/track-order' element={<TrackOrder></TrackOrder>}></Route>
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path='/order-placed' element={<OrderPlaced></OrderPlaced>}></Route>
                <Route path='/shipping-address' element={<ShippingAddress></ShippingAddress>}></Route>

                <Route path="/seller-products" element={<SellerProducts></SellerProducts>}></Route>
                <Route path='/view-product/:productId' element={<ViewProduct></ViewProduct>}></Route>

            </Routes>
            <Footer/>

        </div>

    );
};


