import React from 'react'

const Title = ({ title, overview }) => {
    return (
        <div className="max-sm:p-12 w-screen aspect-video pt-[16%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold ">{title}</h1>
            <p className="py-6 text-lg md:w-1/4 mb-4 md:mb-0 max-sm:line-clamp-1 text-justify ">{overview}</p>
            <div className="my-4 md:m-0 flex flex-row gap-4 items-center">
                <button className="bg-white text-black py-2 px-4 text-base sm:text-lg md:text-xl rounded-lg hover:bg-opacity-80">
                    ► Play
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 text-base sm:text-lg md:text-xl bg-opacity-50 rounded-lg">
                    ⓘ More Info
                </button>
            </div>



        </div>


    )
}

export default Title
