import React from 'react';
import newsStyle from './styles/News.module.css';
import "./styles/Masonry.css";
import Masonry from "react-masonry-css";
import ShowMoreText from 'react-show-more-text';
import { NavBarNews } from "./NavbarNews/NavbarNews";
import NEWS1 from "./Vector_Backgrounds/29493.jpg"
import NEWS2 from "./Vector_Backgrounds/3181.jpg"

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
                <div style={{ background: '#ffffff' }} key={index}>
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
                                        <img
                                            style={{ maxWidth: '100%', borderRadius: '2px', border: '1px solid #adadad' }}
                                            src={post.urlToImage} alt="" />
                                    </a>

                                    <div class="bottom-left-title"><p>{post.source.name}</p></div>
                                </>
                                :
                                <>
                                    <a href={post.url} target="_blank">
                                        <img style={{ maxWidth: '100%' }} src={post.urlToImage} alt="" />
                                    </a>

                                    <div class="bottom-left-title dont-title-name"><p>{post.source.name}</p></div>
                                </>
                        }

                    </div>

                    <div className="title_description">
                        <a href={post.url} target="_blank" className="title">{post.title}</a>
                        <p className="description">{post.description}</p>
                    </div>

                    <ShowMoreText lines={1} more='Show more' less='Show less' anchorClass='' expanded={false} width={280}>
                        {post.content}
                    </ShowMoreText>
                </div>
            );
        })

        return (
            <div className={newsStyle.headlineSecond}>
                <div>
                    <NavBarNews />
                </div>
                <div style={{ width: '100%', marginLeft: '200px' }}>
                    <div>
                        <div className={newsStyle.newsTitleContent}>
                            <div className={newsStyle.newsTitleDesign}>
                                <div style={{ position: "relative" }}>
                                    <h1>Daily News</h1>
                                    <p>
                                        Read about the news of the day choose a news category for you
                                    </p>
                                </div>
                            </div>
<<<<<<< HEAD
                            <div className={newsStyle.banner} style={{ }}>
                                <h1 style={{color: 'white', fontSize: '35px'}}>Read about the news of the day</h1>
=======

                            <div style={{width: '65%', background: 'black'}}>
                                <div className="banner"></div>
>>>>>>> 909997c37c50099ef588c04e3e4a5e0edaf9862e
                            </div>
                        </div>
                    </div>
                    <div>
                        <Masonry style={{width: '30%'}}
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid"
                            columnClassName="my-masonry-grid_column"
                        >
                            {newsList}
                        </Masonry>
                    </div>
                </div>
            </div>
        );
    }
}