import React from 'react';
import newsStyle from './styles/News.module.css';
import "./styles/Masonry.css";
import Masonry from "react-masonry-css";
import ShowMoreText from 'react-show-more-text';
import Bitcoin from "./Icons_And_Backgrounds/Icons/bitcoin.png"
import NavbarNewsContainer from "./NavbarNews/NavbarNewsContainer";

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
                <div style={{background: '#ffffff'}} key={index}>
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
                                            style={{maxWidth: '100%', borderRadius: '2px', border: '1px solid #adadad', width: '100%'}}
                                            src={post.urlToImage} alt=""/>
                                    </a>

                                    <div class="bottom-left-title"><p>{post.source.name}</p></div>
                                </>
                                :
                                <>
                                    <a href={post.url} target="_blank">
                                        <img style={{maxWidth: '100%'}} src={post.urlToImage} alt=""/>
                                    </a>

                                    <div class="bottom-left-title dont-title-name"><p>{post.source.name}</p></div>
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
                <div>
                    <NavbarNewsContainer/>
                </div>
                <div style={{width: '100%', marginLeft: '200px'}}>
                    <div>
                        <div className={newsStyle.newsTitleContent}>
                            <div>

                                <div className={newsStyle.newsTitleDesign}>
                                    <div style={{position: "relative"}}>
                                        <h1>Daily News</h1>
                                        <p>
                                            Read about the news of the day choose a news category for you
                                        </p>
                                    </div>
                                </div>

                                <div style={{
                                    margin: 'auto',
                                    marginTop: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderTop: '1px solid #c2c2c2a6',
                                    padding: '20px',
                                    backgroundImage: 'linear-gradient( 135deg, #5ec2fc 10%, #f65d5d 100%)',
                                    borderRadius: '20px',
                                }}>
                                    <div style={{marginRight: '10px'}}>
                                        <h2 style={{fontSize: '30px', color: 'white'}}>Bitcoin</h2>
                                    </div>
                                    <div>
                                        <img style={{width: '40px', maxWidth: '100%'}} src={Bitcoin} alt=""/>
                                    </div>
                                </div>
                            </div>


                            <div className={newsStyle.banner} style={{}}>
                                {/* <div>
                                    <h1 style={{
                                        color: 'black',
                                        fontSize: '35px',
                                        background: '#00000030',
                                        padding: '10px'
                                    }}>Bitcoin</h1>
                                </div> */}
                            </div>
                        </div>
                        <div>
                            <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column"
                            >
                                {newsList}
                            </Masonry>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}