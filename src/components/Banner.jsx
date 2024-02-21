import {AiFillGithub, AiFillTwitterCircle} from 'react-icons/ai'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import img from '../assets/Profile.jpeg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Banner = () => {
useEffect(()=>{
    AOS.init(
        { easing:'ease-out-quart',
         delay: 0,
         duration:750
     })
},[1000])

    return (
    <div  className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-20 items-center'>
   <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
    <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal'>Welcome to <span className='text-fuchsia-300'>My PortFolio</span></h1>
   <p data-aos="fade-left">👋 Hello, I'm Vishal Sharma, a 22-year-old currently pursuing my Bachelor of Computer Applications degree from IGNOU, situated in the vibrant city of Delhi. Originally hailing from the culturally rich city of Agra, my journey into the realm of web development has been characterized by an unwavering dedication to mastering the craft of frontend development. Proficient in a suite of technologies including HTML, CSS, Tailwind CSS, JavaScript, and ReactJS, I am committed to leveraging my skills to create impactful digital experiences.</p>
   <div className='flex mt-8 gap-2'>
    <div className='flex items-center justify-center'>
        <div className='flex space-x-2'>
            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <AiFillGithub className="text-[30px]"/>
            </a>
            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <FaLinkedin className="text-[30px]"/>
            </a>
            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <AiFillTwitterCircle className="text-[30px]"/>
            </a>
            <a href="" className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2'>
                <FaInstagram className="text-[30px]"/>
            </a>
        </div>
    </div>
   </div>
   </div>
   <img data-aos="fade-up" src={img} width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" />
   </div>
  )
}

export default Banner