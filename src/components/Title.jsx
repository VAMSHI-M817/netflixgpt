import React from 'react'

const Title = ({ title, overview }) => {
    return (
        <div className='flex flex-col items-start pt-[20%] px-10 gap-4 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
            <p className='text-5xl font-bold'>{title}</p>
            <p className="text-justify leading-relaxed max-w-xl text-xl px-2 font-medium">{overview}</p>
            <div className='flex gap-2'>
                <button className='p-2 bg-white border px-12 py-4 text-xl font-bold rounded text-black'>▶ Play</button>
                <button className='p-2 border px-12 py-4 text-xl font-bold text-white bg-slate-600 rounded '><span className=' font-bold text-2xl'>ⓘ</span> More Info</button>
            </div>
        </div>
    )
}

export default Title
