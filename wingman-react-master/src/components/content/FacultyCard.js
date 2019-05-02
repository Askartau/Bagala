import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as facultyAction from '../../actions/facultyAction';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import photo from "../../assets/img/logo-instagram.svg";


class FacultyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
      }
    // componentDidMount() {
    //     this.props.getFaculties(); 
    // }
    render() {
        return(
            <tbody>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">FIT
                            </span>
                            <span className="text-muted">Codebusters</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Ablaykhana 2 floor</td>
                <td>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                        <Dropdown.Menu>
                            <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                            <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                        </Dropdown.Menu>
                </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">ISE
                            </span>
                            <span className="text-muted">Scromnye majory</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Panfilova 3 floor</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                                <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">BS
                            </span>
                            <span className="text-muted">Show off</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Ablaykhana 4 floor</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                                <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">KMA
                            </span>
                            <span className="text-muted">Vodolei</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Podzemel'e</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                                <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">RECMC
                            </span>
                            <span className="text-muted">Eto ne professiya</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Tam gde Zhumadil'daev</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                                <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">FEOGI
                            </span>
                            <span className="text-muted">Budushee ne za vami</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Politekh</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                                <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>
            <tr className="bg-white">
                <th scope="row">
                    <div className="media align-items-center">
                        <img alt="img" src={photo} className="avatar" />
                        <div className="media-body">
                            <span className="h6 mb-0">SCE
                            </span>
                            <span className="text-muted">Vy kto?</span>
                        </div>
                    </div>
                </th>
                <td>daniel.cameron@wingman.co</td>
                <td>Ne izvestno</td>
                <td>
                    <Dropdown as={ButtonGroup}>
                        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                            <Dropdown.Menu>
                                <Dropdown.Item href="/teacherlist/">Teachers</Dropdown.Item>
                                <Dropdown.Item href="/subjectlist/">Subjects</Dropdown.Item>
                            </Dropdown.Menu>
                    </Dropdown>
                </td>
            </tr>
            <tr className="table-divider"></tr>                                 
        </tbody>
        );
    }
}

export default FacultyCard;
// const mapStateToProps = (state) => ({
//     faculties: state.faculty.faculties
//   })

// const mapDispatchToProps = {
//     getFaculties: facultyAction.getFaculties
//   }
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(FacultyCard);
