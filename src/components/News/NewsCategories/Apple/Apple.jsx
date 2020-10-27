import React from 'react';
import news from '../../styles/News.module.css';
import Masonry from "react-masonry-css";
import NavbarNewsContainer from "../../NavbarNews/NavbarNewsContainer";
import {NewsTitleCategory} from "../../NewsTitleCategory/NewsTitleCategory";
import {NewsCover} from "../../NewsCover/NewsCover";
import "../../styles/Masonry.css";
import BitcoinImage from "../../Icons_And_Backgrounds/Icons/appleMulticolor.png";
import backgroundImage from "../../Icons_And_Backgrounds/Vector_Backgrounds/3.jpg";

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
            ],

            search: null
        }
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({search: keyword})
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

        const newsList = this.props.apple.filter((data) => {
            if (this.state.search == null) {
                return data
            } else if (data.title.toLowerCase().includes(this.state.search.toLowerCase())
                || data.description.toLowerCase().includes(this.state.search.toLowerCase()) || data.source.name.toLowerCase().includes(this.state.search.toLowerCase())) {
                return data
            }
        }).map(data => {
            return (
                <div className={news.cover_news}>
                    <NewsCover
                        author={data.author}
                        publishedAt={data.publishedAt}
                        url={data.url}
                        urlTitle={data.urlTitle}
                        urlToImage={data.urlToImage}
                        sourceName={data.source.name}
                        title={data.title}
                        description={data.description}
                        content={data.content}
                    />
                </div>
            )
        })

        return (
            <div className={news.headlineSecond}>
                <NavbarNewsContainer/>
                <div className={news.content_size}>
                    <div>
                        <div>
                        {bannerInfo}

                            <input type="text" placeholder="Enter item to be searched"
                                   onChange={(e) => this.searchSpace(e)}/>
                        </div>
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

