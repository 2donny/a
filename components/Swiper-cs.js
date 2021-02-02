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
                    style={{border: '1px solid lightgray', position: 'relative', zIndex: -1, padding: '15px', marginLeft: '30px'}}
                >
                    <h1 className=" font-sans text-2xl font-bold text-center -translate-x-0.5">Operating system</h1>
                    <img  
                        className="mt-10"
                        src="/os_thumbnail.png"
                        alt="slide1"
                    />
                    <p className="opacity-0 absolute top-28 font-medium text-sm break-normal">
                        과제 개요 
                        <br />
                        CPU의 Time Quantum을 결정하는 리눅스 스케줄러의 커널 구조체와(sched_info) 파일들을 직접 들여다보고 분석함으로써 다소 추상적이라고 생각할 수도 있는 Operating system을 실체화된 코드로 확인해본다.
                        <br />
                        <br />
                        C로 짜여진 Kernel 구조체들을 이해하고 code를 수정함으로써 CPU burst time을 측정하는 전공 과제였습니다.
                        <br />
                        <br />
                        커널은 million 단위로 짜여짐에도 불구하고 구조채와 함수를 조금만 들여다보면 CPU burst time 측정도 할 수 있음에 리눅스가 참 "잘 짜여진" 시스템이라고 다시 한번 느꼈습니다.
                        코드를 수정한 것 보다 커널 코드를 분석해본 경험이 기억에 남는 과제였습니다.
                    </p>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{border: '1px solid lightgray'}}>
                    <h1 className=" font-sans text-2xl font-bold text-center mt-15 -translate-x-0.5">Database</h1>
                    <img  
                        className="mt-10"
                        src="/db_thumbnail.png"
                        alt="slide1"
                    />
                    <p className="opacity-0 text-sm absolute top-28">Virtual machine에서 여러개의 프로그램을 실행한 후 직접 Kernel code를 수정하여 CPU burst time을 측정한 과제였습니다. </p>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{border: '1px solid lightgray'}}>
                    <h1 className=" font-sans text-2xl font-bold text-center mt-15 -translate-x-0.5">Computer network</h1>
                    <img  
                        className="mt-10"
                        src="/cn_thumbnail.png"
                        alt="slide1"
                    />
                    <p className="opacity-0 text-sm absolute top-28">Virtual machine에서 여러개의 프로그램을 실행한 후 직접 Kernel code를 수정하여 CPU burst time을 측정한 과제였습니다. </p>
                </SwiperSlide>
                <SwiperSlide tag="li" style={{border: '1px solid lightgray'}}>
                    <h1 className=" font-sans text-2xl font-bold text-center mt-15 -translate-x-0.5">Operating system</h1>
                    <img  
                        className="mt-10"
                        src="/os_thumbnail.png"
                        alt="slide1"
                    />
                    <p className="opacity-0 text-sm absolute top-28">Virtual machine에서 여러개의 프로그램을 실행한 후 직접 Kernel code를 수정하여 CPU burst time을 측정한 과제였습니다. </p>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

