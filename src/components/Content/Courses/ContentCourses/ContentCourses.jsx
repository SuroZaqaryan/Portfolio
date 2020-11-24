
import React from "react";
import cnStyle from "./ContentCourses.module.css"
import python from "./Icons/pyhton.png"
import cPlusPlus from "./Icons/c++.png"
import JavaScript from "./Icons/JavaScript.png"
import swift from "./Icons/swift.png"
import HTML from "./Icons/HTML.png"
import CSS from "./Icons/CSS.png"

export class ContentCourses extends React.Component {

    constructor() {
        super();
        this.state = {
            languageInfo: [
                {
                    languageName: "Python 3",
                    about: `
                    Learn Python, one of today's most in-demand programming languages on-the-go!
                    Practice writing Python code, collect points, & show off your skills now!`,
                    Learners: 30045,
                    Lessons: 87,
                    Quizzes: 271,
                    icon: python,
                },

                {
                    languageName: "JavaScript",
                    about: `
                    Learn all the basic features of JavaScript, including making your website more interactive,
                    changing website content, validating forms, and so much more.`,
                    Learners: 42123,
                    Lessons: 42,
                    Quizzes: 321,
                    icon: JavaScript,
                },

                {
                    languageName: "C++",
                    about: `
                    Our C++ tutorial covers basic concepts, data types, arrays, pointers, conditional statements,
                    loops, functions, classes, objects, inheritance, and polymorphism.`,
                    Learners: 53241,
                    Lessons: 23,
                    Quizzes: 451,
                    icon: cPlusPlus,
                },

                {
                    languageName: "Swift",
                    about: `
                    Learn all the main concepts of Swift programming and apply your newly gained knowledge
                    to create your own, fully functioning iOS app!`,
                    Learners: 63211,
                    Lessons: 54,
                    Quizzes: 623,
                    icon: swift,
                },

                {
                    languageName: "HTML",
                    about: `
                    This FREE course will teach you how to design a web page using HTML.
                    Complete a series of hands-on exercises and practice while writing real HTML code.`,
                    Learners: 18024,
                    Lessons: 32,
                    Quizzes: 962,
                    icon: HTML,
                },

                {
                    languageName: "CSS",
                    about: `

                    Our CSS course will teach you how to control the style & layout of websites.
                    Complete a series of exercises and practice while filling out actual CSS templates.`,
                    Learners: 58932,
                    Lessons: 46,
                    Quizzes: 125,
                    icon: CSS,
                },
            ]
        }
    }

    render() {

        const resultsRender = [];

        for (var i = 0; i < this.state.languageInfo.length; i += 2) {
            resultsRender.push(
                <div className={cnStyle.clearfix}>
                    {
                        this.state.languageInfo.slice(i, i + 2).map((item, index) => {
                                return (
                                    <div key={index} className={cnStyle.ContentVeryHeadlineBlock}>
                                        <div className={cnStyle.ContentHeadlineBlock}>
                                            <div className={cnStyle.ContentCoursesBlock}>
                                                <div style={{ marginRight: '25px' }} className={cnStyle.courseIconBlock}>
                                                    <img className={cnStyle.courseIcon} src={item.icon} alt="" />
                                                </div>

                                                <div>
                                                    <div className={cnStyle.courseName}>
                                                        <h3>{item.languageName}</h3>
                                                    </div>
                                                    <div>
                                                        <p style={{color: 'dimgrey'}}>
                                                            {item.about}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className={cnStyle.buttonMoreBlock}>
                                                <button>More</button>
                                            </div>
                                        </div>
                                        <div className={cnStyle.moreInformation}>
                                            <div>
                                                <p>Learners</p>
                                                <p className={cnStyle.learnQuantity}>{item.Learners}</p>
                                            </div>
                                            <div>
                                                <p>Lessons</p>
                                                <p className={cnStyle.learnQuantity}>{item.Lessons}</p>
                                            </div>
                                            <div>
                                                <p>Quizzes</p>
                                                <p className={cnStyle.learnQuantity}>{item.Quizzes}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                        )
                    }
                </div>
            );
        }

        return (
            <div>
                {resultsRender}
            </div>
        );
    }
}
