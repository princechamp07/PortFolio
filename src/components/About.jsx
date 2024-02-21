import img from '../assets/Profile.jpeg'

const About = () => {
  return (

    <div id='about' className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-20 items-center'>
    <img data-aos="fade-down" src={img} width={290} height={290} className='rounded border-2 p-1 border-fuchsia-500 img_glow' alt="" />
    
    <div  className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
     <h1 data-aos="fade-right" className='text-[52px] font-semibold mb-8 leading-normal uppercase text-fuchsia-500'>About Me</h1>
    <p data-aos="fade-left"><b>Introduction:</b><br/>
👋 Hello, I'm Vishal Sharma, a 22-year-old currently pursuing my Bachelor of Computer Applications degree from IGNOU, situated in the vibrant city of Delhi. Originally hailing from the culturally rich city of Agra, my journey into the realm of web development has been characterized by an unwavering dedication to mastering the craft of frontend development. Proficient in a suite of technologies including HTML, CSS, Tailwind CSS, JavaScript, and ReactJS, I am committed to leveraging my skills to create impactful digital experiences.
<br/><br/><b>
Key Effects:</b><br/>
💼 My proficiency in frontend development has enabled me to make substantive contributions to the digital landscape. Through meticulous attention to detail and an emphasis on user-centric design principles, I have crafted websites and applications that not only captivate users visually but also deliver seamless and intuitive experiences. My work is underpinned by a steadfast commitment to excellence and a relentless pursuit of innovation.
<br/>
<b>Personal Projects:</b><br/>
1. Ravo Fashion Website:<br/>
   💻 The Ravo Fashion website exemplifies my dedication to combining aesthetics with functionality. By harnessing the power of HTML and Tailwind CSS, I have developed a platform that serves as a premier destination for fashion enthusiasts. With its sleek design and intuitive navigation, Ravo Fashion sets a new standard for online retail experiences.
   <br/>
2.<b> Snapgram Social Media Website:</b><br/>
   📸 Snapgram stands as a testament to my proficiency in React and TypeScript. As a dynamic social media platform, Snapgram fosters meaningful connections and interactions in the digital sphere. Through its intuitive interface and robust feature set, Snapgram has garnered acclaim for its ability to facilitate seamless communication and content sharing.
   <br/>
3. <b>Frontend Mentor Challenges:</b><br/>
   🏆 Active participation in Frontend Mentor challenges has been instrumental in my professional development. These challenges have provided me with invaluable opportunities to refine my skills, collaborate with peers, and stay abreast of emerging trends in frontend development. Each challenge completed underscores my commitment to continuous learning and mastery of my craft.
   <br/>
   <br/>
In conclusion, my journey as a frontend developer is characterized by a dedication to excellence, innovation, and a relentless pursuit of mastery. Through my projects and contributions, I am committed to shaping the future of digital experiences and driving positive change in the industry.</p>
    <div className='flex mt-8 gap-2'>
     <div className='flex items-center justify-center'>
         <div className='flex space-x-2'>
            <a href="https://drive.google.com/file/d/12Ig3yHkfXiEC2s_33BKmaWn0XTXv7uDb/view?usp=sharing"> <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>Resume</button></a>
         </div>
     </div>
    </div>
    </div>
   </div>
  
  )
}

export default About