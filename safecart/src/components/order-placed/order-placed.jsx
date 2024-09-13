import './order-placed.css';

export const OrderPlaced = () => {
    return(

        <div className='container' id='order-placed-container' >
            <div className="order-placed-div">
                <img src={require('../../assets/images/check-green.gif')} />
                <h2 className='fw-bold'>Thank You!</h2>
                <h4 className='fw-bold mb-4'>Order Successfully Placed</h4>

                <p>Transaction Id: #1388779955ghz</p>
                <p>Estimated Delivery Date: Sat, June 08, 2024</p>
                <p>Payment Method: Cash On Delivery</p>
            </div>
        </div>

    )
}