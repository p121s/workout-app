import { useEffect, useRef } from 'react';
import { VideoProps } from './Video.interfaces';

export default function Video({exerciseVideo, isPause, isReady}: VideoProps) {

    const video = useRef<any>();

    useEffect(() => {
        if((isPause && video.current) || isReady) {
            video.current.pause();
        } else if((!isPause && video.current) || !isReady) {
            video.current.play();
        }
    }, [isPause, isReady])

    return (
            <video ref={video} src={`${exerciseVideo}`} muted loop width="100%">
                <source type="video/mp4" />
            </video>        
    );
}