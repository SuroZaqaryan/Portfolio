import React from 'react';
import Loading from './6.gif';

export default function LoadingMobile () {
    const LoadingStyle = {
        margin: 'auto',
        display: 'flex',
        width: '130px',
    }
    return <img style={LoadingStyle} src={Loading} alt={"Loading..."} />
}
