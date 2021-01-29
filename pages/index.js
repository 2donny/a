import React, { useState, useEffect, useRef, useReducer } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';
import { Power3, TweenMax  } from 'gsap/dist/gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MacImg from '../public/macbook.jpg';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({
  toggleActions: "restart pause resume none"
})


export default function Home() {
  const introText1 = useRef(null);
  const imgRef  = useRef(null);

  
  useEffect(() => {

    // gsap
    let tl = gsap.timeline();
    
    tl.to("#intro", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        pin: true,
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
        pin: true,
        scrub: true,
        toggleActions: "restart pause reverse pause",
        markers: true
      },
      opacity: 0,
      duration: 2
    })
    .to("#introText2", {
      scrollTrigger: {
        trigger: "#intro",
        start: "top top",
        pin: true,
        scrub: true,
        toggleActions: "restart pause reverse pause",
        markers: true
      },
      opacity: 1,
      duration: 5
    })
    
    // AOS
    Aos.init({ offset: 100, duration: 1500,});


    // TWEEN
    TweenMax.to(introText1.current, 1.2, {
      opacity: 1,
      y: -10,
      ease: Power3.easeIn
    });

  }, []);

  return (
    <Layout>
      <Head>
        <title>Portfolio, Dedication</title>
        <meta name="description" content="Front-end Developer's Portfolio"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden">
        <div id="intro" className="w-screen h-screen relative bg-black">
          <h1 id="introText" className="opacity-1 text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 처절할 정도로 노력했던 순간들.</h1>
          <h1 id="introText2" className="opacity-0 text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 다시 일어나기 힘들었던 순간들.</h1>
          <img 
            id="introImg"
            ref={imgRef}
            alt="intro" 
            src="macbook.jpg" 
            className="w-full h-full object-cover"/>
        </div>

        <section style={{height: "100vh" }} className="bg-white relative px-20">
          <h1 data-aos="fade-right" className="opacity-0 text-black text-5xl sm:text-6xl  xl:text-7xl  absolute top-1/2"> 
            그 순간들을 돌이켜보니 <br/>
            바로 그것이 <br /> 나를 발전시키는 것임을 깨달았습니다.
          </h1>
        </section>

        <section style={{height: "100vh" }} className="bg-white relative px-20">
          <h1 data-aos="fade-left" className="opacity-0 text-black text-5xl sm:text-6xl  xl:text-7xl  absolute top-1/4 md:left-1/2 xl:left-1/2"> 
            당면한 문제를 해결했을 때 <br /> 그 <strong style={{color: "red"}}>짜릿함</strong>이 매일 아침 <br/>
            나를 일어나게합니다.
          </h1>
        </section>

        <section className="w-screen">
          <div 
          style={{
            backgroundImage: "url('./home.png')" ,
            height: 1000,
            backgroundSize: "cover",
            backgroundRepeat: 'no-repeat',  
            backgroundAttachment: 'fixed'
          }}>
          </div>
        </section>

        <section style={{height: "100vh" }} className="bg-white relative px-20">
          <h1 data-aos="fade-up" className="opacity-0 text-black text-7xl  absolute top-1/2"> 
            이제는 개인이 아닌 공동체, 사회의 일원으로 이 매일 아침 <br/>
            <strong style={{color: "red"}}>짜릿함</strong>을 이어나가고자 합니다.
          </h1>
        </section>

      </main>
    
      <footer className="h-12">
        footer 영역
      </footer>
    </Layout>
  )
}