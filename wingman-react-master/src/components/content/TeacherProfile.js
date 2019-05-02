import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import avatar from "../../assets/img/avatar-male-3.jpg";


class TeacherProfile extends Component {
    render() {
        return(
            <section className="bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8">
                            <div className="media">
                                <img alt="img" src={avatar} className="mr-md-5 avatar avatar-xlg" />
                                <div className="media-body">
                                    <div className="mb-3">
                                        <h1 className="h2 mb-2">Lucas Cunningham</h1>
                                        <span className="text-muted"><i className="icon-location"></i> Melbourne, Australia</span>
                                    </div>
                                    <p>
                                        Bit of a go-getter me, creating lovely things that help others. You'll most often find me out back in the hammock, listening to tunes and bending pixels to my will.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeacherProfile;