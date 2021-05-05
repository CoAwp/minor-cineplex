import React, {Component} from 'react';
import Header from './Header'

export default class UserInfo extends Component{

    render(){
        return(
            <div>
                <div className="container-fluid background-image ">
                    <div>
                        <Header/>
                    </div>
                    <div className="row p-5"/>
                    <div className="d-grid p-4"/>
                    <div className="row align-items-start fadeInDown">
                        <div className="col-md-4 visible-md"/>
                        <div className="col mx-auto">
                            <div class="d-block bg-light text-dark d-block-round rounded" >
                                <div class="card-body text-dark fs-5">
                                    User Profile
                                </div>
                            </div>
                            <div class="card card-body-bg">
                                <div className="col mx-auto my-4">
                                    <img src='https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg' width="200px"></img>
                                </div>
                                <div class="col-8 mx-auto">
                                    <input class="form-control form-control-sm" id="formFileSm" type="file"/>
                                </div>
                                <div className="col col-12 mx-auto">
                                    <div class="row row-sm-9 card-body text-light">
                                        <form>
                                            <label>Firstname</label>
                                            <input type="text" class="form-control form-control-sm mb-3" id="firstname" value="John"/>
                                            <label>Lastname:</label>
                                            <input type="text" class="form-control form-control-sm mb-3" id="lastname" value="Wick"/>
                                            <label>Gender:</label>
                                            <input type="text" class="form-control form-control-sm mb-3" id="firstname" value="Male"/>
                                            <label>Phone: </label>
                                            <input type="text" class="form-control form-control-sm mb-3" id="phone" value="086-123-4567"/>
                                            <label>Email: </label>
                                            <input type="email" class="form-control form-control-sm mb-3" id="email" value="john.wick@mail.com"/>
                                            <label>Address:</label>
                                            <input type="text" class="form-control form-control-sm mb-3" id="address" value="123, 22 street, Bangna, USA"/>
                                            <label>Old Password:</label>
                                            <input type="password" class="form-control form-control-sm mb-3" id="oldPass" value="1234567"/>
                                            <label>New Password:</label>
                                            <input type="password" class="form-control form-control-sm mb-3" id="newPass" value="1234567"/>
                                            <label>Confirm New Password:</label>
                                            <input type="password" class="form-control form-control-sm mb-3" id="conPass" value="1234567"/>
                                            <div className="d-grid col mx-auto">
                                                <button type="submit" class="btn btn-warning">Confirm</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="d-grid p-5"/>
                        </div>
                        <div className="col-md-4 visible-md"/>
                    </div> 
                </div>
            </div>  
        )
    }

}