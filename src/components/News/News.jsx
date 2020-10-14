import React from 'react';
import newsStyle from './News.module.css';

export class News extends React.Component {
    render() {

        const resultsRender = [];


        for (var i = 0; i < this.props.news.length; i += 2) {
            resultsRender.push(
                <div className={newsStyle.block}>
                    {
                        this.props.news.slice(i, i + 2).map((news, index) => {
                            return (
                                <div className={index % 2 === 0 ? newsStyle.leftContentNews : newsStyle.rightContentNews} key={index}>
                                    <div>
                                    <img style={{maxWidth: '100%'}} src={news.urlToImage} alt=""/>
                                    </div>
                                    <div className={newsStyle.name_data}>
                                        <p className={newsStyle.news_name}>{news.source.name}</p>
                                        <p className={newsStyle.news_publishedAt}>{news.publishedAt}</p>
                                    </div>
                                    <div>
                                    <p className={newsStyle.newsTitle}>{news.title}</p>
                                    <p className={index % 2 === 0 ? newsStyle.leftDescription : newsStyle.rightDescription}>{news.description}</p>
                                    </div>
                                </div>
                            );
                        }

                        )
                    }
                </div>
            );
        }

        return (
            <div>
                <div className={newsStyle.headlineSecond}>
                    <div className={newsStyle.navBar}>
                        <div>
                            <ul>
                                <li><a class="active" href="#home">Home</a></li>
                                <li><a href="#news">News</a></li>
                                <li><a href="#contact">Contact</a></li>
                                <li><a href="#about">About</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className={newsStyle.Second}>
                        {resultsRender}
                    </div>
                </div>
            </div>
        );
    }
}
