import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
  const slides = [
    { id: 1, src: "/images/speed_boat.jpeg", alt: "Slide 1", caption: "Boat crossing the river" },
    { id: 2, src: "/images/passenger_ai.jpg", alt: "Slide 2", caption: "Farmers in the swamp" },
    { id: 3, src: "/images/passenger_zoom.jpg", alt: "Slide 3", caption: "River conservation efforts" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-64">
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
                {slide.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
