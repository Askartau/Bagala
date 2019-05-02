import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AboutUs from './components/content/AboutUs';
import FacultyList from './components/content/FacultyList';
import Main from './components/content/Main';
import Orders from './components/content/Orders';
import TeacherList from './components/content/TeacherList';
import SubjectList from './components/content/SubjectList';
import Login from './components/content/Login';
import Register from './components/content/Register';
import TeacherComment from './components/content/TeacherComment';
import SubjectComment from './components/content/SubjectComment';


// function About() {
//   return <h2>something else </h2>;
// }

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Main} />
          <Route exact path="/about/" component={AboutUs} />
          <Route exact path="/facultylist/" component={FacultyList} />
          <Route exact path="/orders/" component={Orders} />
          <Route exact path="/teacherlist/" component={TeacherList} />
          <Route exact path="/subjectlist/" component={SubjectList} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="/register/" component={Register} />
          <Route exact path="/teachercomment/" component={TeacherComment} />
          <Route exact path="/subjectcomment/" component={SubjectComment}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
