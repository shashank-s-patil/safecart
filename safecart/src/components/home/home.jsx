import { Products } from '../products/products';
import './home.css';


export const Home = () => {


    return (

        <div className='container-fluid' id='home-container'>
            
            <div className="row" id='banner1'>
                <div className="col-lg-4 col-md-12 col-12" id='banner1-cards'>
                    
                    <div className="col-lg-12 col-md-12 col-12" id='banner1-card1'>
                            <div className="col-lg-6 col-md-6 col-6 card1-left">
                                <p>NOVEMBERS <br /> GADGET MADNESS</p>
                                <h3>20% OFF</h3>
                                <button className='btn'>Get Offer</button>
                        </div>

                        <div className="card1-right-div">
                            <div className="col-lg-6 col-md-6 col-6 card1-right">
                                <img src={require('../../assets/images/banner1-card1.webp')} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12 col-12" id='banner1-card2'>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 card2-left">
                                <p>HOME APPLIANCES</p>
                                <h3>CYBER MONDAY <br /> SPECIAL</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-12 card2-right">
                                <img src={require('../../assets/images/banner1-card2.webp')} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-7 col-md-12 col-12" id='banner1-card3'>
                    <div className="col-lg-6 col-md-6 col-12 card3-left">
                        <p>WINTER 2024 OFFER</p>
                        <h2>Grab the best <br /> fashion deals in <br /> this winter</h2>
                        <button className='btn'>Get Deals</button>
                    </div>

                    <div className="col-lg-6 col-md-6 card3-right">
                        <img className='img-fluid' src={require('../../assets/images/banner1-card3-woman.webp')} />
                    </div>
                </div>
            </div>

            
            <div className="home-products">

                <h4 className="fw-bold mt-5 mb-3">Popular Products</h4>
                <Products></Products>

                <h4 className="fw-bold mb-5">Categories</h4>
                <div className="home-categories">
                    <div className='category'>
                        <img src={require('../../assets/images/Electronics_Category.webp')}/>
                        <p>Electronics</p>
                    </div>

                    <div className='category'>
                        <img src={require('../../assets/images/Fashion_Category.webp')}/>
                        <p>Fashion</p>
                    </div>

                    <div className='category'>
                        <img src={require('../../assets/images/Home&Living_Category.webp')}/>
                        <p>Home & Living</p>
                    </div>

                    <div className='category'>
                        <img src={require('../../assets/images/Garden&Outdoor_Category.webp')}/>
                        <p>Garden & Outdoor</p>
                    </div>

                    <div className='category'>
                        <img src={require('../../assets/images/Sports&Fitness_Category.webp')}/>
                        <p>Sports & Fitness</p>
                    </div>

                    <div className='category'>
                        <img src={require('../../assets/images/PersonalCare&Beauty_Category.webp')}/>
                        <p>Personal Care & Beauty</p>
                    </div>

                    <div className='category'>
                        <img src={require('../../assets/images/Kids&Babies_Category.webp')}/>
                        <p>Kids & Babies</p>
                    </div>

                </div>


                <h4 className="fw-bold mb-3">Trending Products</h4>
                <Products></Products>

                <h4 className="fw-bold mb-3">Flash Sale</h4>
                <Products></Products>

            </div>

            



        </div>

    );






};



