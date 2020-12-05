import React from 'react';
import JavaScriptLessonObject from "./Coding_Lessons_Objects/JavaScript_Lessons_Objects";

const ADD_LESSON = "ADD_LESSON";

let initialState = {
    lessonsTitle: JavaScriptLessonObject()
};

export const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LESSON:
            return {
                ...state, lessonsTitle: action.lessonsTitle
            };
        default:
            return state;
    }
};

export const getLessons = (lessonsTitle) => ({
    type: ADD_LESSON, lessonsTitle
});

