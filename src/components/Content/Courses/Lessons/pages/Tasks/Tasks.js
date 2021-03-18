import React, { useState } from 'react';
import { Box } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { AlertTaskStyles, useStyles } from "../LessonComponents/style/LessonsStyledDesign";
import "../LessonComponents/style/style.css"
import CheckIcon from '@material-ui/icons/Check';
import Alert from '@material-ui/lab/Alert';
import AdjustIcon from '@material-ui/icons/Adjust';

export default function TaskIntroduction() {

    const [task, setTask] = useState([
        {
            variant: "A.",
            answer: "You can override the style of the component thanks to one of these customization points."
        },
        {
            variant: "B.",
            answer: "If that's not sufficient, you can check the implementation of the component for more detail."
        },
        {
            variant: "C.",
            answer: "Any other props supplied will be provided to the root element (native element)."
        }
    ]
    );

    const handleChange = (index) => {
        if (index === 0) {
            alert("Yes!!")
        } else {
            alert("No!!")
        }
    }

    const classes = useStyles();
    const alertRootClass = AlertTaskStyles();

    return (
        <Box>
            <Box display="flex" alignItems="center" marginBottom={2.5} borderBottom={"1px solid #d1d1d1"} padding={"5px 5px 5px 0px"}>
                <Box marginRight={1}>
                    <CheckIcon size={20} classes={{ root: classes.root }} />
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Take the test on your knowledge
                    </Typography>
                </Box>
            </Box>

            {
                task.map((i, index) => {
                    return (
                        <div className={alertRootClass.alertRoot}>
                            <Alert variant="outlined" severity="info" icon={<AdjustIcon>{i.variant}</AdjustIcon>}
                                onClick={() => handleChange(index)} key={index}><Typography variant="body2">{i.answer}</Typography></Alert>
                        </div>
                    );
                }
                )
            }
        </Box>
    );
}