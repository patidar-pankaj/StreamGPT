const VideoTitle = ({title,overview})=>{
    return (
        <div className=" w-screen aspect-video pt-[30%] md:pt-56 px-10 absolute text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-xl md:text-5xl">{title}</h1>
            <p className="hidden md:block py-4 w-4/12 text-sm">{overview}</p>
            <div className="md:m-0 my-2">
                <button className="bg-white text-black px-4 py-2 md:px-8 md:py-4 rounded-md hover:bg-opacity-80">▶️ Play</button>
                <button className="bg-gray-500 text-white px-8 py-4 rounded-md mx-2 hidden md:inline-block">ℹ️ More Info</button>
            </div>
        </div>
    )
};


export default VideoTitle;