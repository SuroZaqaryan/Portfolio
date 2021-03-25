import React from 'react';
import {Steps} from 'antd';
import {StepsDescription, StepsTitle} from "../style/LessonsStyledDesign";
const { Step } = Steps;

export default function StepContainer(props) {
    return (
        <Steps progressDot direction={'vertical'}>
            {props.stepInfo.map((label, index) => (
                <Step key={index} status="finish" title={<StepsTitle>{label.title}</StepsTitle>}
                      description={<StepsDescription>{label.description}</StepsDescription>} />
            ))}
        </Steps>
    );
}
