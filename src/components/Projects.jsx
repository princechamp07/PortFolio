import Ravo from '../assets/Ravo.png'
import Netflix from '../assets/Netfiix.png'
import Huddle from '../assets/huddle.png'

const Projects = () => {
  return (
    <div className='p-20 flex flex-col items-center justify-center'>
      <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'>Projects</h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-10'>
     <a href="https://princechamp07.github.io/fashion-website-design/">   <img data-aos="fade-up" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl h-36  p-1 border-2 border-fuchsia-800 b_glow' src={Ravo} alt="" /><p class="text-3xl text-white text-center m-4 font-semibold">Ravo UI</p></a>
       <a href="https://princechamp07.github.io/netflix-design/"> <img data-aos="fade-down" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl h-36  p-1 border-2 border-fuchsia-800 b_glow' src={Netflix} alt="" /><p class="text-3xl text-white text-center m-4 font-semibold">Netflix UI</p></a>
       <a href="https://princechamp07.github.io/huddle-landing-page-with-curved-sections-master/"> <img data-aos="fade-up" height={250} width={250} className='text-[26px] flex items-center justify-center  rounded-3xl h-36  p-1 border-2 border-fuchsia-800 b_glow' src={Huddle} alt="" /><p class="text-3xl text-white text-center m-4 font-semibold">Huddle</p></a>
        
      </div>
    </div>
  )
}

export default Projects