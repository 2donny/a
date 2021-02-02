import React, { useState, useEffect, useRef, useReducer } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Images from 'next/image';

import SwiperCS from '../components/Swiper-cs';
import SwiperProject from '../components/Swiper-project';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart pause resume none"
})


export default function Home() {

  useEffect(() => {
    // gsap
    gsap.defaults({ease: 'none', duration: 2})
    let tl = gsap.timeline();
    
    tl.to("#intro", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: true,
        toggleActions: "restart pause reverse pause",
        markers: true,
      },
      scale: 1.2,
      duration: 10
    })
    .to("#introText", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        end: "+=500px",
        pinSpacing: false,
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      opacity: 0,
      duration: 2
    })
    .to("#introText2", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        pinSpacing: false,
        scrub: true,
        toggleActions: "restart pause reverse pause",
      },
      opacity: 1,
      duration: 8
    })

    gsap.to("#blank", {
      scrollTrigger: {
        trigger: "#blank",
        start: "top top",
        end: "+=1000px",
        pinSpacing: false,
        scrub: true,
        markers: true,
      },
      duration: 20,
      opacity: 0
    })
    
    // AOS
    Aos.init({ offset: 100, duration: 1500,});


  }, []);

  return (
    <Layout>
      <Head>
        <title>Portfolio, Dedication</title>
        <meta name="description" content="웹 개발자 포트폴리오, Front-end Developer's Portfolio"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
      </Head>

      <main>
        <div id="intro" className="h-screen relative">
          <div 
            style={{
              backgroundImage: "url('./macbook.jpg')" ,
              height: '100vh',
              backgroundSize: "cover",
              backgroundPosition: 'top',
              backgroundRepeat: 'no-repeat',  
              backgroundAttachment: 'fixed'
            }}
            className="relative"
          >
            <h1 id="introText" className="opacity-1 text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 처절할 정도로 <br /> 노력했던 순간들.</h1>
            <h1 id="introText2" className="opacity-0 text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 다시 일어나기 <br />힘들었던 순간들.</h1>
            {/* <h1 id="introText3" className="opacity-0 text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 당신도 있었나요?</h1> */}
          </div>
        </div>

        <div id="blank"  style={{width: '100%', height: "1000px"}} className="bg-black"></div>

        <section style={{height: "110vh" }} className="bg-white px-20 flex justify-center items-center">
          <h1 className="text-black text-5xl lg:text-6xl xl:text-7xl xl:font-bold  text-center"> 
            그 순간들을 돌이켜보니 <br/>
            바로 그것이 <br /> 나를 발전시키는 것임을 깨달았습니다.
          </h1>
        </section>

        <section className="w-screen">
          <div 
            style={{
              opacity: .8,
              backgroundImage: "url('./home.png')" ,
              height: 500,
              backgroundSize: "cover",
              backgroundRepeat: 'no-repeat',  
              backgroundAttachment: 'fixed'
            }}
            className="relative"
          >
            
          </div>
        </section>

        <section style={{height: "80vh" }} className="px-20 bg-white flex justify-end items-center">
          <h1 data-aos="fade-left" className="opacity-0 text-black text-5xl lg:text-6xl xl:text-7xl xl:font-bold  text-center"> 
            당면한 문제를 해결했을 때 <br /> 그 <strong style={{color: "red"}}>짜릿함</strong>이 매일 아침 <br/>
            내가 일어나는 원동력입니다.
          </h1>
        </section>


        <section style={{height: "100vh" }} className="bg-white px-20 flex justify-center items-center">
          <h1 data-aos="fade-up" className="opacity-0 text-black text-5xl lg:text-6xl xl:text-7xl xl:font-bold  text-center"> 
            그리고 이제는. 공동체의 일원으로서 <br/>
            그 <strong style={{color: "red"}}>짜릿함</strong>을 이어나가고자 합니다.
          </h1>
        </section>

        {/* Dedication 1 */}
        <section style={{height: "100vh"}} className="bg-white relative px-5 lg:px-24 xl:px-52  md:px-32 sm:px-5">
          <div>
            <h1 data-aos="fade-right" className="opacity-0 text-black text-7xl font-bold  absolute top-1/4 text-center"> 
              Dedication - CS
            </h1>
            <p data-aos="fade-right" className="opacity-0 text-black text-sm font-bold  absolute top-1/4 mt-20">나를 큰폭으로 성장시켜주었던 전공 과제들 </p>
          </div>
          <div className="absolute top-1/2 ">
            <SwiperCS />
          </div>
        </section>


        <div style={{height: '150px'}}></div>

        {/* Dedication 2 */}
        <section style={{height: "100vh"}} className="bg-white relative px-5 lg:px-24 xl:px-52  md:px-32 sm:px-5">
          <div>
            <h1 data-aos="fade-right" className="opacity-0 text-black text-7xl font-bold  absolute top-1/4 text-center"> 
              Dedication - CS
            </h1>
            <p data-aos="fade-right" className="opacity-0 text-black text-sm font-bold  absolute top-1/4 mt-20">나를 큰폭으로 성장시켜주었던 전공 과제들 </p>
          </div>
          <div className="absolute top-1/2 ">
            <SwiperProject />
          </div>
        </section>

            
      </main>
    
      <div className="h-80"></div>
      {/* footer */}
      <footer className="flex flex-row h-32 items-center bg-white ">
        <div className="w-32 mx-auto flex justify-evenly">
          <a href="https://github.com/2donny">
            <Images 
              src="/github.svg"
              width={30}
              height={30}
            />
          </a>
          <a href="https://2donny-develog.vercel.app/">
            <Images 
              src="/blog.png"
              width={30}
              height={30}
            />
          </a>
        </div>
      </footer>
    </Layout>
  )
}