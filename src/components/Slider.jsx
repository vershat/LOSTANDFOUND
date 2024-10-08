import React, { useState, useEffect } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Slider= ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)
    const slidesPerView = 4

    const prev = () => setCurr((curr) => (curr === 0 ? Math.ceil(slides.length / slidesPerView) - 1 : curr - 1))
    const next = () => setCurr((curr) => (curr === Math.ceil(slides.length / slidesPerView) - 1 ? 0 : curr + 1))

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [curr])

    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100 / slidesPerView}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className='min-w-[25%] flex-shrink-0'>
                        {slide}
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4 ">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <BiChevronLeft className='text-2xl'/>
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <BiChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {Array.from({ length: Math.ceil(slides.length / slidesPerView) }).map((_, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Slider
