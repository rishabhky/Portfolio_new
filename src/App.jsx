import { useState } from 'react';
import { useEffect, } from 'react';
import './App.css';
import nameImage from './assets/name.png';
import Lenis from '@studio-freight/lenis'
import { gsap, ScrollTrigger } from 'gsap/all';

import Hamburger from 'hamburger-react'


// Register the plugins
gsap.registerPlugin(ScrollTrigger);

function Layout() {
  const [pageBackgroundColor, setPageBackgroundColor] = useState('transparent');
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const descriptionSection = document.getElementById('description-section');
      const scrolled = window.scrollY;
      const triggerOffset = descriptionSection.offsetTop - window.innerHeight / 2;

      if (scrolled >= triggerOffset) {
        setPageBackgroundColor('black');
        gsap.to('#description-section', {
          color: 'white',
          ease: 'power2.inOut',
          duration: 0.4,
        });
      
        gsap.to('#navbar', {
          color: 'white',
          ease: 'power2.inOut',
          duration: 0.4,
        });
      } else {
        setPageBackgroundColor('transparent');
        gsap.to('#description-section', {
          color: 'black',
          ease: 'power2.inOut',
          duration: 0.4,
        });
        
        gsap.to('#navbar', {
          color: 'black',
          ease: 'power2.inOut',
          duration: 0.4,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
    


  return (
   
    <div className="lenis lenis-smooth relative flex flex-col justify-start items-center "  style={{ backgroundColor: pageBackgroundColor, scrollBehavior: 'smooth',transition: 'background-color 1s ease' }}>
      <div id="navbar" className={`fixed z-40 w-3/4 p-3 bg-gray-500 bg-opacity-10 m-5 rounded-full h-fit flex flex-row justify-around items-center `} >
        <div className="logo">
          <h1 className="text-3xl font-cabinet font-semibold">Rishabh</h1>
        </div>
        <ul className={`w-1/2 flex flex-row justify-evenly items-center`}>
          <li>
            <a href="#description-section" className="text-xl font-semibold font-cabinet ">
              About
            </a>
          </li>
          
          <li>
            <a href="#skills" className="text-xl font-semibold font-cabinet">
              Skills
            </a>
          </li>
          <li>
            <a href="#" className="text-xl font-semibold font-cabinet">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-xl font-semibold font-cabinet">
              Contact
            </a>
          </li>
        </ul>
        <button id="button-contact" className="bg-gray-300 rounded-full p-2 hover:bg-transparent">
          <a
            href="#"
            className="text-xl font-cabinet text-gray-700 font-semibold p-4 hover:text-gray-900"
          >
            Contact me
          </a>
        </button>
        
        <div id="icon"  class="flex justify-end items-center">
            <Hamburger toggled={isOpen} toggle={toggleNavbar} color='gray' rounded duration={0.8}/>
        </div>
      </div>

      
      {isOpen && (
      <div class={`burger ${isOpen ? 'show' : 'hide'}`} style={{ top: '0', left: '0' }}>
        <img src="src\assets\text.png" alt="menu" class="opacity-60" />
        <div className="flex flex-col items-end p-4">
          <a className="font-medium hover:text-gray-200 hover:bg-slate-200 hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl font-sans text-gray-400 py-2">About</a>
          <a className="font-medium hover:text-gray-200 hover:bg-slate-200 hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl font-sans text-gray-400 py-2">Projects</a>
          <a className="font-medium hover:text-gray-200 hover:bg-slate-200 hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl font-sans text-gray-400 py-2">Skill</a>
          <a className="font-medium hover:text-gray-200 hover:bg-slate-200 hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl font-sans text-gray-400 py-2">Contact</a>
        </div>
      </div>
      )}

      

      <body className="static z-0 h-full w-full flex flex-col justify-center items-center">
        <div className="h-screen w-full flex flex-col justify-center items-center">
          <div className="z-10 absolute  max-[678px]:w-1/2 max-[678px]:h-1/5 sm:w-1/2 sm:h-1/4 md:w-1/2 md:h-1/4  lg:h-1/4 xl:w-1/2 xl:h-1/5 h-1/3 flex justify-center items-center opacity-70">
            <img src={nameImage} alt="name"  className="w-full h-full object-cover"/>
          </div>
          <div className="z-20 w-fit h-fit flex flex-col justify-center items-center ">
            <div className="flex-1 font-sans text-black opacity-80 text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl font-bold select-none text-center">
              HEY, I'M RISHABH
            </div>
            <div
              className="flex-1 font-sans text-gray-700 text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl font-bold select-none text-outline text-center"
              style={{ '--text-stroke-width': '2px' }}
            >
              HEY, I'M RISHABH
            </div>
            <div className="flex-1 font-sans text-black opacity-80 text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl font-bold select-none text-center">
              HEY, I'M RISHABH
            </div>
          </div>
        </div>
        <div id="description-section" className="h-screen w-4/5 py-20 flex flex-col justify-center items-center font-sans md:text-left text-center text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl  ">
          Mobile App Developer and a passionate Front-End Web Developer. With a creative mind and a love for turning ideas into seamless digital experiences, I'm here to showcase my journey in the world of web and mobile development.
        </div>
        <div id="skills" className="h-screen w-11/12 py-20 flex flex-col justify-center items-center font-sans md:text-left text-center text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl  ">
          
          <div className='flex flex-col md:flex-row  items-center w-full'>
            <div className='flex flex-col md:flex-col justify-between md:mt-10 w-5/6'>
              <div className='flex flex-col justify-center '>
                <p className='flex-1 font-sans  text-white opacity-80 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold select-none text-center md:text-left pt-12'>my expertises.</p>
                <p className='flex-1 font-sans text-white opacity-80 text-base md:text-xl lg:text-2xl xl:text-2xl text-center md:text-left w-full md:w-3/4 py-5'>
                Specializing in Flutter app development and front-end web technologies, I bring a focused and adept approach to building seamless cross-platform applications and crafting intuitive user interfaces.<span className='md:flex hidden'>Explore my portfolio to see the intersection of creativity and technical proficiency.</span>
                </p>
              </div>

              
              <div className='flex flex-col justify-center  mt-10'>
                  <section className='flex-1  font-sans text-white opacity-80 text-4xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl font-bold select-none text-center md:text-left'>my digital tool box.</section>
                  <p className='flex-1 font-sans text-white opacity-80 text-base md:text-xl lg:text-2xl xl:text-2xl text-center md:text-left w-full md:w-3/4 py-5 '>
                  Unlocking the full potential of my projects, I leverage a versatile set of tools that includes Flutter for dynamic mobile app development and a toolkit of front-end technologies for crafting engaging web experiences. Dive into my toolbox and discover the key instruments that power my digital journey.
                  </p>
                  {/* <p className='flex-1  font-sans text-white opacity-70 text-2xl sm:text-xl md:text-xl lg:text-2xl xl:text-2xl font-bold select-none text-center md:text-left'>Flutter . React . Svelte . ReactNative . JavaScript . HTML . CSS</p> */}
               </div>
              
            </div>
          
              <div className='flex flex-col justify-center items-center w-full mt-10 md:mt-0 md:w-1/2 '>
                <li className='list-none'>
                  <ul className='text-white font-sans font-black opacity-70 text-4xl py-2 list-disc line-after'>Mobile App Development</ul>
                  <ul className='text-white font-black font-sans text-4xl opacity-70 py-2 list-disc line-after'>Front-end Web Development</ul>
                </li>
              </div>       
          </div>
          
        </div>
      </body>
    </div>
    
  );
}

export default Layout;
