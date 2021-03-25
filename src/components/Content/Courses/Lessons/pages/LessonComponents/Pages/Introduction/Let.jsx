import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    CustomBlockContainer, LessonContainers, Strong,
    LessonSideBarTitle,
    LessonTitle,
    LessonTypography,
} from "../../style/LessonsStyledDesign";
import {RadioButtonsHoc} from "../../../../../../../Hocs/TasksHoc/TasksHoc";
import TaskWrapper from "../../TaskComponent/TaskBlock";

const codeString = `  // Change heading:
  document.getElementById("myH").innerHTML = "JavaScript Comments";
    
  // Change paragraph:
  document.getElementById("myP").innerHTML = "My first paragraph.";`;

const codeLink = `  // code here can NOT use carName

    function myFunction() {
      var carName = "Volvo";
      // code here CAN use carName
    }

    // code here can NOT use carName`;

const secondLink = `    var carName = "Volvo";
    // code here can use carName
    
    function myFunction() {
    // code here can also use carName
    }`;

const thirdLink = `  {
      var x = 2;
   }
    // x CAN be used here
`;

function Questions() {
    const [QuestionTitle,] = useState('Which expression is correct')

    const [task,] = useState([
        {value: 'option_1', question: '* But! Not all JavaScript statements are "executed" *'},
        {value: 'correctly', question: '// Great stuff! You’ll soon be a variable master'},
        {value: 'option_2', question: '\\ To write a Single line comment we use double slashes. Like this \\'},
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} value={task.value}/>
}

const Introductions = RadioButtonsHoc(Questions);

export default function Let(props) {

    const {SideBarThemeValue} = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript Let <span className={"LessonEmoji"}>🧠</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>ECMAScript 2015</LessonTitle>

            <LessonContainers>
                <LessonTypography>
                    ES2015 introduced two important new JavaScript keywords: let and const.
                </LessonTypography>

                <LessonTypography>
                    These two keywords provide <Strong>Block Scope</Strong> variables (and constants) in JavaScript.
                </LessonTypography>

                <LessonTypography>
                    Before ES2015, JavaScript had only two types of scope: <Strong>Global Scope</Strong> and
                    <Strong> Function Scope.</Strong>
                </LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {codeString}
                </SyntaxHighlighter>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Global Scope</LessonTitle>

                <LessonTypography>
                    Variables declared <Strong>Globally.</Strong> (outside any function) have <Strong>Global Scope.</Strong>
                </LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {secondLink}
                </SyntaxHighlighter>

                <LessonTypography>Global variables can be accessed from anywhere in a JavaScript program.</LessonTypography>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Function Scope</LessonTitle>

                <LessonTypography>
                    Variables declared <Strong>Locally</Strong> (inside a function) have <Strong>Function Scope.</Strong>
                </LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {codeLink}
                </SyntaxHighlighter>

                <LessonTypography><Strong>Local</Strong> variables can only be accessed from inside the function where they are declared.</LessonTypography>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>JavaScript Block Scope</LessonTitle>

                <LessonTypography>Variables declared with the var keyword cannot have <Strong>Block Scope.</Strong></LessonTypography>
                <LessonTypography>Variables declared inside a block {} can be accessed from outside the block.</LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={PageContentSyntax}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {thirdLink}
                </SyntaxHighlighter>

                <LessonTypography>Before ES2015 JavaScript did not have Block Scope.</LessonTypography>

                <LessonTypography>Variables declared with the let keyword can have Block Scope.</LessonTypography>

                <LessonTypography>Variables declared inside a block {} cannot be accessed from outside the block:</LessonTypography>
            </LessonContainers>

            <Introductions />
        </>
    );
}