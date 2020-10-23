import React from "react";

export class Business extends React.Component {
    render() {
        const newsCountryList = this.props.newsCountry.map((item, index) => {
            return (
                <div key={index}>
                    <img style={{maxWidth: '100%', border: '3px solid red'}} src={item.urlToImage} alt=""/>
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