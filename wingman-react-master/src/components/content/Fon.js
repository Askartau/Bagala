import React, { Component } from 'react';
import logo from '../../assets/img/photo-man-whiteboard.jpg';

class Fon extends Component {
    render() {
        return(
            <section className="bg-dark text-white height-70">
                <img alt="Logo" src={logo} className="bg-image opacity-70" />
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-9 col-lg-5">
                            <h1 className="display-3">Ready, Set, Grow.</h1>
                            <span className="lead">A robust suite of styled components, powered by Bootstrap 4.  Take the design of your website or webapp up a notch.</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Fon;