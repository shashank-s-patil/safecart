import { useContext } from 'react';
import './dashboard.css';
import { UserContext } from '../../services/usercontext.service';
import { Navigate } from 'react-router-dom';


export const Dashboard = () => {

    const user = useContext(UserContext);


    function logout(){
        document.cookie='user=;'
  
        Navigate("/login");
        window.location.reload();
    }
 




    return(

        <div>
            <h3 className='heading'>User Dashboard</h3>

            <div className='container' id='Dashboard-container'>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-12 mb-5" id='div1'>
                        
                        <div class="d-flex align-items-start">

                            <div class="nav flex-column nav-pills me-5 align-items-start" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{backgroundColor:"#F2F3F5"}}>
                                
                                <h6 className='dash-username'> <i class="bi bi-person"></i> {user.FullName}</h6>
                                
                                <button class="nav-link active" id="v-pills-dash-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dash" type="button" role="tab" aria-controls="v-pills-dash" aria-selected="true">Dashboard</button>
                                <button class="nav-link" id="v-pills-editprofile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-editprofile" type="button" role="tab" aria-controls="v-pills-editprofile" aria-selected="false">Edit Profile</button>
                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Change Password</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">My Orders</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Chat List</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Refund Request</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Wallet history</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Shipping Address</button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Support Ticket</button>

                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false" onClick={() => {
                                    logout();
                                }}>Logout</button>

                            </div>
                            <div class="tab-content" id="v-pills-tabContent">

                                {/* dashboard */}
                                <div class="tab-pane fade show active" id="v-pills-dash" role="tabpanel" aria-labelledby="v-pills-dash-tab">
                                    <div id="dash-div">
                                        <div className="row" id="dash-div1">
                                            <div className="col-lg-6 col-md-12 col-12"  id="dash-div1-left">
                                                <div className="tot-orders">
                                                    <i class="bi bi-calendar4-week"></i>
                                                    <h6>Total Orders <br /> <span>5</span></h6>
                                                </div>
                                            </div>

                                            <div className="col-lg-6 col-md-12 col-12"  id="dash-div1-right">
                                                <div className="supp-tickets">
                                                    <i class="bi bi-calendar4-week"></i>
                                                    <h6>Support Tickets <br /> <span>1</span></h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row" id="dash-div2">
                                            <div className="col-lg-12 col-md-12 col-12">

                                                <table class="table table-bordered text-center mt-4">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Order</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Status</th>
                                                        <th scope="col">Amount</th>
                                                        <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    
                                                    <tbody>
                                                        <tr>
                                                        <th scope="row">#20</th>
                                                        <td>May 25, 2024</td>
                                                        <td><span className='btn-pending'>Pending</span></td>
                                                        <td>Rs.1200</td>
                                                        <td><button className='btn btn-view-details'>View Details</button></td>
                                                        </tr>

                                                        <tr>
                                                        <th scope="row">#19</th>
                                                        <td>May 24, 2024</td>
                                                        <td><span className='btn-pending'>Pending</span></td>
                                                        <td>Rs.899</td>
                                                        <td><button className='btn btn-view-details'>View Details</button></td>
                                                        </tr>

                                                        <tr>
                                                        <th scope="row">#18</th>
                                                        <td>May 24, 2024</td>
                                                        <td><span className='btn-pending'>Pending</span></td>
                                                        <td>Rs.4500</td>
                                                        <td><button className='btn btn-view-details'>View Details</button></td>
                                                        </tr>

                                                        <tr>
                                                        <th scope="row">#17</th>
                                                        <td>May 22, 2024</td>
                                                        <td><span className='btn-pending'>Pending</span></td>
                                                        <td>Rs.1599</td>
                                                        <td><button className='btn btn-view-details'>View Details</button></td>
                                                        </tr>

                                                        <tr>
                                                        <th scope="row">#16</th>
                                                        <td>May 20, 2024</td>
                                                        <td><span className='btn-pending'>Pending</span></td>
                                                        <td>Rs.499</td>
                                                        <td><button className='btn btn-view-details'>View Details</button></td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Edit Profile */}
                                <div class="tab-pane fade" id="v-pills-editprofile" role="tabpanel" aria-labelledby="v-pills-editprofile-tab">



                                </div>

                                {/* Change Password */}
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    
                                    <div className="col-lg-12 col-md-12 col-12" id='dash-change-pass'>
                                        <h5 className='fw-bold mb-4'>Change Password</h5>
                                        <form>
                                            <div class="form-group mt-3">
                                                <label>Old Password</label>
                                                <input type="password" class="form-control mt-1" name="OldPassword" style={{width: "100%"}}/>
                                            </div>

                                            <div class="form-group mt-3">
                                                <label>New Password</label>
                                                <input type="password" class="form-control mt-1" name="NewPassword" style={{width: "100%"}}/>
                                            </div>

                                            <div class="form-group mt-3">
                                                <label>Confirm Password</label> 
                                                <input type="password" class="form-control mt-1" name="ConfirmPassword" style={{width: "100%"}}/>
                                            </div>

                                            <div class="mt-4">
                                                <input type="submit" onClick={() => {
                                                    alert('Your changes have saved successfully!');
                                                }} className="btn" value="Save changes"/>
                                            </div>
                                        </form>
                                    </div>

                                </div>


                                {/* My Orders */}
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">



                                </div>

                            </div>
                        </div>





                    </div>

                </div>
            </div>

        </div>

    )
}