import React from 'react';
import news from '../../styles/News.module.css';
import Masonry from "react-masonry-css";
import NavbarNewsContainer from "../../NavbarNews/NavbarNewsContainer";
import { NewsTitleCategory } from "../../NewsTitleCategory/NewsTitleCategory";
import { NewsCover } from "../../NewsCover/NewsCover";
import "../../styles/Masonry.css";
import BitcoinImage from "../../Icons_And_Backgrounds/Icons/bitcoin2.png";
import backgroundImage from "../../Icons_And_Backgrounds/Vector_Backgrounds/Bitcoin.png";
import Search from "../../Icons_And_Backgrounds/Icons/search.png"

export class Business extends React.Component {

    constructor() {
        super();
        this.state = {
            bannerInfo: [
                {
                    titleName: "Business",
                    icon: BitcoinImage,
                    banner: backgroundImage,
                    bannerTitle: "Business"
                }
            ],

            search: null

        }
    }

    searchSpace = (event) => {
        let keyword = event.target.value;
        this.setState({ search: keyword })
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

        const newsList = this.props.newsCountry.filter((data) => {
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
                <NavbarNewsContainer />
                <div className={news.content_size}>
                    <div style={{ width: "90%", margin: "auto" }}>
                        <div style={{ margin: "auto", paddingLeft: "15px" }}>
                            {bannerInfo}
                            <div
                                style={{ marginTop: "15px", borderTop: "1px solid #d7d7d7", paddingTop: "20px", alignItems: "center" }}>
                                {/* <div style={{marginRight: "10px"}}>
                                    <img style={{width: "30px"}} src={Search} alt=""/>
                                </div> */}
                                <div style={{ width: "100%", marginBotttom: "10px", display: "flex", justifyContent: "flex-end" }}>
                                    <img className={news.searchIcon} src={Search} alt="" />
                                    <input type="text" className={news.search}
                                        onChange={(e) => this.searchSpace(e)} placeholder="Search news" />
                                </div>
                            </div>
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

