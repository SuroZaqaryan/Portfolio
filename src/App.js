import React from 'react';
import './App.css';
import {Login} from './components/Login/Login';
import Route from "react-router-dom/es/Route";
import {Header} from './components/Header/Header';
import ContentContainer from './components/Content/ContentContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import NewsContainer from "./components/News/NewsCategories/Bitcoin/BitcoinContainer";
import './index.css'
import BusinessContainer from "./components/News/NewsCategories/Business/BusinessContainer";
import AppleContainer from "./components/News/NewsCategories/Apple/AppleContainer";
import TechCrunchContainer from "./components/News/NewsCategories/TechCrunch/TechCrunchContainer";
import {ParallaxProvider} from "react-scroll-parallax";
import LessonsContainer from "./components/Content/Courses/Lessons/LessonsContainer";
import { NavbarMobile } from './components/Navbar/Mobile_Navbar/NavbarMobile';
import useDarkMode from "use-dark-mode";

function App() {

    const { value } = useDarkMode(false);

    return (
        <ParallaxProvider>
            <div className="App">
                <Route path='/login' render={() => <Login/>}/>
                <Route path='/content' render={() => <ContentContainer value={value}/>}/>
                <Route path='/header' render={() => <Header/>}/>
                <Route path='/profile/:userId' render={() => <ProfileContainer value={value}/>}/>
                <Route path='/Bitcoin' render={() => <NewsContainer/>}/>
                <Route path='/Business' render={() => <BusinessContainer/>}/>
                <Route path='/Apple' render={() => <AppleContainer/>}/>
                <Route path='/TechCrunch' render={() => <TechCrunchContainer/>}/>
                <Route path='/Lessons' render={() => <LessonsContainer value={value}/>}/>
                <Route path='/NavbarMobile' render={() => <NavbarMobile/>}/>
            </div>
        </ParallaxProvider>
    );
}

export default App;
