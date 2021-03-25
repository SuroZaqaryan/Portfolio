import React, {useState} from 'react';
import 'antd/dist/antd.css';
import "../../style/style.css"
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Alert} from "@material-ui/lab";
import {
    AlertStyle, CustomBlockContainer, LessonContainers,
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

const codeLink = ` var x = 5;          // Declare x, give it the value of 5
 var y = x + 2;   // Declare y, give it the value of x + 2`;

const secondLink = `    /*
    The code below will change
    the heading with id = "myH"
    and the paragraph with id = "myP"
    in my web page:
    */
    document.getElementById("myH").innerHTML = "My First Page";
    document.getElementById("myP").innerHTML = "My first paragraph.";`;

function Questions() {
    const [QuestionTitle,] = useState('Which expression is correct')

    const [task,] = useState([
        {value: 'option_1', question: '* But! Not all JavaScript statements are "executed" *'},
        {value: 'correctly', question: '// Great stuff! You’ll soon be a variable master'},
        {value: 'option_2', question: '\\ To write a Single line comment we use double slashes. Like this \\'},
    ]);

    return <TaskWrapper QuestionTitle={QuestionTitle} task={task} value={task.value}/>
}   const Introductions = RadioButtonsHoc(Questions);

export default function Comments(props) {

    const {SideBarThemeValue, AlertStyleBG} = props;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <>
            <CustomBlockContainer>
                <LessonSideBarTitle>JavaScript Comments <span className={"LessonEmoji"}>📌</span></LessonSideBarTitle>
            </CustomBlockContainer>

            <LessonTitle>Single Line Comments</LessonTitle>

            <LessonContainers>
                <LessonTypography>
                    Single line comments start with //.
                </LessonTypography>

                <LessonTypography>
                    Any text between // and the end of the line will be ignored by JavaScript (will not be executed).
                </LessonTypography>

                <LessonTypography>
                    This example uses a single-line comment before each code line:
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
                <LessonTypography>
                    This example uses a single line comment at the end of each line to explain the code:
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

                <LessonTitle>Multi-line Comments</LessonTitle>

                <LessonTypography>
                    Multi-line comments start with /* and end with */.
                </LessonTypography>

                <LessonTypography>
                    Any text between /* and */ will be ignored by JavaScript.
                </LessonTypography>

                <LessonTypography>
                    This example uses a multi-line comment (a comment block) to explain the code:
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

                <Alert style={AlertStyleBG} severity="info"><AlertStyle>Whether it’s client-side or server-side,
                    create the program of your dreams by unlocking the fundamentals of JavaScript.</AlertStyle></Alert>
            </LessonContainers>

            <Introductions />
        </>
    );
}