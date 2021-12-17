import React from 'react';

export default function Video({exerciseVideo, poster}: any) {
    return (
        <video poster={poster} src={`${exerciseVideo}`} autoPlay loop width="100%">
            <source type="video/mp4" />
        </video>
    );
}