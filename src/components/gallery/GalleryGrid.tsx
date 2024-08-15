"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import faith from "../../../public/faithbaptist/heroo.jpg";
import faith1 from "../../../public/faithbaptist/hero2.jpg";
import faith5 from "../../../public/faithbaptist/faith7.jpg";
import faith3 from "../../../public/faithbaptist/faith9.jpg";

import faith6 from "../../../public/faithbaptist/faith6.jpg";
import faith7 from "../../../public/faithbaptist/faith5.jpg";
import faith8 from "../../../public/faithbaptist/faith11.jpg";
import faith9 from "../../../public/faithbaptist/faith12.jpg";
import faith10 from "../../../public/faithbaptist/faith13.jpg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Button from '../utils/Button';


export const galleryImages = [
  faith, faith1, faith3,
  faith5, faith6, faith7, faith8, faith9, faith10,
];

const GalleryGrid = () => {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const imagesToShow = isHomepage ? galleryImages.slice(0, 8) : galleryImages;

  return (
    <div className='flex flex-col gap-3 place-items-center items-center justify-center'>
    <Swiper
      modules={[Pagination, Autoplay]}
      centeredSlides
      autoHeight={true}
      autoplay={{
        delay: 3000,
      }}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 image at a time for small screens
        },
        768: {
          slidesPerView: 2, // 3 images at a time for medium screens
          slidesPerGroup: 1
        },
        1024: {
          slidesPerView: 1, 
          slidesPerGroup: 2
        },
      
      }}
      pagination={{ clickable: true }}
      className='w-4/5 md:w-3/5 mx-auto'
        >
      {imagesToShow.map((img, index) => (
        <SwiperSlide key={index}>
          <Image
            className="md:w-[65%] mx-auto rounded-md"
            src={img}
            alt={`Gallery Photo ${index + 1}`}
            // layout="responsive"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    <Button
                href="/gallery"
                btnText="view more"
                className='bg-blue-600 text-white'
              />
    </div>
  );
};

export default GalleryGrid;
