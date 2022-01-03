import { useEffect, useRef } from "react";
import { VideoProps } from "./Video.interfaces";
import { VideoTag } from "./Video.styled";

export default function Video({ exerciseVideo, isPause, isReady }: VideoProps): JSX.Element {
    const video = useRef<any>();

    useEffect(() => {
        if ((isPause && video.current) || isReady) {
            video.current.pause();
        } else {
            video.current.play();
        }
    }, [isPause, isReady]);

    return (
        <VideoTag ref={video} src={`${exerciseVideo}`} muted loop>
            <source type="video/mp4" />
        </VideoTag>
    );
}
