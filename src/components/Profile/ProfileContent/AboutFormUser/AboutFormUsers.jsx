import React from 'react';
import aboutStyle from "./css/AboutFormUser.module.css";

export class AboutFormUsers extends React.Component {
    state = {
        status: this.props.status
    };

    handleSubmit(event) {
        this.props.updateStatus(this.state.status);
        this.setState({status: ''});
        event.preventDefault();
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        });
    };

    componentDidMount() {
        this.setState({status: ''})
    }

    render() {
        return (
            <div className={aboutStyle.aboutFormContainer}>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className={aboutStyle.aboutUser}>
                        <p>About me</p>
                    </div>
                    <div>
                        <label>
                            <textarea name="user" className={aboutStyle.textarea} onChange={this.onStatusChange} value={this.state.status} placeholder={"type your text..."}/>
                        </label>
                    </div>

                    <div>
                        <input type="submit" value={"Publish"}  className={`${aboutStyle.btn_ProfileAbout} ${aboutStyle.profileAboutUserSubmit}`} />
                    </div>
                </form>
            </div>
        )
    }
}

