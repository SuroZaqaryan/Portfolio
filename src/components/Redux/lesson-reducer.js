import React from 'react';
import {faDotCircle} from "@fortawesome/free-solid-svg-icons/faDotCircle";

const ADD_LESSON = "ADD_LESSON";
const one = "Robby";

let initialState = {
    lessonsTitle: [
        {
            titleName: "JSON",
            iconName: faDotCircle,
            description: [
                <span className="yourClass">{one}</span>,
                ` advanced diverted domestic sex repeated bringing you old.
                Possible procured her trifling laughter`
            ],
            languages: [
                'Язык HTML1',
            ]
        },
        {
            titleName: "Boolean",
            iconName: faDotCircle,
            description: `
                Folly words widow one downs few age every seven.
                If miss part by fact he park just shew.
                Discovered had get considered projection who favourable. Necessary up knowledge it tolerably.
            `,
            languages: [
                'Язык HTML2',
            ]
        },
        {
            titleName: "Math",
            iconName: faDotCircle,
            description: `
               Another journey chamber way yet females man.
               Way extensive and dejection get delivered deficient sincerity gentleman age.
               Too end instrument possession contrasted motionless. Calling offence six joy feeling.
            `,
            languages: [
                'Язык HTML3',
            ]
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

