import React, { useEffect, useRef } from 'react';

export default function Video({exerciseVideo, poster, isPause, isReady}: any) {

    const video = useRef<any>();

    useEffect(() => {
        if((isPause && video.current) || isReady) {
            video.current.pause();
        } else if((!isPause && video.current) || !isReady) {
            video.current.play();
        }
    }, [isPause, isReady])

    return (
            <video ref={video} src={`${exerciseVideo}`} autoPlay loop width="100%">
                <source type="video/mp4" />
            </video>        
    );
}