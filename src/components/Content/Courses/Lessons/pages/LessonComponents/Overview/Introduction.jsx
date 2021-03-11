import React from 'react';
import {LessonTitle, LessonTypography} from "../style/MyDesign";

export default function Introduction() {
    return (
        <>
            <div>
                <LessonTitle>Welcome to JavaScript</LessonTitle>
            </div>

            <div>
                <LessonTypography>
                    Do we even need to introduce JavaScript? It’s one of the most popular programming languages on the
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
        </>
    );
}