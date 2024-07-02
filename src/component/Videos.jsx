import React from 'react';

function Videos() {
    return (
        <div className='flex flex-wrap items-center justify-center w-full mb-4'>
            <div className="grid items-center justify-center w-full grid-cols-1 p-4 bg-black bg-opacity-50 border-4 md:w-3/4 rounded-3xl gap-x-6 md:grid-cols-2 lg:grid-cols-2">
                <div className="w-full p-4">
                    <iframe
                        className="w-full border-2 aspect-video"
                        src="https://www.youtube.com/embed/nKdfx9wM9BQ?si=0SC-m2mFFx0HVQRG"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full p-4">
                    <iframe
                        className="w-full border-2 aspect-video"
                        src="https://www.youtube.com/embed/ZcCAkWT7df4?si=nm-RinBRbpWSyfPT"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full p-4">
                    <iframe
                        className="w-full border-2 aspect-video"
                        src="https://www.youtube.com/embed/nTcFXJT0Fsc?si=tNK_qCUBoJ28ZTOg"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full p-4">
                    <iframe
                        className="w-full border-2 aspect-video"
                        src="https://www.youtube.com/embed/57MpZ-1VmRs?si=3wJwY1HiWaHzNHp1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Videos;