import React, { Component } from 'react';
import photo from "../../assets/img/avatar-male-1.jpg";
// import Dropdown from 'react-bootstrap/Dropdown';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class TeacherCard extends Component {
    render() {
        return(
            <tr className="bg-white">
            <th scope="row">
                <Button variant="outline-success" className="media align-items-center" href="/teachercomment/">
                    <img alt="img" src={photo} className="avatar rounded avatar-sm" />
                    <div className="media-body">
                        <span className="h6 mb-0">Daniel Cameron</span>
                        <span className="text-muted">Information Systems</span>
                    </div>
                </Button>
            </th>
            <td>daniel.cameron@wingman.co</td>
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
export default TeacherCard;