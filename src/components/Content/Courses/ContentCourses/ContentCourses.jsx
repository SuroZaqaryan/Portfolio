import React from "react";
import cnStyle from "./ContentCourses.module.css"
import styled from "styled-components";

const Content_Container = styled.div`
  background: ${props => (props.value ? "#282e3c" : "rgb(170 170 170 / 18%)")};
  box-shadow: ${props => (props.value ? "0px 1px 10px rgb(24 24 24 / 45%)" : null)};
  border: ${props => (props.value ? "1px solid #343b4b" : "1px solid #dbdbdb99")};
  max-width: 100%;
  margin: 15px;
  max-width: 480px;

`;

const ContentHeadlineBlock = styled.div`
  border-bottom: ${props => (props.value ? "1px solid #2f3747" : "1px solid #b0b0b04f")};
  max-width: 450px;
  padding: 20px;
  padding-bottom: 17px;
`;

export class ContentCourses extends React.Component {

    render() {

        const resultsRender = [];

        for (var i = 0; i < this.props.course.length; i += 2) {
            resultsRender.push(
                <div className={cnStyle.clearfix}>
                    {
                        this.props.course.slice(i, i + 2).map((item, index) => {
                            return (
                                <Content_Container value={this.props.value} key={index} className={cnStyle.ContentVeryHeadlineBlock}>
                                    <ContentHeadlineBlock value={this.props.value}>
                                        <div className={cnStyle.ContentCoursesBlock}>
                                            <div style={{ marginRight: '25px' }} className={cnStyle.courseIconBlock}>
                                                <img className={cnStyle.courseIcon} src={item.icon} alt="" />
                                            </div>

                                            <div>
                                                <div className={cnStyle.courseName}>
                                                    <h3>{item.languageName}</h3>
                                                </div>
                                                <div>
                                                    <p className={this.props.value ? cnStyle.courseDarkInfo : cnStyle.courseInfo}>
                                                        {item.about}
                                                    </p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className={cnStyle.buttonMoreBlock}>
                                            <button>More</button>
                                        </div>
                                    </ContentHeadlineBlock>
                                    <div className={cnStyle.moreInformation}>
                                        <div>
                                            <p>Learners</p>
                                            <p className={cnStyle.learnQuantity}>{item.Learners}</p>
                                        </div>
                                        <div>
                                            <p>Lessons</p>
                                            <p className={cnStyle.learnQuantity}>{item.Lessons}</p>
                                        </div>
                                        <div>
                                            <p>Quizzes</p>
                                            <p className={cnStyle.learnQuantity}>{item.Quizzes}</p>
                                        </div>
                                    </div>
                                </Content_Container>
                            );
                        }

                        )
                    }
                </div>
            );
        }

        return (
            <div>
                {resultsRender}
            </div>
        );
    }
}
