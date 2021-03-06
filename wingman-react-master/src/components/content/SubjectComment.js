import React, { Component } from 'react';
// import Button from 'react-bootstrap/Button';
import SubjectProfile from './SubjectProfile';
import avatar from "../../assets/img/avatar-female-2.jpg";


class SubjectComment extends Component {
    render() {
        return(
            <>
            <SubjectProfile />
            <div class="col-12 col-md-16">
            <div class="card">
                <div class="card-header bg-secondary d-flex justify-content-between">
                    <button class="btn btn-secondary" type="button" data-target="#comment-reply" data-toggle="collapse" aria-expanded="false" aria-controls="comment-reply">Post a reply</button>
                    <form class="d-flex align-items-center">
                        <span class="mr-2 text-muted text-small text-nowrap">Sort by:</span>
                        <select class="custom-select">
                            <option value="alpha">Alphabetical</option>
                            <option value="old-new" selected>Newest</option>
                            <option value="new-old">Popular</option>
                            <option value="recent">Recently Updated</option>
                        </select>
                    </form>
                </div>
                <div class="collapse" id="comment-reply">
                    <form class="card-body">
                        <div class="form-group">
                            <textarea class="form-control from-control-lg" id="comment-reply-text" name="comment-reply" rows="4" placeholder="Type your reply here"></textarea>
                        </div>
                        <div class="mb-2">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" name="notify-reply" id="check-notify"/>
                                <label class="custom-control-label text-small" for="check-notify">Notify me when someone replies</label>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <button type="submit" class="btn btn-success mr-3">Submit reply</button>
                            <a href="#comment-reply" class="text-small text-muted" data-toggle="collapse" aria-expanded="true" aria-controls="comment-reply">Cancel</a>
                        </div>
                    </form>
                </div>
                <ul class="list-group list-group-flush list-group-comments">

                    <li class="list-group-item py-4">
                        <div class="media">
                            <img alt="img" src={avatar} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Kelly Fraiser</span>
                                    <span class="text-muted">Making awesome products</span>
                                </div>
                                <p>
                                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>&nbsp;(2)</button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li class="list-group-item py-4">
                        <div class="media">
                            <img alt="img" src={avatar} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Tim Lester</span>
                                    <span class="text-muted">Interface Designer @ Squanch</span>
                                </div>
                                <p>
                                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>
                                        </button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>

                        <div class="media">
                            <img alt="img" src={avatar} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Carly Pemberton</span>
                                    <span class="text-muted">Freelance Product Engineer</span>
                                </div>
                                <p>
                                    Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>(4)</button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>

                        <div class="media">
                            <img alt="img" src={avatar} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Luke Carol</span>
                                    <span class="text-muted">Product Designer</span>
                                </div>
                                <p>
                                    Adipisci velit, sed quia non numquam eius modi tempora
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>
                                        </button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li class="list-group-item py-4">
                        <div class="media">
                            <img alt="img" src={avatar} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Pip Thompson</span>
                                    <span class="text-muted">Development at Kin</span>
                                </div>
                                <p>
                                    Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>&nbsp;(1)</button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>

                    </li>

                    <li class="list-group-item py-4">
                        <div class="media">
                            <img alt="img" src={avatar} class="avatar avatar-sm" />
                            <div class="media-body">
                                <div class="mb-2">
                                    <span class="h6 mb-0">Daniel Cameron</span>
                                    <span class="text-muted">Industrial Designer at Kin</span>
                                </div>
                                <p>
                                    Nam HTML tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est
                                </p>
                                <div class="d-flex align-items-center">
                                    <div class="mr-2">
                                        <button class="btn btn-sm btn-outline-primary">Reply</button>
                                        <button class="btn btn-sm btn-outline-primary"><i class="icon-thumbs-up"></i>&nbsp;(1)</button>
                                    </div>
                                    <small class="text-muted">1st Dec 2017 • 10:15am</small>
                                </div>
                            </div>
                        </div>

                    </li>

                </ul>
            </div>
        </div>
        </>
        );
    }
}

export default SubjectComment;