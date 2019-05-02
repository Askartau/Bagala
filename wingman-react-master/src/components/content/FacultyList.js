import React, { Component } from 'react';
import FacultyCard from './FacultyCard';

class FacultyList extends Component {
    render() {
        return(
            <>
                <section className="flush-with-above">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table table-hover align-items-center table-borderless">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Location</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                               <FacultyCard/>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            </>
        );
    }
}
export default FacultyList;
