import React from 'react';
import RadioGroup from '@material-ui/core/RadioGroup';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Box} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import classNames from "classnames/bind";

const StyledButton = withStyles({
    root: {
        width: 'fit-content',
        border: '1px solid #1890ff',
        color: '#1890ff',
        height: '33px',
        padding: '0px 15px',
        boxShadow: '1px 2px 5px 1px rgb(0 0 0 / 18%)',
        borderRadius: '3px',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

export function RadioButtonsHoc(Component) {
    return class RadioButtonsGroup extends React.Component {
        constructor() {
            super();
            this.state = {
                value: '',
                error: '',
                helperText: '',
                selectIndex: false,
            }
        }

        handleRadioChange = (event) => {
            this.setState({value: event.target.value})
            this.setState({helperText: ''})
            this.setState({error: null})
        };

        handleSubmit = (event) => {
            event.preventDefault();
            const value = this.state.value;

            if (value === 'correctly') {
                this.setState({helperText: 'Correctly!'})
                this.setState({error: false})
            } else if (value === 'option_1' || value === 'option_2') {
                this.setState({helperText: 'Sorry, wrong answer!'})
                this.setState({error: true})
            } else {
                this.setState({helperText: 'Please select an option.'})
                this.setState({error: true})
            }
        };

        render() {

            const error = this.state.error;
            const helperText = this.state.helperText;
            const value = this.state.value;

            return (
                    <Box error={error ? error : null}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={this.handleRadioChange.bind(this)}>
                            <Component {...this.props} />
                        </RadioGroup>
                        {
                            error === true ?
                                <Alert style={{paddingLeft: 0}} severity="error">{helperText}</Alert> : error === false
                                ?
                                <Alert style={{paddingLeft: 0}}  severity="success">{helperText}</Alert>
                                :
                                null
                        }
                        <Box borderTop={1} marginTop={2} paddingTop={2} borderColor="grey.400">
                            <StyledButton>
                                <Box onClick={this.handleSubmit.bind(this)} fontSize={12} fontWeight={500}>
                                    Confirm
                                </Box>
                            </StyledButton>
                        </Box>
                    </Box>
            );
        }
    }
}

