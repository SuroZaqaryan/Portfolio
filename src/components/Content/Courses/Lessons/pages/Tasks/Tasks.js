import React, {useState} from 'react';

export default function TaskIntroduction() {

    const [task, setTask] = useState([
            {answer: "Question 1"},
            {answer: "Question 2"},
            {answer: "Question 2"}
        ]
    );

    const handleChange = (index) => {
        if (index === 0) {
            alert("Yes!!")
        } else {
            alert("No!!")
        }
    }

    return (
        <>
            {
                task.map((i, index) => {
                        return <div onClick={() => handleChange(index)} key={index}>{i.answer}</div>
                    }
                )
            }
        </>
    );
}