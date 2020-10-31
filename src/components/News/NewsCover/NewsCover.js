import React from "react";
import "../styles/Masonry.css"
import "./style/NewsCover.css"
import ShowMoreText from "react-show-more-text";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const NewsCover = (props) => {
    return (
        <>
            <div className="Author_And_Data">
                <div className="author">
                    <p>{props.author}</p>
                </div>

                <div className="publishedAt">
                    <p>{props.publishedAt}</p>
                </div>
            </div>

            <div className="container">
                {
                    props.urlToImage ?
                        <>
                            <a href={props.url} target="_blank">
                                <img className={"image_url"} src={props.urlToImage} alt=""/>
                            </a>

                            <div className="bottom-left-title"><p>{props.sourceName}</p></div>
                        </>
                        :
                        <>
                            <a href={props.url} target="_blank">
                                <LazyLoadImage style={{maxWidth: "100%"}} src={props.urlToImage} />
                            </a>
                            <div className="bottom-left-title dont-title-name">
                                <p>{props.sourceName}</p>
                            </div>
                        </>
                }

            </div>

            <div className="title_description">
                <a href={props.url} target="_blank" className="title">{props.title}</a>
                <p className="description">{props.description}</p>
            </div>

            <ShowMoreText lines={1} more='Show more' less='Show less' anchorClass='' expanded={false} width={280}>
                {props.content}
            </ShowMoreText>
        </>
    );
}