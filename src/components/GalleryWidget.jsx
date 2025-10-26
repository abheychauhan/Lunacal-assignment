import React, { useState } from "react";
import img from "../assets/images/img.jpg";

export default function GalleryWidget() {
  const [images, setImages] = useState([
    { id: 1, src: img },
    { id: 2, src: img },
    { id: 3, src: img },

  ]);


  const handleAddImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = { id: images.length + 1, src: URL.createObjectURL(file) };
      setImages((prevImages) => [...prevImages, newImage]);
    }
  };

  const visibleCount = 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - visibleCount) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="w-full flex items-start gap-3 md:gap-5 rounded-2xl md:p-6 p-2 shadow-neo bg-[#363c43] border border-black/40 overflow-hidden">

      <div className='flex flex-col gap-20'>
        <div className="rounded-full border-1 border-gradient-to-r from-white to-black w-fit h-fit px-1">
          <i className="md:text-xl  text-sm ri-question-mark"></i>
        </div>
        <div className='grid grid-cols-2 gap-[2px]'>
          <div className='w-3 h-3 bg-[#4A4E54]'></div>
          <div className='w-3 h-3 bg-[#4A4E54]'></div>
          <div className='w-3 h-3 bg-[#4A4E54]'></div>
          <div className='w-3 h-3 bg-[#4A4E54]'></div>
          <div className='w-3 h-3 bg-[#4A4E54]'></div>
          <div className='w-3 h-3 bg-[#4A4E54]'></div>
        </div>
      </div>
      {/* Header */}

      <div className="w-full">

        <div className="flex w-full items-center gap-2 md:justify-between">
          <div className="rounded-xl bg-[#15191b] px-4 py-2 text-xs md:text-lg font-medium">
            Gallery
          </div>

          <div className="flex flex-shrink-0 items-center gap-2 md:gap-6">
            <label className="inline-flex items-center p-2 md:px-4 md:py-2 rounded-full bg-[#40464d]  shadow-[0px_-4px_5px_#5b6066] md:shadow-[0px_-10px_5px_#5b6066]  text-xs md:text-lg cursor-pointer shadow-neo">
              + ADD IMAGE
              <input onChange={(e) => handleAddImage(e)} accept="image/*" type="file" className="hidden" />
            </label>

            <button
              onClick={prevImage}
              disabled={currentIndex === 0}
              aria-label="left"
              className={`md:w-15 md:h-15 md:text-2xl w-8 h-8 rounded-full bg-linear-to-r from-zinc-800 to-black/30 hover:bg-black text-zinc-400 hover:text-white transition-colors shadow-[10px_0_15px_rgba(0,0,0,0.41)]`}
            >
              <i className="ri-arrow-left-line"></i>
            </button>

            <button
              onClick={nextImage}
              disabled={currentIndex >= images.length - visibleCount}
              aria-label="right"
              className={`md:w-15 md:h-15 md:text-2xl w-8 h-8 rounded-full bg-linear-to-r from-zinc-800 to-black/30 hover:bg-black text-zinc-400 hover:text-white transition-colors shadow-[10px_0_15px_rgba(0,0,0,0.41)]`}
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

        </div>
        <div className="mt-6 h-fit relative ">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
            }}
          >
            {images.map((imgObj) => (
              <div
                key={imgObj.id}
                className="md:w-45 w-30 h-30 flex-shrink-0 md:h-45 rounded-xl overflow-hidden grayscale hover:shadow-2xl shadow-black/60 hover:grayscale-0 hover:scale-105 transition-all ease-in-out duration-500"
              >
                <img
                  src={imgObj.src}
                  alt={`img-${imgObj.id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>



    </section>
  );
}
