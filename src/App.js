import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import Route from "react-router-dom/es/Route";
import { Header } from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import NewsContainer from "./components/News/NewsContainer";
import './index.css'
import {Business} from "./components/News/NewsCategories/Business/Bussines";

function App() {
    return (
        <div className="App">
            <Route path='/login' render={() => <Login />}/>
            <Route path='/content' render={() => <ContentContainer />}/>
            <Route path='/header' render={() => <Header /> }/>
            <Route path='/profile/:userId' render={() => <ProfileContainer /> }/>
            <Route path='/news' render={() => <NewsContainer /> }/>
            <Route path='/Business' render={() => <Business />}/>
        </div>
    );
}

export default App;
