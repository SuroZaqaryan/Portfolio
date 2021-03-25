import React from "react";
import {Route, Switch} from "react-router-dom";
import '../../css/Sidebar.css'
import {CounterContext} from "../../components/Theme/ThemeDoc";
import CreatingFirstJS from "../LessonComponents/Pages/Introduction/CreatingFirstJS";
import Introduction from "../LessonComponents/Pages/Introduction/Introduction";
import Comments from "../LessonComponents/Pages/Introduction/Comment";
import Variables from "../LessonComponents/Pages/Introduction/Variables";
import Let from "../LessonComponents/Pages/Introduction/Let";
import DataTypes from "../LessonComponents/Pages/Introduction/DataTypes";
import Objects from "../LessonComponents/Pages/Objects_and_Strings/Objects";
import Events from "../LessonComponents/Pages/Objects_and_Strings/Events";
import Strings from "../LessonComponents/Pages/Objects_and_Strings/Strings";
import StringMethods from "../LessonComponents/Pages/Objects_and_Strings/StringMethods";
import Intro from "../LessonComponents/Pages/ECMAScript_6/Intro";
import Variables_and_String from "../LessonComponents/Pages/ECMAScript_6/ES6_Variables_Strings";
import LoopsFunctions from "../LessonComponents/Pages/ECMAScript_6/Loops_Functions";
import ES6_OBJECTS from "../LessonComponents/Pages/ECMAScript_6/ES6_Objects";
import ES6_REST_SPREAD from "../LessonComponents/Pages/ECMAScript_6/Rest_Spread";
import ES6_DESTRUCTURING from "../LessonComponents/Pages/ECMAScript_6/ES6_Destructuring";
import ES6_Classes from "../LessonComponents/Pages/ECMAScript_6/ES6_Classes";
import ES6_Map_Set from "../LessonComponents/Pages/ECMAScript_6/ES6_Map_Set";
import DOM from "../LessonComponents/Pages/Dom_Events/DOM";
import Selecting_Elements from "../LessonComponents/Pages/Dom_Events/Selecting_Elements";
import Changing_Elements from "../LessonComponents/Pages/Dom_Events/Changing_Elements";

function RoutesPage(props) {

    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const AlertBg = SideBarThemeValue && SideBarThemeValue.AlertBackground;

    const AlertStyleBG = {
        background: AlertBg ? AlertBg : "#e6fff4",
    }

    const {path} = props.path;

    const routes = [
        {path: `${path}/Introduction`, component: () => <Introduction SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Creating Your First Javascript`, component: () => <CreatingFirstJS SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Comments`, component: () => <Comments SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Let`, component: () => <Let SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Variables`, component: () => <Variables SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Data Types`, component: () => <DataTypes SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Objects`, component: () => <Objects SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Events`, component: () => <Events SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Strings`, component: () => <Strings SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/String Methods`, component: () => <StringMethods SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Intro to ES6`, component: () => <Intro SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/ES6 Variables and Strings`, component: () => <Variables_and_String SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Loops and Functions in ES6`, component: () => <LoopsFunctions SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/ES6 Objects`, component: () => <ES6_OBJECTS SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Rest & Spread`, component: () => <ES6_REST_SPREAD SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/ES6 Destructuring`, component: () => <ES6_DESTRUCTURING SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/ES6 Classes`, component: () => <ES6_Classes SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/ES6 Map & Set`, component: () => <ES6_Map_Set SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/DOM`, component: () => <DOM SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Selecting Elements`, component: () => <Selecting_Elements SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
        {path: `${path}/Changing Elements`, component: () => <Changing_Elements SideBarThemeValue={SideBarThemeValue} AlertStyleBG={AlertStyleBG}/>},
    ];

    return (
        <>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.component}
                    />
                ))}
            </Switch>
        </>
    );
}

export default RoutesPage;
