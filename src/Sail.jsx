import React, { useEffect, useState } from 'react'

import { ChevronRightIcon } from '@heroicons/react/20/solid';
import logo from './assets/logo.png';
import tw from 'tailwind-styled-components';
import { useInView } from 'react-intersection-observer';

const SailContainer = tw.div`flex flex-col w-screen h-screen`;

const SectionContainer = tw.section`flex flex-col items-center justify-center`;

const SectionText = tw.div`text-md text-black`;

const SectionTextSmall = tw.div`text-xs text-black font-bold`;

const Button = tw.button`text-orange-600 bg-transparent flex`;

const SectionTitle = tw.div`text-lg font-bold text-orange-600`;

const Section = tw.div`flex items-center w-[100%] h-[65vh] bg-cover bg-center bg-fixed`;

const Img = tw.img`rounded-lg`;

const AnimatedContainer = tw.div`animate-pulse`;

const AnimatedChevronRight = tw(ChevronRightIcon)`w-6 h-6 fill-orange-600 z-4`;

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
    <SailContainer>
      <SectionContainer>
        <Section className='bg-hero-sail'>
          <div className='pl-8 w-[70%] md:w-[50%] h-[65vh] bg-transparent bg-gradient-to-r from-stone-50 from-10% via-white mvia-40%'>
            <div className='flex flex-col items-center w-[80%] md:w-[40%] pt-4'>
              <Img className='w-[120px]' src={logo}/>
              <SectionTextSmall className='mt-32'>8th November 2023 - 11h53</SectionTextSmall>
              <SectionTitle className='w-[190px] mt-4'>Jacques Cousteau wins the 2023 edition</SectionTitle>
              <SectionText className='w-[190px] mt-4'>The french sailor won his 4th race of year at Geneva. He crossed the finish line early morning...</SectionText>
              <Button>Read
                <AnimatedContainer>
                  <AnimatedChevronRight/>
                </AnimatedContainer>
              </Button>
            </div>
          </div>
        </Section>
        <div className='flex flex-wrap w-[100%] min-h-[20vh] mb-4 md:mb-0 justify-around bg-stone-50 gap-16 md:gap-0'>
          <div className='w-[250px] h-[150px] bg-blue-400 rounded-lg mt-[-40px]'></div>
          <div className='w-[250px] h-[150px] bg-blue-400 rounded-lg mt-[-40px]'></div>
          <div className='w-[250px] h-[150px] bg-blue-400 rounded-lg mt-[-40px]'></div>
        </div>
        <div className='flex w-[100%] h-[5vh] pl-32 bg-blue-200 gap-16'>
        </div>
        <div className='flex w-[100%] h-[10vh] pl-32 bg-stone-50 gap-16'>
        </div>
      </SectionContainer>
    </SailContainer>

  )
}
