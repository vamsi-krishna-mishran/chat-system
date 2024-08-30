import React from 'react';

const VideoPreview = () =>
{
    return (
        <video autoPlay muted loop id="video-background" src="./3048170-uhd_3840_2160_24fps.mp4">
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPreview;
