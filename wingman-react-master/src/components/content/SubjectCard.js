import React, { Component } from 'react';
import photo from "../../assets/img/logo-google.svg";
// import Dropdown from 'react-bootstrap/Dropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class SubjectCard extends Component {
    render() {
        return(
            <tr className="bg-white">
            <th scope="row">
                <Button variant="outline-success" className="media align-items-center" href="/subjectcomment/">
                    <img alt="img" src={photo} className="avatar rounded avatar-sm" />
                    <div className="media-body">
                        <span className="h6 mb-0">Information Security</span>
                    </div>
                </Button>
            </th>
            <td>
                <span className="badge badge-success">Active</span>
            </td>
            {/* <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item hred="#/action-1">Teachers</Dropdown.Item>
                                <Dropdown.Item hred="#/action-2">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
            </td> */}
        </tr>
        );
    }
}
export default SubjectCard;