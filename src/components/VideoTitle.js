import React from 'react'

const VideoTitle = ({title,overview}) => {
return (
    <div className='w-screen aspect-video pt-[20%] px-12 absolute bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold mb-4 text-white'>{title}</h1>
        <p className='text-lg mb-6' style={{ width: '45%', color: 'white' }}>{overview}</p>
        <div className='flex space-x-4'>
            <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded'>
                Play
            </button>
            <button className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-6 rounded'>
                More Info
            </button>
        </div>
    </div>
)
}

export default VideoTitle;