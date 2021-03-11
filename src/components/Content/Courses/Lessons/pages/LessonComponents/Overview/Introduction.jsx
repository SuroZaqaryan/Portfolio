import React from 'react';
import {LessonTitle, LessonTypography} from "../style/MyDesign";
import 'antd/dist/antd.css';
import {Alert} from 'antd';
import "../style/style.css"
import Paragraph from "antd/es/typography/Paragraph";

export default function Introduction() {
    return (
        <>
            <div>
                <LessonTitle>Welcome to JavaScript</LessonTitle>
            </div>

            <div>
                <Paragraph className={"ant_text"}>
                    Do we even need to introduce <b>JavaScript</b>? It’s one of the most popular programming languages on the
                    planet!
                </Paragraph>
                <Paragraph>
                    Ever visited a website that made you think…"Hey, this website is really cool and interactive"? Well,
                    JavaScript was probably making it happen.
                </Paragraph>
                <Paragraph>
                    So it’s just useful for websites right? Wrong! Process data, mobile and desktop apps, games, the
                    world’s your oyster with JavaScript.
                </Paragraph>
            </div>

            <div>
                <Alert message="Whether it’s client-side or server-side,
                create the program of your dreams by unlocking the fundamentals of JavaScript." className={"ant_note"} type="info" showIcon/>
            </div>

            <div>
                <LessonTitle>Ready. Set. JavaScript!</LessonTitle>
            </div>

            <div>
                <Paragraph>
                    Let’s start with the basics and add some JavaScript to a webpage.
                </Paragraph>

                <Paragraph>
                    On the web, JavaScript code lives inside the HTML document, and needs to be enclosed by
                    {/*<b> &lt;script&gt;and&lt;/script&gt;</b>*/}
                </Paragraph>
            </div>
        </>
    );
}