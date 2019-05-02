import React, { Component } from 'react';
import TeacherCard from './TeacherCard';


class TeacherList extends Component {
    render() {
        return(
            <>
                <section>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <h1 className="h2 mb-2">TeacherList - Table</h1>
                                <span>Useful for displaying API connections, subscriptions etc.</span>
                            </div>
                        </div>  
                    </div>
                </section>
            <section className="flush-with-above">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div>
                                    <span className="text-muted text-small">Results 1 - 8 of 8</span>
                                </div>
                                <form className="d-flex align-items-center">
                                    <span className="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                                    <select className="custom-select">
                                        <option value="alpha">Alphabetical</option>
                                        <option value="old-new" selected>Newest</option>
                                        <option value="new-old">Oldest</option>
                                        <option value="status">Status</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">

                    <table className="table table-borderless table-hover align-items-center">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                            <TeacherCard />
                        </tbody>
                    </table>  
                </div>
           </div>
           </div>
           </section>
        </>
        );
    }
}
export default TeacherList;