"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { StaticImageData } from "next/image";

interface ImageSliderProps {
    images: { src: StaticImageData }[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);


        // Function to show the previous slide
    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    // Function to show the next slide
    const nextSlide = (): void => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full mx-auto mt-4">
            <div
                className="relative h-[460px] mx-12 group"
            >
                <Image
                    src={images[currentIndex].src}
                    alt={`Slider Image ${currentIndex + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer"
                />
            </div>
            <button
                className="absolute left-0 top-1/2 transform h-[50px] rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#a8dfea] text-black p-2 group"
                onClick={prevSlide}
            >
                <ChevronLeft className="text-gray-400 group-hover:text-white" />
            </button>
            <button
                className="absolute right-0 top-1/2 transform h-[50px] rounded-full hover:bg-[#1a222f] mx-1 -mt-[10px] -translate-y-1/2 bg-[#a8dfea] text-black p-2 group"
                onClick={nextSlide}
            >
                <ChevronRight className="text-gray-400 group-hover:text-white" />
            </button>
            <div className="flex justify-center mt-4">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 w-10 mx-1 ${
                            index === currentIndex
                                ? "bg-[#beff46] rounded-xl"
                                : "bg-gray-300 rounded-xl"
                        } transition-all duration-500 ease-in-out`}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;