import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import Route from "react-router-dom/es/Route";
import { Header } from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';

function App() {
    return (
        <div className="App">
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/content' render={() => <ContentContainer/>}/>
            <Route path='/header' render={() => <Header/> }/>
        </div>
    );
}

export default App;
