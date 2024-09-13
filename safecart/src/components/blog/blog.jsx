import './blog.css';


export const Blog = () => {
    return(

        <div>
            <h3 className='heading'>Blog</h3>

            <div className='container' id='blog-container'>
                <div className="row">

                    <div className='blog-Cards'>
                        <div className='card'>
                            <div className='card-body'> 
                                    <img src={require('../../assets/images/blog1.webp')}/>
                            </div>
            
                            <div className='card-footer'>
                                <p className='blog-date'>Mon Jun 2020</p>
                                <h5 className='fw-bold'>New organization are added seal there</h5>
                                <p className='text text-secondary blog-info'>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p> 

                                <button className='btn read-btn mb-2' value="read" >Read More</button>
                            </div> 
                        </div>

                        <div className='card'>
                            <div className='card-body'> 
                                    <img src={require('../../assets/images/blog2.webp')}/>
                            </div>
            
                            <div className='card-footer'>
                                <p className='blog-date'>Mon Jun 2020</p>
                                <h5 className='fw-bold'>Was drawing natural fat respect husband</h5>
                                <p className='text text-secondary blog-info'>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p> 

                                <button className='btn read-btn mb-2' value="read" >Read More</button>
                            </div> 
                        </div>

                        <div className='card'>
                            <div className='card-body'> 
                                    <img src={require('../../assets/images/blog3.webp')}/>
                            </div>
            
                            <div className='card-footer'>
                                <p className='blog-date'>Mon Jun 2020</p>
                                <h5 className='fw-bold'>In mr began music weeks after at begin</h5>
                                <p className='text text-secondary blog-info'>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p> 

                                <button className='btn read-btn mb-2' value="read" >Read More</button>
                            </div> 
                        </div>

                        <div className='card'>
                            <div className='card-body'> 
                                    <img src={require('../../assets/images/blog4.webp')}/>
                            </div>
            
                            <div className='card-footer'>
                                <p className='blog-date'>Mon Jun 2020</p>
                                <h5 className='fw-bold'>Travelling every thing her eat simply</h5>
                                <p className='text text-secondary blog-info'>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p> 

                                <button className='btn read-btn mb-2' value="read" >Read More</button>
                            </div> 
                        </div>

                        <div className='card'>
                            <div className='card-body'> 
                                    <img src={require('../../assets/images/blog5.webp')}/>
                            </div>
            
                            <div className='card-footer'>
                                <p className='blog-date'>Mon Jun 2020</p>
                                <h5 className='fw-bold'>These tried for way joy wrote witty</h5>
                                <p className='text text-secondary blog-info'>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p> 

                                <button className='btn read-btn mb-2' value="read" >Read More</button>
                            </div> 
                        </div>

                        <div className='card'>
                            <div className='card-body'> 
                                    <img src={require('../../assets/images/blog6.webp')}/>
                            </div>
            
                            <div className='card-footer'>
                                <p className='blog-date'>Mon Jun 2020</p>
                                <h5 className='fw-bold'>THEY SAY A PICTURE SPEAKS A THOUSAND WORDS, RIGHT?</h5>
                                <p className='text text-secondary blog-info'>Was drawing natural fat respect husband. An as noisy an offer drawn blush...</p> 

                                <button className='btn read-btn mb-2' value="read" >Read More</button>
                            </div> 
                        </div>


                    </div>
                </div>
            </div>
        </div>
        

    );
};









