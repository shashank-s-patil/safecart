import './track-order.css';


export const TrackOrder = () => {
    return(

        <div>
            <h3 className='heading'>Track Order</h3>

            <div className='container' id='track-order-container'>
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-12" id='div1-left'>
                        <h4 className='fw-bold'>Order Tracking</h4>

                        <form>

                            <div class="form-group mt-3">
                                <label>Order ID</label>
                                <input type="text" class="form-control mt-1" name="OrderId" style={{width: "100%"}}/>
                            </div>

                            <div class="form-group mt-3">
                                <label>Email Id</label>
                                <input type="text" class="form-control mt-1" name="EmailId" style={{width: "100%"}}/>
                            </div>

                            <div class="mt-4">
                                <input type="submit" onClick={() => {
                                    alert('Please wait while we are tracking your order...');
                                }} className="btn" value="Track your order"/>
                            </div>

                        </form>

                    </div>

                    <div className="col-lg-4 col-md-12 col-12" id='div1-right'>
                        <img src={require('../../assets/images/treaking-image.webp')} />
                    </div>

                </div>
            </div>
        </div>

    )
}








