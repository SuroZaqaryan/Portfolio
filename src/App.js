import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import {Content} from "./components/Content/Content";
import Route from "react-router-dom/es/Route";
import { Header } from './components/Header/Header';

function App() {
    return (
        <div className="App">
            <Route path='/login' render={() => <Login/>}/>
            <Route path='/content' render={() => <Content/>}/>
            <Route path='/header' render={() => <Header/> }/>
        </div>
    );
}

export default App;
