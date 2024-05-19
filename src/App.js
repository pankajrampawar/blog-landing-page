import React from 'react';
import logo from './images/logo.svg';
import menuIcon from "./images/icon-hamburger.svg";
import laptopImageMobile from './images/illustration-laptop-mobile.svg';
import mobileImage from './images/illustration-phones.svg';
import illustrationDesktop from './images/illustration-editor-desktop.svg'
import illustration from './images/illustration-editor-mobile.svg';
import crossMark from './images/icon-close.svg';
import downArrow from './images/icon-arrow-dark.svg';
import downArrowLight from './images/icon-arrow-light.svg'
import laptopImageDesktop from './images/illustration-laptop-desktop.svg';




function App() {

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [isDrawerDetailOpen1, setIsDrawerDetailOpen1] = React.useState(false);  
  const [isDrawerDetailOpen2, setIsDrawerDetailOpen2] = React.useState(false);
  const [isDrawerDetailOpen3, setIsDrawerDetailOpen3] = React.useState(false);
  
  const overlayStyle = isDrawerOpen ? 
  {
    display: 'block',
    position: 'fixed',
    top: '120px',
    left: '0px',
    width: '100vw',
    color: 'hsl(208, 49%, 24%)',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1',
    padding: '20px'
  } : {
    display: 'none'
  };

const downArrowLight1 = isDrawerDetailOpen1 ? {display: 'none'} : {display : 'block'};
const downArrowLight2 = isDrawerDetailOpen2 ? {display: 'none'} : {display : 'block'};
const downArrowLight3 = isDrawerDetailOpen3 ? {display: 'none'} : {display : 'block'};
const upArrowLight2 = isDrawerDetailOpen2 ? {display: 'block'} : {display: 'none'};
const upArrowLight1 = isDrawerDetailOpen1 ? {display: 'block'} : {display: 'none'};
const upArrowLight3 = isDrawerDetailOpen3 ? {display: 'block'} : {display: 'none'};

const downArrow1 = isDrawerDetailOpen1 ? {display: 'none'} : {display: 'block'} ; 
const downArrow2 = isDrawerDetailOpen2 ? {display: 'none'} : {display: 'block'} ; 
const downArrow3 = isDrawerDetailOpen3 ? {display: 'none'} : {display: 'block'} ; 
const upArrow1 = isDrawerDetailOpen1 ? {display: 'block'} : {display: 'none'};
const upArrow2 = isDrawerDetailOpen2 ? {display: 'block'} : {display: 'none'};
const upArrow3 = isDrawerDetailOpen3 ? {display: 'block'} : {display: 'none'};

const drawerDetail1 = isDrawerDetailOpen1 ? {} : {display: 'none'};
const drawerDetail2 = isDrawerDetailOpen2 ? {} : {display: 'none'};
const drawerDetail3 = isDrawerDetailOpen3 ? {} : {display: 'none'};

const windowWidth = window.innerWidth;

const productStyle = isDrawerDetailOpen1 ? {color: windowWidth > 640 ? 'white' : 'gray'} : {};
const companyStyle = isDrawerDetailOpen2 ? {color: windowWidth > 640 ? 'white' : 'gray'} : {};
const connectStyle = isDrawerDetailOpen3 ? {color: windowWidth > 640 ? 'white' : 'gray'} : {};

const handleDownArrow1 = ()=>{
  setIsDrawerDetailOpen1((prev)=>!prev);
  setIsDrawerDetailOpen2(false);
  setIsDrawerDetailOpen3(false);
}

const handleDownArrow2 = ()=>{
  setIsDrawerDetailOpen2(prev=>!prev);
  setIsDrawerDetailOpen1(false);
  setIsDrawerDetailOpen3(false);

};

const handleDownArrow3 = ()=>{
  setIsDrawerDetailOpen3(prev=>!prev);
  setIsDrawerDetailOpen1(false);
  setIsDrawerDetailOpen2(false);
};

  const Drawer = () => {
    return (
      <div className='drawer absolute bg-white w-11/12 h-full flex flex-col gap-5 items-center text-center font-semibold sm:bg-transparent sm:flex-row sm:h-fit sm:w-fit sm:bg-transparent sm:relative sm:text-white'>
        <div className='mt-10 sm:mt-0'>
          <div className='flex gap-1 justify-center'>
            <span className='text-xl font-bold hover:cursor-pointer sm:hover:underline hover:text-white sm:text-gray-200' style={productStyle} onClick={handleDownArrow1}>
              Product
            </span>
            <span className='flex items-center'>
              <img src={downArrow} alt='down arrow' onClick={handleDownArrow1} style={downArrow1}/>
              <img src={downArrow} alt='up arrow' onClick={handleDownArrow1} className='rotate-180' style={upArrow1}/>
              <img src={downArrowLight} alt='down arrow' onClick={handleDownArrow1} className='hidden sm:block' style={downArrowLight1}/>
              <img src={downArrowLight} alt='down arrow' onClick={handleDownArrow1} className='hidden sm:block rotate-180' style={upArrowLight1}/>
            </span>
          </div>
          <div className='flex flex-col gap-2 bg-gray-200 text-gray-500 w-80 mt-3 p-4 sm:absolute sm:text-left sm:w-fit sm:py-4 sm:bg-white' style={drawerDetail1}>
          <span className='hover:cursor-pointer hover:text-gray-700'>Overview</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Pricing</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Marketplace</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Features</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Integrations</span>
          </div>
        </div>
        <div>
          <div className='flex gap-1 justify-center'>
            <span className='text-xl font-bold hover:cursor-pointer sm:hover:underline sm:hover:text-white sm:text-gray-200' style={companyStyle} onClick={handleDownArrow2} >
              Company
            </span>
            <span className='flex items-center'>
              <img src={downArrow} alt='down arrow' onClick={handleDownArrow2} style={downArrow2}/>
              <img src={downArrow} alt='up arrow' className='rotate-180' onClick={handleDownArrow2} style={upArrow2}/>
              <img src={downArrowLight} alt='down arrow' className='hidden sm:block' onClick={handleDownArrow2} style={downArrowLight2}/>
              <img src={downArrowLight} alt='down arrow' className='hidden sm:block rotate-180' onClick={handleDownArrow2} style={upArrowLight2}/>
            </span>
          </div>
          <div className='flex flex-col gap-2 bg-gray-200 text-gray-500 w-80 mt-3 p-4 sm:absolute sm:text-left sm:w-fit sm:py-4 sm:bg-white' style={drawerDetail2}>
          <span className='hover:cursor-pointer hover:text-gray-700'>About</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Team</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Blog</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Careers</span>
          </div>
        </div>
        <div>
          <div className='flex gap-1 justify-center'>
          <span className='text-xl font-bold hover:cursor-pointer sm:hover:underline sm:hover:text-white sm:text-gray-200' style={connectStyle} onClick={handleDownArrow3} >
            Connect
          </span>
          <span className='flex items-center'>
            <img src={downArrow} alt='down arrow' onClick={handleDownArrow3} style={downArrow3}/>
            <img src={downArrow} alt='up arrow' className='rotate-180' onClick={handleDownArrow3} style={upArrow3}/>
            <img src={downArrowLight} alt='down arrow' className='hidden sm:block' onClick={handleDownArrow3} style={downArrowLight3} />
            <img src={downArrowLight} alt='down arrow' className='hidden sm:block rotate-180' onClick={handleDownArrow3} style={upArrowLight3} />
          </span>
          </div>
          <div className='flex flex-col gap-2 bg-gray-200 text-gray-500 w-80 mt-3 p-4 sm:absolute sm:w-fit sm:py-4 sm:text-left sm:bg-white' style={drawerDetail3}>
          <span className='hover:cursor-pointer hover:text-gray-700'>Contact</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>Newsletter</span>
          <span className='hover:cursor-pointer hover:text-gray-700'>LinkedIn</span>
          </div>
        </div>
        <div className='flex flex-col gap-4 sm:gap-2 border-t-2 w-80 pt-4 items-center sm:flex-row sm:border-none sm:p-0 sm:items-center xl:ml-96 lg:ml-54' >
          <button className='text-xl hover:bg-red hover:text-white w-1/2 h-10 sm:h-full sm:w-full rounded-2xl sm:hover:underline'>
            Login
          </button>
          <button className='text-xl bg-red-300 hover:text-gray-700  w-1/2 h-10 sm:h-full sm:w-full rounded-2xl text-white sm:bg-white sm:text-red-400 sm:hover:bg-transparent sm:hover:text-white sm:py-1 sm:hover:bg-red-400'>
            Sign Up
          </button>
        </div>
      </div>
    )
  }
  
  const MenuDrawer = ()=>{
   return (
   <div className='overlay max-[600px]:hidden' style={overlayStyle} >
        <Drawer></Drawer>
    </div>
   );
  };

const menuIconStyle = isDrawerOpen ? {display: 'none'} : {display: 'block'};
const crossMarkStyle = isDrawerOpen ? {display: 'block'} : {display: 'none'};

const handleClick = ()=>{
  setIsDrawerOpen((state)=>!state);
  document.body.classList.toggle('no-scroll', !isDrawerOpen)
}
  
  return (

    <div className="App w-full h-screen relative">
        
        <div className=' mobile-intro bg-gradient-to-b from-top to-bottom p-6 h-4/5 rounded-bl-ic '>
          
          <nav className='flex justify-between mt-6 sm:justify-start sm:gap-6 sm:items-center lg:ml-20 sm:relative'>
            <img className="" src={logo} alt='logo'/>
            <div onClick={handleClick} style={menuIconStyle}><img src={menuIcon} alt='menu icon' className='sm:hidden md:hidden lg:hidden'/></div>
            <div onClick={handleClick} style={crossMarkStyle} ><img src={crossMark}/></div>
            <div className='hidden sm:block'>
              <Drawer></Drawer>
            </div>
          </nav>
          <div className='sm:hidden'>
          <MenuDrawer></MenuDrawer>
          </div>     
          <div className="flex flex-col text-white text-center mt-32 gap-6">
            <h1 className="text-intro-head font-bold">A modern publishing platform</h1>
            <p className="i-c-content-subetext text-subtext ">grow your audience and build your online brand</p>
            <div className="buttons flex gap-6 justify-center mt-10">
              <button className='bg-white text-red-500 font-bold w-2/5 justify-center items-center rounded-3xl h-12 hover:text-white hover:bg-transparent hover:border md:w-1/5 lg:w-1/5'>Start Free</button>
              <button className='border border-white font-bold w-2/5 justify-center items-center rounded-3xl hover:text-red-500 hover:bg-white md:w-1/5 lg:w-1/5'>Learn More</button>
            </div>
          </div>

        </div>
        
        <div className='flex flex-col mt-28 gap-8 sm:hidden'>
            <span className='text-center text-3xl text-headings font-bold'>Designed for the future</span>
            <img className='mt-6'src={illustration}/>
            <span className='text-center text-3xl text-headings font-bold px-6 pt-4'>Introducing and extensible editor</span>
            <p className='text-center px-8  text-dark-greyish-blue text-xl'>Blogr features an exceedingly intutive interface which lets you focus on one thing:
              creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds
              such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add to functionality 
              or change the looks of a blog.
            </p>
            <span className='text-center text-3xl text-headings font-bold px-4 pt-4'>Robust content management</span>
            <p className='text-center px-10 text-dark-greyish-blue text-xl'>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding
              customized categories, sections, format or flow. With this functionality you are in full control.
            </p>
        </div>

        <div className='hidden  sm:flex flex-col gap-10 relative mt-40 first-card'>
        <span className='text-center text-3xl text-headings font-bold'>Designed for the future</span>
        <div className='w-1/2 flex flex-col gap-8 ml-10'>
          <div className='flex flex-col items-center gap-6'>
            <span className=' text-2xl text-headings font-bold px-6 pt-4'>Introducing and extensible editor</span>
            <p className='text-left px-8  text-dark-greyish-blue text-l'>Blogr features an exceedingly intutive interface which lets you focus on one thing:
              creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds
              such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add to functionality 
              or change the looks of a blog.
            </p>
          </div>
          <div className='flex flex-col gap-6 items-center'>
          <span className='text-2xl text-headings font-bold px-4 pt-4'>Robust content management</span>
            <p className='text-left px-10 text-dark-greyish-blue text-l'>
              Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding
              customized categories, sections, format or flow. With this functionality you are in full control.
            </p>
          </div>
        </div>
        </div>
        
        <div className='iii-c sm:hidden bg-gradient-to-b from-top1 to-bottom1 relative mt-64 rounded-bl-ic rounded-tr-ic'>
          <img src={mobileImage} className='absolute -top-44 '/>
          <p className="text-center sm:text-5xl px-10 font-bold text-white relative top-64">State of Art Infrastructure</p>
          <p className='text-center mt-72 pb-28 text-white text-xl px-10'>With reliability and speed in mind. Worldwide data centers provide the backbone for ultra-fast connectivity.
            This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </p>
        </div>

        <div className='hidden sm:flex items-center mt-64 py-24 xl:px-24 relative bg-gradient-to-b from-top1 to-bottom1 '>
          <img src={mobileImage} className='absolute' alt='mobileImage' />
          <div className='ml-auto xl:w-1/2 md:w-1/3 pr-10'>
          <p className='text-white text-2xl sm:text-3xl'>State of Art Infrastructure</p>
          <p className='text-gray-300 '>With reliability and speed in mind. Worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
          </div>
        </div>
        
        <div className='flex flex-col gap-6 text-center mt-20 text-headings sm:hidden'>
            <img src={laptopImageMobile} alt='laptop'/>
            <span className='text-3xl font-bold'>Free, Open, Simple</span>
            <p className='text-xl  px-10'>Blogr is a free and open source application backed by community of helpful developers. It supports feature such as code syntax highlighting, RSS feeds social media integration, third party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.
            </p>
            <span className='text-3xl font-bold mt-4'>Powerful tooling</span>
            <p className="text-xl px-10">Batteries included. We built a simple and straight forward CLI that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
        </div>

        <div className='sm:flex justify-center items-center mt-56 hidden text-xl'>
          <img src={laptopImageDesktop} alt='laptop' className='w-3/4 -ml-80'/>
          <div className='gap-8 flex flex-col w-1/3'>
            <div className='flex flex-col gap-4'>
              <span className='text-3xl font-semibold'>Free, Open, Simple</span>
              <p className='text-l text-gray-500'>Blogr is a free and open source application backed by community of helpful developers. It supports feature such as code syntax highlighting, RSS feeds social media integration, third party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and relatively easy to learn.</p>
            </div>
            <div className='flex flex-col gap-4'>
              <span className='text-3xl font-semibold'>Powerful tooling</span>
              <p className='text-l text-gray-600'>Batteries included. We built a simple and straight forward CLI that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
            </div>
          </div>
        </div>
        
        <div className='fotter flex flex-col gap-8 items-center bg-fotter-bg mt-36 rounded-tr-ic py-10 text-center
          sm:flex-row sm:justify-evenly sm:items-start sm:py-20
        '>
          <img src={logo} alt='blogr logo'className='sm:hidden'/>
          <div className='hidden sm:flex '><img src={logo} alt='blog logo'/></div>
          <div className='flex flex-col gap-4'>
            <span className='fotter-title text-white text-xl'>Product</span>
            <ul className='flex flex-col gap-2'>
              <li className='text-fotter-text fotter-li'>Overview</li>
              <li className='text-fotter-text fotter-li'>Pricing</li>
              <li className='text-fotter-text fotter-li'>Marketplace</li>
              <li className='text-fotter-text fotter-li'>Features</li>
              <li className='text-fotter-text fotter-li'>Integrations</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4'>
            <span className='fotter-title text-white text-xl'>Company</span>
            <ul className='flex flex-col gap-2'>
            <li className='text-fotter-text fotter-li'>About</li>
            <li className='text-fotter-text fotter-li'>Team</li>
            <li className='text-fotter-text fotter-li'>Blog</li>
            <li className='text-fotter-text fotter-li'>Careers</li>
            </ul>
          </div>
          <div className='flex flex-col gap-4 mb-8'>
            <span className='fotter-title text-white  text-xl'>Connect</span>
            <ul className='flex flex-col gap-2'>
              <li className='text-fotter-text fotter-li'>Contact</li>
              <li className='text-fotter-text fotter-li'>Newsletter</li>
              <li className='text-fotter-text fotter-li'>LinkedIn</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default App;
