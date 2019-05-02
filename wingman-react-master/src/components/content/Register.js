import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import photo from "../../assets/img/photo-man-diary.jpg";
import logo from "../../assets/img/logo-white.svg";
import avatar from "../../assets/img/avatar-female-2.jpg";


class Register extends Component {
    render() {
        return(
            <div className="main-container">
                <section className="fullwidth-split">
                    <div className="container-fluid">
                        <div className="row no-gutters height-100 justify-content-center">
                            <div className="col-12 col-lg-6 fullwidth-split-image bg-dark d-flex justify-content-center align-items-center">
                                <img alt="img" src={photo} className="bg-image position-absolute opacity-30" />
                                <div className="col-12 col-sm-8 col-lg-9 text-center pt-5 pb-5">
                                    <img alt="img" src={logo} className="mb-4 logo-lg" />
                                    <span className="h3 mb-5">Build great products and join a community of happy designers</span>
    
                                    <div className="card text-left">
                                        <div className="card-body">
                                            <div className="media">
                                                <img alt="img" src={avatar} className="avatar" />
                                                <div className="media-body">
                                                    <p className="mb-1">
                                                        “Using other templates just doesn’t feel the same anymore - none have the polish and intuitive design of Wingman”
                                                    </p>
                                                    <small>Lucille Freebody, Product Designer</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col-12 col-sm-8 col-lg-6 fullwidth-split-text">
                                <div className="col-12 col-lg-8 align-self-center">
                                    <div className="text-center mb-5">
                                        <h1 className="h2 mb-2">Get started</h1>
                                        <span>Start creating beautiful products immediately</span>
                                    </div>
                                    <form className="mb-4">
                                        <div className="form-group">
                                            <label for="signup-email">Email Address</label>
                                            <input className="form-control form-control-lg" type="email" name="email" id="signup-email" placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <label for="signup-password">Choose a password</label>
                                            <input className="form-control form-control-lg" type="password" name="password" id="signup-password" placeholder="Enter a password" />
                                            <small>At least seven characters with one numeral</small>
                                        </div>
                                        <div className="text-center mt-4">
                                            <button type="submit" className="btn btn-lg btn-success">Create Account</button>
                                        </div>
                                    </form>
                                    <div className="text-center">
                                        <span className="text-small">Already have an account? <Button variant= "link" href="#">Log in here</Button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>    
        );
    }
}

export default Register;