import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact component={Dashboard} path="/" />
          <Route component={CreateProject} path="/projects/create" />
          <Route component={ProjectDetails} path="/projects/:id" />
          <Route component={SignIn} path="/signin" />
          <Route component={SignUp} path="/signup" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}



export default App;
