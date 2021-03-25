import React from 'react';
import {Box, FormControlLabel, Radio, Typography} from "@material-ui/core";
import BookMark from '../icons/bookmark1.png'
import SyntaxHighlighter from "react-syntax-highlighter";
import {CounterContext} from "../../../components/Theme/ThemeDoc";
import {atelierSulphurpoolLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import './style.css'
import {RadioTypography} from "../style/LessonsStyledDesign";

export default function TaskWrapper(props) {

    const {SideBarValue} = React.useContext(CounterContext);
    const [SideBarThemeValue] = SideBarValue;
    const PageContentSyntax = SideBarThemeValue && SideBarThemeValue.PageContentSyntax ? SideBarThemeValue.PageContentSyntax : atelierSulphurpoolLight;

    return (
        <Box display={"grid"} marginTop={1}>
            <Box marginBottom={2} display={"flex"} alignItems={"center"}>
                <Box marginRight={1.9}>
                    <img src={BookMark} width={"18"} alt="BookMark"/>
                </Box>
                <Box>
                    <Typography variant="h5">
                        {props.QuestionTitle}
                    </Typography>
                </Box>
            </Box>

            {
                props.taskCode !== undefined ?
                    <SyntaxHighlighter
                        language="javascript"
                        customStyle={{paddingLeft: 0}}
                        style={PageContentSyntax}
                        wrapLines={true}
                        showLineNumbers={true}
                        codeTagProps={{style: {fontFamily: "inherit"}}}
                    >
                        {props.taskCode}
                    </SyntaxHighlighter> : null
            }

            {

                props.task.map((i, index) => {
                        return (
                            <FormControlLabel key={index} value={i.value} control={<Radio className={"RadioButton"} size="small"/>}
                                              label={<RadioTypography>{i.question}</RadioTypography>}/>
                        );
                    }
                )
            }
        </Box>
    );
}