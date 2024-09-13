import './contact.css';


export const Contact = () => {
    return(

        <div>
            <h3 className='heading'>Contact</h3>

            <div className='container' id='contact-container'>
                <div className="row">

                <div className="col-lg-4 col-md-12 col-12" id='div1-left'>
                    {/* <h4 className='fw-bold'>Contact with us</h4> */}
                </div>


                <div className="col-lg-4 col-md-12 col-12" id='div1-right'>
                    <h4 className='fw-bold'>Get in Touch</h4>

                    <form>

                        <div class="form-group mt-3">
                            <label>Your Name</label>
                            <input type="text" class="form-control mt-1" name="name" style={{width: "150%"}}/>
                        </div>

                        <div class="form-group mt-3">
                            <label>Your Email Id</label>
                            <input type="text" class="form-control mt-1" name="EmailId" style={{width: "150%"}}/>
                        </div>

                        <div class="form-group mt-3">
                            <label>Your Subject</label>
                            <input type="text" class="form-control mt-1" name="Subject" style={{width: "150%"}}/>
                        </div>

                        <div class="form-group mt-3">
                            <label>Your Message</label>
                            <textarea type="text" class="form-control mt-1" rows={5} name="Message" style={{width: "150%"}}/>
                        </div>

                        <div class="mt-4">
                            <input type="submit" onClick={() => {
                                alert('Please wait while we are tracking your order...');
                            }} className="btn" value="Submit"/>
                        </div>

                    </form>

                    </div>

                    






                </div>
            </div>
        </div>
        

    );
};









