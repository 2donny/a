import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export default function MySwiper() {
    return (
        <>
           <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination
                navigation
                spaceBetween={10}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img  
                        src="/home.png"
                        alt="slide1"
                        width={500}
                        height={300}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img  
                        src="/macbook.jpg"
                        alt="slide1"
                        width={500}
                        height={300}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img  
                        src="/home.png"
                        alt="slide1"
                        width={500}
                        height={300}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img  
                        src="/macbook.jpg"
                        alt="slide1"
                        width={500}
                        height={300}
                    />
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
        </>
    )
}

