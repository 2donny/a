import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head'
import Layout from '../components/Layout';
import { Power3, TweenMax, TimelineMax } from 'gsap/dist/gsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const introText = useRef(null);

  useEffect(() => {
    // const ctrl = ScrollMagic.Controller();
    // setCtrl(ctrl);

    TweenMax.to(introText.current, 1.2, {
      opacity: 1,
      y: -10,
      ease: Power3.easeIn
    });

    // new ScrollMagic.Scene({
    //   triggerElement: "#intro",
    //   duration: 1000,
    // }).setPin("#intro")
    //   .addTo(ctrl);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Welcome to Sejong</title>
        <meta name="description" content="세종시 명관 핫플레이스 웹 사이트. 세종시 한눈으로 봐요."/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id="intro" className="w-screen h-screen bg-black">
          <h1 ref={introText} className=" opacity-0 text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 처절할 정도로 노력했던 순간들<br/> 기억하시나요?</h1>
        </div>

        {/* <div></div> */}

        <section className="min-h-screen bg-white">
          <h1 className=" text-black text-4xl font-bold absolute">정말이지</h1>
        </section>
      </main>
    
      <footer className="h-12">
        footer 영역
      </footer>
    </Layout>
  )
}

{/* <Controller>
          <Scene duration={2000} pin>
            <div className="w-screen h-screen bg-black">
            <Scene pin>
              <Tween to={{y: '-80px'}} duration={1} stagger={{ease: Power3}} >
                <h1 ref={introText} className=" text-white text-7xl font-bold absolute top-1/3 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center"> 처절할 정도로 노력했던 순간<br/> 당신한테도 있나요?</h1>
              </Tween>
            </Scene>
            </div>
          </Scene>
        </Controller> */}