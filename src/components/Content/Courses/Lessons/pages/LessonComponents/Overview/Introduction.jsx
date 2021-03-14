import React, {useState} from 'react';
import {LessonContainers, LessonMarkDown, LessonTitle, LessonTypography, LessonSideBarTitle} from "../style/MyDesign.js";
import 'antd/dist/antd.css';
import {Alert} from 'antd';
import "../style/style.css"
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Steps } from 'antd';
const { Step } = Steps;

const codeString = ` <script>
       function roughScale(x, base) {
          const parsed = parseInt(x, base);
          if (isNaN(parsed)) { return 0; }
          return parsed * 100;
        }
  </script>`;

export default function Introduction() {

    const [stepInfo,] = useState([
        {
            title: "You can use document write",
            description: "document.write() should be used only for testing. We’ll cover some",
        },
        {
            title: "Or console log for console output",
            description: "Devs mostly use the console to test their JavaScript code.",
        },
        {
            title: "There are different properties for the console",
            description: "You can use stringify dir and various other properties you will talk about in the next chapters.",
        },
    ])

    return (
        <>
            <div className="custom-block tip" style={{borderLeft: "5px solid #6dbdff"}}>
                <LessonSideBarTitle>Introduction</LessonSideBarTitle>
            </div>
            <LessonTitle>Welcome to JavaScript <span className={"LessonEmoji"}>📝</span> </LessonTitle>

            <LessonTypography>
                Do we even need to introduce <b>JavaScript</b>? It’s one of the most popular programming languages
                on the
                planet!
            </LessonTypography>

            <LessonTypography>
                Ever visited a website that made you think…"Hey, this website is really cool and interactive"? Well,
                JavaScript was probably making it happen.
            </LessonTypography>

            <LessonTypography>
                So it’s just useful for websites right? Wrong! Process data, mobile and desktop apps, games, the
                world’s your oyster with JavaScript.
            </LessonTypography>

            <Alert message="Whether it’s client-side or server-side,
                create the program of your dreams by unlocking the fundamentals of JavaScript." className={"ant_note"}
                   type="info" showIcon/>

            <LessonContainers>
                <LessonTitle>Ready. Set. JavaScript!</LessonTitle>

                <LessonTypography>
                    Let’s start with the basics and add some JavaScript to a webpage.
                </LessonTypography>

                <LessonTypography>
                    On the web, JavaScript code lives inside the HTML document, and needs to be enclosed by
                    <LessonMarkDown><ReactMarkdown source={` <script> and </script> `}/></LessonMarkDown> here is a
                    simple example
                </LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={atelierSulphurpoolLight}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                >
                    {codeString}
                </SyntaxHighlighter>

                <Alert message="Heads up! You can put the script tag anywhere in the HTML document."
                       className={"ant_note"}
                       type="info" showIcon/>
            </LessonContainers>

            <LessonContainers>
                <LessonTitle>Output</LessonTitle>

                <LessonTypography>
                    Let's use JavaScript to print "Hello World" to the browser. This is what that would look like.
                </LessonTypography>

                <SyntaxHighlighter
                    language="javascript"
                    customStyle={{paddingLeft: 0}}
                    className={"SyntaxHighlighter"}
                    style={atelierSulphurpoolLight}
                    wrapLines={true}
                    showLineNumbers={true}
                    codeTagProps={{style: {fontFamily: "inherit"}}}
                    startingLineNumber={0}
                >
                    document.write("Hello World!");
                </SyntaxHighlighter>

                <LessonTypography>
                    Notice some extra stuff there? Nothing gets past you!
                    Time to introduce the <LessonMarkDown>document.write()</LessonMarkDown> function. This is what
                </LessonTypography>

                <Steps progressDot direction="vertical" size={"small"} current={1}>
                    {
                        stepInfo.map((item, index) => {
                            return(
                                <Step color={"error"} status="finish" title={item.title} key={index}
                                      description={item.description}/>
                            );
                        })
                    }
                </Steps>
            </LessonContainers>
        </>
    );
}