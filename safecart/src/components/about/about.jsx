import './about.css';


export const About = () => {
    return(

        <div>
            <h3 className='heading'>About</h3>

            <div className='container' id='about-container'>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12" id='div1-left'>
                        <h3 className='fw-bold'>This is how we do. Learn something about us and our services</h3>
                        <p className='about-para mt-4'>There’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.
                            <br /><br />Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.</p>
                    </div>

                    <div className="col-lg-6 col-md-12 col-12" id='div1-right'>
                        <img src={require('../../assets/images/about_img1.png')} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12" id='div2-left'>
                        <img src={require('../../assets/images/about_img2.png')} />
                    </div>

                    <div className="col-lg-6 col-md-12 col-12" id='div2-right'>
                        <h3 className='fw-bold'>We Provide Express & secure home delivery</h3>
                        <p className='about-para mt-4'>here’s a voice that keeps on calling me. Down the road, that’s where I’ll always be. Every stop I make, I make a new friend. Can’t stay for long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to settle down, Until tomorrow, I’ll just keep moving on.
                            <br /><br />Top Cat! The most effectual Top Cat! Who’s intellectual close friends get to call him T.C., providing it’s with dignity.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-12" id='div3-left'>
                        <h3 className='fw-bold'>Our Advantages</h3>
                        <img className='mt-4' style={{width:"450px"}} src={require('../../assets/images/about-advt.png')} />
                    </div>

                    <div className="col-lg-6 col-md-12 col-12" id='div3-right'>
                        <img src={require('../../assets/images/about_img3.png')} />
                    </div>
                </div>



            </div>
        </div>
        

    );
};









