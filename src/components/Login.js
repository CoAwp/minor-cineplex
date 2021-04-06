import React, {Component} from 'react';
import Header from './Header'
import Footer from './Footer'

export default class Login extends Component{

    render(){
        return(
            <div>
                <div>
                    <Header/>
                </div>
                <div className="container-fluid background-image">
                    <div className="row wrapper fadeInDown align-items-center">
                        <div id="formContent">
                            <div className="fadeIn first">
                            <img src="https://i.ibb.co/XF2S98p/Rectangle-3.png" id="icon" alt="User Icon" />
                            </div>
                            <form>
                                <label for="Username" className="form-label">Username</label>
                                <br/>
                                <input type="text" id="login" className="fadeIn second" name="login" placeholder="username"/>
                                <br/>
                                <label for="Password" className="form-label">Password</label>
                                <br/>
                                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
                                <br/>
                                <br/>
                                <input type="submit" className="fadeIn fourth" value="Log In"/>
                                <br/>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
                
        )
    }
}