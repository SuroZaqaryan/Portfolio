import React from 'react';
import news from '../../styles/News.module.css';
import Masonry from "react-masonry-css";
import NavbarNewsContainer from "../../NavbarNews/NavbarNewsContainer";
import {NewsTitleCategory} from "../../NewsTitleCategory/NewsTitleCategory";
import {NewsCover} from "../../NewsCover/NewsCover";
import "../../styles/Masonry.css";
import BitcoinImage from "../../Icons_And_Backgrounds/Icons/appleMulticolor.png";
import backgroundImage from "../../Icons_And_Backgrounds/Vector_Backgrounds/Bitcoin.png";

export class Apple extends React.Component {

    constructor() {
        super();
        this.state = {
            bannerInfo: [
                {
                    titleName: "Apple",
                    icon: BitcoinImage,
                    banner: backgroundImage,
                    bannerTitle: "Apple",
                }
            ]
        }
    }

    render() {
        const bannerInfo = this.state.bannerInfo.map((item, index) => {
                return (
                    <NewsTitleCategory
                        titleName={item.titleName}
                        icon={item.icon}
                        banner={item.banner}
                        bannerTitle={item.bannerTitle}
                    />
                );
            }
        )
        const breakpointColumnsObj = {
            default: 4,
            1500: 3,
            1060: 2,
            750: 1
        };

        const newsList = this.props.apple.map((post, index) => {
            return (
                <div className={news.cover_news} key={index}>
                    <NewsCover
                        author={post.author}
                        publishedAt={post.publishedAt}
                        url={post.url}
                        urlTitle={post.urlTitle}
                        urlToImage={post.urlToImage}
                        sourceName={post.source.name}
                        title={post.title}
                        description={post.description}
                        content={post.content}
                    />
                </div>
            );
        })

        return (
            <div className={news.headlineSecond}>
                <NavbarNewsContainer/>
                <div className={news.content_size}>
                    <div>
                        {bannerInfo}
                        <div>
                            <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid"
                                     columnClassName="my-masonry-grid_column">
                                {newsList}
                            </Masonry>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

