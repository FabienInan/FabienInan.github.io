import React, { useEffect, useState } from 'react'

import { ArrowDownIcon } from '@heroicons/react/20/solid';
import bread from './assets/fourth.jpg';
import croissant from './assets/fifth.jpg';
import tw from 'tailwind-styled-components';
import { useInView } from 'react-intersection-observer';

const BakeryContainer = tw.div`flex flex-col w-screen h-screen`;

const SectionContainer = tw.section`flex flex-col items-center justify-center`;

const SectionRow = tw.div`flex flex-row flex-wrap gap-16 items-center justify-center`;

const SectionText = tw.div`text-xl text-white`;

const SectionTextContrast = tw.div`text-xl text-black font-bold`;

const SectionTextSmallContrast = tw.div`text-sm text-black font-bold`;

const SectionTitle = tw.div`text-7xl text-white font-bold`;

const Section = tw.div`flex flex-col justify-center items-center w-[100%] h-[100vh] bg-cover bg-center bg-fixed`;

const ImgCard = tw.img`w-[400px] rounded-lg`;

const AnimatedContainer = tw.div`animate-bounce fixed bottom-8 right-[50vw]`;

const AnimatedArrowDown = tw(ArrowDownIcon)`w-6 h-6 fill-white z-4 m-[2px] `;

export default function Bakery() {

    const [scroll, setScroll] = useState(0);

    const [ref, inView] = useInView();

    useEffect(() => {
      const onScroll = () => setScroll(window.scrollY / window.document.documentElement.scrollHeight);
  
      window.addEventListener("scroll", onScroll);
  
      return function cleanup() {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);

  return (
    <BakeryContainer>
      <SectionContainer>
        <Section className={`bg-hero-bakery ${scroll > 0.02 ?'filter blur-sm': ''}`}>
            <SectionText>Baked in Zürich</SectionText>
            <SectionTitle>Tasty Bakery</SectionTitle>
        </Section>
      </SectionContainer>
      <SectionContainer>
        <Section className={`bg-hero-make-dough ${scroll > 0.27 ?'filter blur-sm': ''}`}>
            <SectionTitle>Knead by hand</SectionTitle>
        </Section>
      </SectionContainer>
      <SectionContainer>
        <Section className={`bg-hero-bake-bread ${scroll > 0.52 ?'filter blur-sm': ''}`}>
            <SectionTitle>Baked in a wood oven</SectionTitle>
        </Section>
      </SectionContainer>
      <SectionContainer className={`md:min-h-[100vh] m-16 md:m-0 gap-16`}>
            <SectionRow ref={ref}>
                <ImgCard src={bread} className={inView && 'animate-fadeIn'}/>
                <ImgCard src={croissant} className={inView && 'animate-fadeIn'}/>
            </SectionRow>
            <SectionTextContrast>Proudly baked with local ingredients</SectionTextContrast>
      </SectionContainer>
      <AnimatedContainer>
        <AnimatedArrowDown/>
      </AnimatedContainer>
        <SectionTextSmallContrast className='p-4'>© 2023 - Fabien Inan</SectionTextSmallContrast>
    </BakeryContainer>
  )
}
