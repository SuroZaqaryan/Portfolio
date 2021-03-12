import React from 'react';
import {LessonContainers, LessonMarkDown, LessonTitle, LessonTypography} from "../style/MyDesign";
import 'antd/dist/antd.css';
import {Alert} from 'antd';
import "../style/style.css"
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
    atelierSulphurpoolLight,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Introduction() {
    const codeString = `
    <script>
           function roughScale(x, base) {
              const parsed = parseInt(x, base);
              if (isNaN(parsed)) { return 0; }
              return parsed * 100;
            }
    </script>
    `;

    return (
        <>
            <div>
                <LessonTitle>Welcome to JavaScript</LessonTitle>
            </div>

            <div>
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
            </div>

            <div>
                <Alert message="Whether it’s client-side or server-side,
                create the program of your dreams by unlocking the fundamentals of JavaScript." className={"ant_note"}
                       type="info" showIcon/>
            </div>

            <LessonContainers>
                <div>
                    <LessonTitle>Ready. Set. JavaScript!</LessonTitle>
                </div>

                <div>
                    <LessonTypography>
                        Let’s start with the basics and add some JavaScript to a webpage.
                    </LessonTypography>

                    <LessonTypography>
                        On the web, JavaScript code lives inside the HTML document, and needs to be enclosed by
                        <LessonMarkDown><ReactMarkdown source={` <script> and </script> `}/></LessonMarkDown> here is a simple example
                    </LessonTypography>
                </div>

                <div>
                    <SyntaxHighlighter
                        language="javascript"
                        customStyle={{paddingLeft:0}}
                        className={"SyntaxHighlighter"}
                        style={atelierSulphurpoolLight}
                        wrapLines={true}
                        showLineNumbers={true}
                        codeTagProps={{style: {fontFamily: "inherit"}}}
                        startingLineNumber={0}
                    >
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                <div>
                    <Alert message="Heads up! You can put the script tag anywhere in the HTML document." className={"ant_note"}
                           type="info" showIcon/>
                </div>
            </LessonContainers>

            <LessonContainers>
                <div>
                    <LessonTitle>Output</LessonTitle>
                </div>

                <div>
                    <LessonTypography>
                        Let's use JavaScript to print "Hello World" to the browser. This is what that would look like.
                    </LessonTypography>
                </div>

                <div>
                    <SyntaxHighlighter
                        language="javascript"
                        customStyle={{paddingLeft:0}}
                        className={"SyntaxHighlighter"}
                        style={atelierSulphurpoolLight}
                        wrapLines={true}
                        showLineNumbers={true}
                        codeTagProps={{style: {fontFamily: "inherit"}}}
                        startingLineNumber={0}
                    >
                        document.write("Hello World!");
                    </SyntaxHighlighter>
                </div>
            </LessonContainers>
        </>
    );
}