import React from 'react';
import less from "./css/lesson.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import bg from "./Img/background.png";

export class Lessons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexDescription: 1,
        }
    }

    render() {

        const listLessons = this.props.lesson.map((item, index) => {
            return (
                <ul key={index}>
                    <li className={less.sidebar_list} onClick={() => {
                        this.setState({indexDescription: index})
                    }}>
                        <div>
                            <FontAwesomeIcon className={less.item_icon} icon={item.iconName}/>
                        </div>

                        <div>
                            <p>{item.titleName}</p>
                        </div>
                    </li>
                </ul>
            );
        });


        return (
            <>
                <div className={less.wrapper}>

                    <div className={less.sidebar}>
                        {/*<div className={less.avatar_block}>*/}
                        {/*    <div className={less.logo_container}>*/}
                        {/*        <img src={logo} className={less.logo} alt=""/>*/}
                        {/*    </div>*/}
                        {/*    <div className={less.user_name}>*/}
                        {/*        <h3>{this.props.login}</h3>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <ul>
                            {listLessons}
                        </ul>

                    </div>
                    <div className={less.main_content}>
                        <div className={less.main_inside_content}>
                            <div className={less.header}>
                                <div>Welcome!! Have a nice day.</div>
                            </div>
                            <div className={less.info}>
                                <div>
                                    {
                                        this.props.lesson[this.state.indexDescription]["description"]
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}