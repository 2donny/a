import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination]);

export default function MySwiper() {
    return (
        <>
           <Swiper
                id="main"
                tag="section"
                wrapperTag="ul"
                navigation
                pagination
                spaceBetween={50}
                slidesPerView={3}
            >
                <SwiperSlide 
                    tag="li" 
                    style={{border: '1px solid lightgray', position: 'relative', zIndex: -1, padding: '10px'}}
                >
                    <h1 className="text-2xl font-bold text-center mt-15 -translate-x-0.5">Operating system</h1>
                    <img  
                        className="mt-10"
                        src="/os_thumbnail.png"
                        alt="slide1"
                    />
                    <p className="opacity-0 text-sm absolute top-28">Virtual machine에서 여러개의 프로그램을 실행한 후 직접 Kernel code를 수정하여 CPU burst time을 측정한 과제였습니다. </p>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{border: '1px solid lightgray'}}>
                    <h1 className="text-2xl font-bold text-center mt-15 -translate-x-0.5">Operating system</h1>
                    <img  
                        className="mt-10"
                        src="/db_thumbnail.png"
                        alt="slide1"
                    />
                    <p className="opacity-0 text-sm absolute top-28">Virtual machine에서 여러개의 프로그램을 실행한 후 직접 Kernel code를 수정하여 CPU burst time을 측정한 과제였습니다. </p>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{border: '1px solid lightgray'}}>
                    <img  
                        src="/cn_thumbnail.png"
                        alt="slide1"
                    />
                </SwiperSlide>
                <SwiperSlide tag="li" style={{border: '1px solid lightgray'}}>
                    <img  
                        src="/os_thumbnail.png"
                        alt="slide1"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

