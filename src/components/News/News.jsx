import React from 'react';
import newsStyle from './styles/News.module.css';
import "./styles/Masonry.css";
import Masonry from "react-masonry-css";
import ShowMoreText from 'react-show-more-text';
import { NavBarNews } from "./NavbarNews/NavbarNews";

export class NewsCountry extends React.Component {
    render() {
        const newsCountryList = this.props.newsCountry.map((item, index) => {
            return (
                <div key={index}>
                    <img style={{ maxWidth: '100%', border: '3px solid red' }} src={item.urlToImage} alt="" />
                </div>
            );
        })
        return (
            <>
                <div>
                    {newsCountryList}
                </div>
            </>
        );
    }
}

export class News extends React.Component {
    render() {

        const breakpointColumnsObj = {
            default: 4,
            1100: 3,
            700: 2,
            500: 1
        };

        const newsList = this.props.news.map((post, index) => {
            return (
                <div style={{ background: 'rgb(214 214 214 / 6%)' }} key={index}>
                    <div className="Author_And_Data">
                        <div className="author">
                            <p>{post.author}</p>
                        </div>

                        <div className="publishedAt">
                            <p>{post.publishedAt}</p>
                        </div>
                    </div>

                    <div class="container">

                        {
                            post.urlToImage ?
                                <>
                                    <a href={post.url} target="_blank">
                                        <img style={{ maxWidth: '100%' }} src={post.urlToImage} alt="" />
                                    </a>

                                    <div class="bottom-left"><p>{post.source.name}</p></div>
                                </>
                                :
                                <>
                                    <a href={post.url} target="_blank">
                                        <img style={{ maxWidth: '100%' }} src={post.urlToImage} alt="" />
                                    </a>

                                    <div class="bottom-left"><p>{post.source.name}</p></div>
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
            <div className={newsStyle.headlineSecond}>
                <NavBarNews />
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                >
                    {newsList}
                </Masonry>
            </div>
        );
    }
}