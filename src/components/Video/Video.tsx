import React from 'react';

export default function Video({exerciseVideo}: any) {
    return (
        <video src={`${exerciseVideo}`} autoPlay loop width="100%">
            <source type="video/mp4" />
        </video>
    );
}