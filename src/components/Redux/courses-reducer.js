import python from "../Content/Courses/ContentCourses/Icons/pyhton.png";
import JavaScript from "../Content/Courses/ContentCourses/Icons/JavaScript.png";
import cPlusPlus from "../Content/Courses/ContentCourses/Icons/c++.png";
import swift from "../Content/Courses/ContentCourses/Icons/swift.png";
import HTML from "../Content/Courses/ContentCourses/Icons/HTML.png";
import CSS from "../Content/Courses/ContentCourses/Icons/CSS.png";

const ADD_COURSE = "ADD_COURSE";

let initialState = {
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
};

export const contentCourseReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COURSE:
            return {
                ...state, languageInfo: action.languageInfo
            };
        default:
            return state;
    }
};

export const contentCourse = (languageInfo) => ({
    type: ADD_COURSE, languageInfo
});

