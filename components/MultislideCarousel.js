import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";


const MultislideCarousel = () => {
  return (
    <>
      <div className='max-w-full mx-6 mt-10 text-white relative'>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        slidesPerGroup={1} 
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={800}
        loop={true} 
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        breakpoints={{
          1024: { slidesPerView: 4, slidesPerGroup: 2 }, // Desktop
          768: { slidesPerView: 3, slidesPerGroup: 1 },  // Tablet
          640: { slidesPerView: 2, slidesPerGroup: 1 },  // Mobile
          320: { slidesPerView: 1, slidesPerGroup: 1 },  // Small screens
        }}
        className="rounded-lg"
      >
            <SwiperSlide>
            <div>
              <div className='bg-[#a78a7f]/30 p-4 text-lg h-48'><p className="w-8 h-8 text-red-400 text-6xl">"</p>This journey has been incredible! I lost weight, built better habits, and now I wake up feeling refreshed every single day.</div>
              <div className='flex gap-4 pt-4 place-items-center justify-start'>
                <div  className='border-4 border-red-400 rounded-full'>
                  <Image
                    src="/testi2.jpg"
                    alt="Testimonial Section image"
                    className="w-[50px] h-[50px] rounded-full object-cover object-center"
                    width={100}
                    height={100}
                    quality={90}
                    priority
                  />
                </div>
                <div><p>Rachel Simmons</p></div>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div>
              <div className='bg-[#a78a7f]/30 p-4 text-lg h-48'><p className="w-8 h-8 text-red-400 text-6xl">"</p>This program completely changed my mindset! I lost weight, built strength, and now I feel more confident than ever.</div>
              <div className='flex gap-4 pt-4 place-items-center justify-start'>
                <div className='border-4 border-red-400 rounded-full'>
                  <Image
                    src="/testi3.jpg"
                    alt="Testimonial Section image"
                    className="w-[50px] h-[50px] rounded-full object-cover object-center "
                    width={100}
                    height={100}
                    quality={90}
                    priority
                  />
                </div>
                <div><p>David Chen</p></div>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div>
              <div className='bg-[#a78a7f]/30 p-4 text-lg h-48'><p className="w-8 h-8 text-red-400 text-6xl">"</p>Joining this program was the best decision of my life! I gained confidence, lost inches, and finally feel in control of my health.</div>
              <div className='flex gap-4 pt-4 place-items-center justify-start'>
                <div  className='border-4 border-red-400 rounded-full'>
                  <Image
                    src="/testi1.jpg"
                    alt="Testimonial Section image"
                    className="w-[50px] h-[50px] rounded-full object-cover object-center"
                    width={100}
                    height={100}
                    quality={90}
                    priority
                  />
                </div>
                <div><p>Elizabeth Anne</p></div>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    
            <div>
              <div className='bg-[#a78a7f]/30 p-4 text-lg h-48'><p className="w-8 h-8 text-red-400 text-6xl">"</p>I never thought I’d see such a transformation! I feel stronger, healthier, and more energized than ever before—both physically and mentally</div>
              <div className='flex gap-4 pt-4 place-items-center justify-start'>
                <div  className='border-4 border-red-400 rounded-full'>
                  <Image
                    src="/testi4.jpg"
                    alt="Testimonial Section image"
                    className="w-[50px] h-[50px] rounded-full object-cover object-center"
                    width={100}
                    height={100}
                    quality={90}
                    priority
                  />
                </div>
                <div><p> Daniel Joseph</p></div>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div>
              <div className='bg-[#a78a7f]/30 p-4 text-lg h-48'><p className="w-8 h-8 text-red-400 text-6xl">"</p>The results speak for themselves! I lost inches, boosted my energy, and now I feel amazing inside and out.</div>
              <div className='flex gap-4 pt-4 place-items-center justify-start'>
                <div className='border-4 border-red-400 rounded-full'>
                  <Image
                    src="/testi3.jpg"
                    alt="Testimonial Section image"
                    className="w-[50px] h-[50px] rounded-full object-cover object-center "
                    width={100}
                    height={100}
                    quality={90}
                    priority
                  />
                </div>
                <div><p>Grace Emily Robinson</p></div>
              </div>
            </div>
                  </SwiperSlide>
                  <SwiperSlide>
                  <div>
              <div className='bg-[#a78a7f]/30 p-4 text-lg h-48'><p className="w-8 h-8 text-red-400 text-6xl">"</p>I didn’t just lose pounds—I gained a new lifestyle! I feel healthier, happier, and more motivated every day.</div>
              <div className='flex gap-4 pt-4 place-items-center justify-start'>
                <div className='border-4 border-red-400 rounded-full'>
                  <Image
                    src="/testi3.jpg"
                    alt="Testimonial Section image"
                    className="w-[50px] h-[50px] rounded-full object-cover object-center "
                    width={100}
                    height={100}
                    quality={90}
                    priority
                  />
                </div>
                <div><p>Michael James Carter</p></div>
              </div>
            </div>
                  </SwiperSlide>
                  
                </Swiper>
       


      {/* Navigation Arrows (Positioned on Right) */}
      <div className="absolute top-full right-[-10px] flex transform -translate-y-1/2">
        
        <button className="next-btn bg-transparent border-2 cursor-pointer text-white px-3 py-2 rounded-full">▶</button>
      </div>
    </div>
    </>
  )
}

export default MultislideCarousel





      



