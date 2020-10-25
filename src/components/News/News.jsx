import React from 'react';
import news from './styles/News.module.css';
import "./styles/Masonry.css";
import Masonry from "react-masonry-css";
import ShowMoreText from 'react-show-more-text';
import Bitcoin from "./Icons_And_Backgrounds/Icons/bitcoin2.png"
import NavbarNewsContainer from "./NavbarNews/NavbarNewsContainer";
import {NewsTitleCategory} from "./NewsTitleCategory/NewsTitleCategory";

export class News extends React.Component {
    render() {

        const breakpointColumnsObj = {
            default: 4,
            1500: 3,
            1050: 2,
            750: 1
        };

        const newsList = this.props.news.map((post, index) => {
            return (
                <div className={news.cover_news} key={index}>
                    <div className="Author_And_Data">
                        <div className="author">
                            <p>{post.author}</p>
                        </div>

                        <div className="publishedAt">
                            <p>{post.publishedAt}</p>
                        </div>
                    </div>

                    <div className="container">

                        {
                            post.urlToImage ?
                                <>
                                    <a href={post.url} target="_blank">
                                        <img className={news.image_url} src={post.urlToImage} alt=""/>
                                    </a>

                                    <div className="bottom-left-title"><p>{post.source.name}</p></div>
                                </>
                                :
                                <>
                                    <a href={post.url} target="_blank">
                                        <img style={{maxWidth: '100%'}} src={post.urlToImage} alt=""/>
                                    </a>

                                    <div className="bottom-left-title dont-title-name"><p>{post.source.name}</p></div>
                                </>
                        }

                    </div>

                    <div className="title_description">
                        <a href={post.url} target="_blank" className="title">{post.title}</a>
                        <p className="description">{post.description}</p>
                    </div>

                    <ShowMoreText lines={1} more='Show more' less='Show less' anchorClass='' expanded={false}
                                  width={280}>
                        {post.content}
                    </ShowMoreText>
                </div>
            );
        })

        return (
            <div className={news.headlineSecond}>
                <NavbarNewsContainer/>
                <div className={news.content_size}>
                    <div>
                        <NewsTitleCategory/>
                        <div>
                            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                                {newsList}
                            </Masonry>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}