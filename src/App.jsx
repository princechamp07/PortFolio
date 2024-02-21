
import { useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Services from "./components/Services";
import { useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

export default function App() {
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <>
    {
      loading ? 
      <div className="bg-slate-900 h-screen flex justify-center items-center">

      
      <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#4fa94d"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      />
      </div>
      : 
      <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    }
   
    </>
  )
  
  
}
