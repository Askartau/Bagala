import React, { Component } from 'react';
import photo from "../../assets/img/avatar-male-1.jpg";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

class OrderCard extends Component {
    render() {
        return(
            <tr className="bg-white">
            <th scope="row">
                <Button variant="outline-success" className="media align-items-center" href="#">
                    <img alt="img" src={photo} className="avatar rounded avatar-sm" />
                    <div className="media-body">
                        <span className="h6 mb-0">Snapchat</span>
                        <span className="text-muted">Social Media</span>
                    </div>
                </Button>
            </th>
            <td>Lucy</td>
            <td>13/12/2017</td>
            <td>
                <span className="badge badge-success">Active</span>
            </td>
            <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item hred="#/action-1">Teachers</Dropdown.Item>
                                <Dropdown.Item hred="#/action-2">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
            </td>
        </tr>
        );
    }
}
export default OrderCard;