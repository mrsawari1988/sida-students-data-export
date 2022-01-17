import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

import Form from './components/Form';
import NavBar from './components/NavBarComponent';
import './App.css';
import StundetImages from './components/studentsImages';
import newDataExport from './components/newDataExport';
function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Container className='mt-5'>
                <Switch>
                    <Route path='/getstudents' component={Form} />
                    <Route path='/studentsimages' component={StundetImages} />
                    <Route path='/showstudents' component={StundetImages} />
                    <Route path='/exportstudentsdata' component={newDataExport} />
                </Switch>
            </Container>
        </React.Fragment>
    );
}

export default App;
