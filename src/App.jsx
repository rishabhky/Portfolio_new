import { useState } from 'react';
import { useEffect, } from 'react';
import './App.css';
import nameImage from './assets/name.png';
import sevPath from './assets/seventify.png';
import cloverPath from './assets/clover.png';
import menuPath from './assets/text.png';
import logoPath from '/static/R.png';
import mailPath from './assets/mail.png';
import gitPath from './assets/git.png';
import instaPath from './assets/insta.png';
import upPath from './assets/up.png';
import linkPath from './assets/business.png';
import vmgPath from './assets/HomeHarbor.png';
import agriPath from './assets/Slice.png';
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
  
  //for the list containers
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const [opacity1, setOpacity1] = useState(0);
  const [opacity2, setOpacity2] = useState(0);
  
  useEffect(() => {
    setOpacity1(isOpen1 ? 1 : 0);
  }, [isOpen1]);
  
  useEffect(() => {
    setOpacity2(isOpen2 ? 1 : 0);
  }, [isOpen2]);


  return (
   
    <div className="lenis lenis-smooth relative flex flex-col justify-start items-center"  style={{ backgroundColor: pageBackgroundColor, scrollBehavior: 'smooth',transition: 'background-color 1s ease' }}>
      <div id="navbar" className={`fixed z-40 w-3/4 p-3 bg-gray-500 bg-opacity-10 m-5 rounded-full h-fit flex flex-row justify-around items-center `} >
        <div className="logo">
          <a href='#'><h1 className="text-3xl font-cabinet font-semibold">Rishabh</h1></a>
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
            <a href="#projects" className="text-xl font-semibold font-cabinet">
              Projects
            </a>
          </li>
          
        </ul>
        <button id="button-contact" className="bg-gray-300 rounded-full p-2 hover:bg-transparent">
          <a
            href="#contactme"
            className={`text-xl font-cabinet text-gray-700 font-semibold p-4  ${pageBackgroundColor=='black' ? 'hover:text-white' : 'hover:text-gray-700'}`}
          >
            Contact me
          </a>
        </button>
        
        <div id="icon"  class="flex justify-end items-center">
            <Hamburger toggled={isOpen} toggle={toggleNavbar} color='gray' rounded duration={0.8}/>
        </div>
      </div>

      
      {isOpen && (
      <div class={`burger ${isOpen ? 'show' : 'hide'} ${pageBackgroundColor=='black' ? 'bg-gray-50' : 'bg-[#171717]'}`} style={{ top: '0', left: '0' }}>
        <img src={menuPath} alt="menu" class="opacity-60" />
        <div className={`flex flex-col items-end p-4 `}>
          <a href='#about' className={`sm:text-base font-medium ${pageBackgroundColor=='black' ? 'hover:text-gray-800 hover:bg-slate-800' : 'hover:text-gray-200 hover:bg-gray-300'} hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl max-[678px]:text-2xl font-sans text-gray-400 py-2`}>About</a>
          <a href='#skills' className={`sm:text-base font-medium ${pageBackgroundColor=='black' ? 'hover:text-gray-800 hover:bg-slate-800' : 'hover:text-gray-200 hover:bg-gray-300'} hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl max-[678px]:text-2xl font-sans text-gray-400 py-2`}>Skill</a>
          <a href='#projects' className={`sm:text-base font-medium ${pageBackgroundColor=='black' ? 'hover:text-gray-800 hover:bg-slate-800' : 'hover:text-gray-200 hover:bg-gray-300'} hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl max-[678px]:text-2xl font-sans text-gray-400 py-2`}>Projects</a>
          <a href='#contactme' className={`sm:text-base font-medium ${pageBackgroundColor=='black' ? 'hover:text-gray-800 hover:bg-slate-800' : 'hover:text-gray-200 hover:bg-gray-300'} hover:bg-opacity-10 hover:p-3 hover:px-10 hover:rounded-full text-3xl max-[678px]:text-2xl font-sans text-gray-400 py-2`}>Contact</a>
        </div>
      </div>
      )}

      

      <body className="static z-0 h-full w-full flex flex-col justify-center items-center">
        <div className="min-h-screen w-full flex flex-col justify-center items-center">
          <div className="z-10 absolute  max-[678px]:w-1/2 max-[678px]:h-[10%] sm:w-1/2 sm:h-[10%] md:w-1/2 md:h-[10%]  lg:h-[10%] xl:w-1/2 xl:h-[9%] h-1/3 flex justify-center items-center opacity-70">
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
        <div id="description-section" className="h-screen w-4/5 py-20 flex flex-col justify-center items-center font-cabinet opacity-80 md:text-left text-center  text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-7xl " style={{
         lineHeight: window.innerWidth <= 640 ? "1" : window.innerWidth >= 1700 ? "1.4" : "1"
        }}>
          a Mobile app Developer and a passionate Front-End Web Developer. With a creative mind and a love for turning ideas into seamless digital experiences, I'm here to showcase my journey in the world of web and mobile development.
        </div>
        <div id="skills" className=" h-screen  w-11/12  flex flex-col justify-center items-center font-sans md:text-left text-center text-5xl sm:text-5xl md:text-7xl lg:text-7xl xl:text-7xl  ">
          <div className="flex flex-row pt-[10%]">   
              <img src={cloverPath} alt="clover" className='h-20 mr-[5%]'/>
              <p className='text-white max-[678px]:text-6xl md:text-8xl sm:text-6xl lg:text-8xl xl:text8xl font-cabinet font-semibold opacity-75 '>Skills</p>
            </div>
          <div className='flex flex-col md:flex-row  items-center w-full'>
            <div className='flex flex-col md:flex-col justify-between  w-5/6'>
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
                <div id="list" className="flex flex-row justify-between items-center sm:px-5 md:px-0">
                  <div className='text-white font-sans font-black opacity-70 text-xl md:text-3xl py-2 list-disc line-after mr-5'>
                    Mobile App Development 
                  </div>
                  <Hamburger color='gray' rounded duration={0.8} size={18} toggled={isOpen1} toggle={setIsOpen1} />
                </div>
                {isOpen1 && <div style={{ opacity: opacity1, transition: 'opacity 2s' }} className='text-white py-5 font-cabinet text-lg md:text-xl font-semibold opacity-75 text-left'>As a mobile app developer, I specialize in Flutter, React Native, and GetX for efficient cross-platform development. I've integrated Firebase into two projects, demonstrating expertise in real-time databases and authentication. My focus is on delivering intuitive UIs and responsive layouts for a seamless user experience.</div>}
                <div id="list" className="flex flex-row justify-between items-center mt-5 sm:px-5 md:px-0">
                  <div className='text-white font-sans font-black opacity-70 text-xl md:text-3xl py-2 list-disc line-after mr-5'>
                    Front-end Web Development
                  </div>
                  <Hamburger color='gray' rounded duration={0.8} size={18} toggled={isOpen2} toggle={setIsOpen2} />
                </div>
                {isOpen2 && <div style={{ opacity: opacity2, transition: 'opacity 2s' }} className='text-white py-5 font-cabinet  text-base md:text-xl font-semibold opacity-75 text-left '>As a front-end web developer, I specialize in crafting dynamic and responsive user interfaces. This site itself is built using React with Vite and Tailwind CSS, showcasing my proficiency in these technologies. Recently, I've ventured into Svelte and thoroughly enjoyed the development experience. While adept at JavaScript, my commitment to continuous learning drives me to deepen my understanding further. Proficient in HTML and CSS, I bring a keen eye for design and functionality to create engaging web experiences.</div>}
              </li>
            </div>  

          </div>
          
        </div>

        <div id="projects" className='max-[768px]:pt-[30%] py-[15%] px-[5%] flex flex-col  justify-start items-center'>
            <div className="flex flex-row ">   
              <img src={cloverPath} alt="clover" className='h-20 mr-[5%]'/>
              <p className='text-white max-[678px]:text-6xl md:text-8xl sm:text-6xl lg:text-8xl xl:text8xl font-cabinet font-semibold opacity-75'>Projects</p>
            </div>
            <div className="pt-20 flex sm:flex-col  max-[1100px]:flex-col lg:flex-col lg:items-center xl:flex-row sm:items-center max-[645px]:items-center">
                <img id='sev' src={sevPath} alt="sev" className='min-[900px]:w-[55%] rounded-[2%] shadow-sm sm:items-center '/>
                <div className="flex flex-col justify-start items-start min-[1200px]:pl-[4%] lg:pt-10 md:pt-10 sm:pt-10 max-[678px]:pt-10">
                  <p className='text-white text-5xl max-[678px]:text-4xl font-cabinet font-extrabold opacity-90'>Se✓entify</p>
                  <p className='text-white text-2xl font-cabinet font-bold opacity-85 py-3'>Attendance Tracking and Task Management App 📅</p>
                  <p className='text-white text-2xl max-[678px]:text-xl font-cabinet font-semibold opacity-60'>Seventify is a comprehensive mobile application designed to streamline attendance tracking and task management for students of all levels. Developed using the Flutter framework and integrated with Firebase for real-time data management, Seventify offers a user-friendly and efficient solution to enhance the academic and organizational experience.</p>
                  <p className='text-white text-2xl font-cabinet font-bold opacity-85 py-3'>Soon on Play Store !</p>
                  <p className='text-white text-2xl max-[678px]:text-xl font-cabinet font-semibold opacity-60'>Seventify will soon be available for download on the Google Play Store, offering convenient access for Android users.</p>
                </div>
            </div>  

            <div className="pt-20 flex sm:flex-col-reverse  max-[1100px]:flex-col-reverse lg:flex-col-reverse lg:items-center xl:flex-row sm:items-center max-[645px]:items-center">
                <div className="flex flex-col justify-start items-start pr-[4%] lg:pt-10 md:pt-10 sm:pt-10 max-[678px]:pt-10">
                  <p className='text-white text-5xl max-[678px]:text-4xl font-cabinet font-extrabold opacity-90'>Home Harbor 🏠</p>
                  <p className='text-white text-2xl font-cabinet font-bold opacity-85 py-3'>Society Management App</p>
                  <p className='text-white text-2xl max-[678px]:text-xl font-cabinet font-semibold opacity-60'>Home Harbor is a robust mobile application developed to streamline the management of residential societies. Built using the Flutter framework and seamlessly integrated with Firebase, this app provides an all-in-one solution for society members to handle maintenance payments, stay informed through a notice board, and engage in constructive communication via a dedicated chat feature.</p>
                  <span class="flex flex-row justify-center items-center md:p-5 pt-5">
                      <a href="https://github.com/rishabhky/society_app">
                          <img src={gitPath} alt="github" class="h-10 mr-5 rounded-xl"/>
                      </a>
                      <a href="https://www.linkedin.com/posts/rishabh-yadav-625559275_flutterdevelopment-firebase-appdevelopment-activity-7121526623585140736-UzGZ?utm_source=share&utm_medium=member_desktop">
                          <img src={linkPath} alt="linkdln" class="h-12 rounded-xl"/>
                      </a>
                  </span>
                </div>
                <img id='sev' src={vmgPath} alt="sev" className='min-[900px]:w-[55%] rounded-[2%] shadow-sm'/>
            </div>  

            <div className="flex sm:flex-col  max-[1100px]:flex-col lg:flex-col lg:items-center xl:flex-row sm:items-center max-[645px]:items-center">
                <img id='sev' src={agriPath} alt="sev" className='min-[900px]:w-[50%] rounded-[2%] shadow-sm '/>
                <div className="flex flex-col justify-start items-start pl-[4%] lg:pt-10 md:pt-10 sm:pt-10 max-[678px]:pt-10">
                  <p className='text-white text-5xl max-[678px]:text-4xl font-cabinet font-extrabold opacity-90 pb-3'>Agrishaala 🌾</p>
                  <p className='text-white text-2xl max-[678px]:text-xl font-cabinet font-semibold opacity-60 pb-3'>Agrishaala, an innovative solution stemming from the Tech Solistice Hackathon, transforms agriculture by leveraging advanced image processing with Python OpenCV. This technology accurately detects plant diseases and recommends suitable crops based on soil type, ensuring precise disease identification for early intervention and enhanced crop yield.</p>
                  <p className='text-white text-2xl max-[678px]:text-xl font-cabinet font-semibold opacity-60 pb-3'>The user-friendly Agrishaala platform, presented through a well-designed website using HTML, CSS, and JavaScript, serves as an intuitive interface. This facilitates knowledge-sharing among farmers, creating a supportive community where they can exchange insights and provide mutual assistance in their agricultural endeavors.</p>
 
                  <span class="flex flex-row justify-center items-center md:p-5 pt-5">
                      <a href="https://github.com/vedantRaikar/plantdisease">
                          <img src={gitPath} alt="github" class="h-10 mr-5 rounded-xl"/>
                      </a>
                      <a href="https://www.linkedin.com/feed/update/urn:li:activity:7085146659248115712?utm_source=share&utm_medium=member_desktop">
                          <img src={linkPath} alt="linkdln" class="h-12 rounded-xl"/>
                      </a>
                  </span>
                </div>
            </div>  
        </div>

        <div id="contactme" className="w-[95%]  px-[5%] flex flex-col  justify-center items-center">
            <div className="w-[100%] flex flex-row border-b border-gray-400 justify-center  pb-10">   
              <img src={cloverPath} alt="clover" className='h-20 mr-[2%]'/>
              <p className='text-white max-[678px]:text-6xl md:text-8xl sm:text-6xl lg:text-8xl xl:text8xl font-cabinet font-semibold opacity-75'>Contact</p>
            </div>
            <div className="w-[100%] pt-[6%] pb-[5%] min-[1100px]:justify-between flex sm:flex-col max-[1100px]:flex-col lg:flex-row lg:items-center xl:flex-row sm:items-center max-[645px]:items-center">
                <div className="flex flex-row items-center">   
                  <img src={logoPath} alt="clover" className='h-24 mr-[2%] mb-5 rounded-lg opacity-70'/>
                  <p className='text-white max-[678px]:text-6xl  md:text-8xl sm:text-6xl lg:text-8xl xl:text8xl font-cabinet font-semibold opacity-75'>ishabh</p>
                </div>
                <div className="max-[1000px]:w-[100%] min-[1001px]:w-[40%] pt-5 flex  max-[1000px]:justify-evenly lg:flex-row">
                  <nav class="list-none mb-10 min-[1100px]:mr-[20%]">
                    <p className='text-white text-5xl max-[678px]:text-4xl font-cabinet font-extrabold opacity-90 pb-3 border-b border-gray-400'>Socials</p>
                      <li className='flex flex-row justify-start items-center mt-4'>
                        <img src={linkPath} alt="link" className='h-10 mr-2'/>
                        <a href='https://www.linkedin.com/in/rishabh-yadav-625559275/' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Linkdin</a>
                      </li>
                      <li className='flex flex-row justify-start items-center mt-3'>
                        <img src={gitPath} alt="link" className='h-10 mr-2 rounded-2xl'/>
                        <a href='https://github.com/rishabhky' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Github</a>
                      </li>
                      <li className='flex flex-row justify-start items-center mt-3'>
                        <img src={mailPath} alt="link" className='h-11 mr-2'/>
                        <a href='mailto:rishabhky23@gmail.com' className="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Mail</a>
                      </li>
                      <li className='flex flex-row justify-start items-center mt-3'>
                        <img src={instaPath} alt="link" className='h-9 mr-3'/>
                        <a href='https://www.instagram.com/__rishabhhh__/' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Instagram</a>
                      </li>
                    </nav>
                  <nav class="list-none mb-10 w-fit">
                  <p className='text-white text-5xl max-[678px]:text-4xl font-cabinet font-extrabold opacity-90 border-b border-gray-400 pb-3'>Navigation</p>
                      <li className='mt-3'>
                      <a href='#description-section' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">About</a>
                      </li>
                      <li className='mt-3'>
                      <a href='#skills' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Skills</a>
                      </li>
                      <li className='mt-3'>
                      <a href='#projects' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Projects</a>
                      </li>
                      <li className='flex flex-row justify-start items-center mt-3'>
                        <img src={upPath} alt="link" className='h-9 mr-2'/>
                        <a href='#' class="text-gray-400 text-2xl font-cabinet font-semibold hover:text-gray-50">Back to top</a>
                      </li>
                    </nav>
              </div>
            </div>
            <div className="flex w-[100%] justify-center p-5 bg-white bg-opacity-5 rounded-t-xl">
                <p className='text-white text-lg max-[678px]:text-xl font-cabinet font-semibold opacity-60'>Made with 🤍 by Rishabh</p>
              </div>
        </div>  
        
      </body>
    </div>
    
  );
}

export default Layout;
