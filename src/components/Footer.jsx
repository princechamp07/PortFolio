import {FaGithub, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4'>
        <div className='mb-4 md:mb-0'>
          <span className='text-3xl font-semibold text-fuchsia-800 py-2 uppercase'> LoGo</span>
          <p className='text-[16px] my-4'>My journey as a frontend developer is characterized by a dedication to excellence, innovation, and a relentless pursuit of mastery. Through my projects and contributions, I am committed to shaping the future of digital experiences and driving positive change in the industry.</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Services</h2>
          <ul className='text-[16px] my-4'>
          <li className='my-2'>Web Design</li>
          <li className='my-2'>Web development</li>
          <li className='my-2'>SEO</li>
          <li className='my-2'>E-commerce</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contact</h2>
          <p className='text-[16px] my-4'>Email:princechamp12906@gmail.com</p>
          <p className='text-[16px] my-4'>Phone: +91 8506970579</p>
        </div>
        <div>
        <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Follow Me</h2>
        <div className='flex space-x-4'>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaGithub />
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaLinkedin />
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaTwitter />
          </a>
          <a href="" className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'>
            <FaInstagram />
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer