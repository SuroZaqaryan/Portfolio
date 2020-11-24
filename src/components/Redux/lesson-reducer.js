import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";
const ADD_LESSON = "ADD_LESSON";

let initialState = {
    lessonsTitle: [
        {
            titleName: "Statements",
            iconName: faDotCircle,
            description: "Text 1",
        },
        {
            titleName: "Statements",
            iconName: faDotCircle,
            description: "Text 2",
        },
        {
            titleName: "Statements",
            iconName: faDotCircle,
            description: "Text 3",
        },
    ]
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

