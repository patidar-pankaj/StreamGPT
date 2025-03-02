const VideoTitle = ({title,overview})=>{
    return (
        <div className=" w-screen aspect-video pt-56 px-10 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="py-4 w-4/12 text-md">{overview}</p>
            <div>
                <button className="bg-white text-black  px-8 py-4 rounded-md hover:bg-opacity-80 ">▶️ Play</button>
                <button className="bg-gray-500 text-white px-8 py-4 rounded-md mx-2">ℹ️ More Info</button>
            </div>
        </div>
    )
};


export default VideoTitle;