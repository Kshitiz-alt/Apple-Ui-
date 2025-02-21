import { useState, useEffect , useRef } from 'react'
import { IphonesDATA } from './Props';
import { motion , useInView } from 'motion/react'
import SixProducts from './SixProducts';
import TvShow from './TvShow';
import InfoBox from './InfoBox';



const IphonesPage = () => {
  const ref = useRef()
  const DataAppear = useInView(ref)
  const [padding, setPadding] = useState(100); // Initial padding

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newPadding = Math.min(40, 10 + scrollY * 1); // Expands padding
      setPadding(newPadding);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      <video className="h-full w-full bg-cover z-[0]" muted loop autoPlay src="https://www.apple.com/105/media/us/iphone-16e/2025/d9015f23-5cc1-45b4-b25a-2b1caee9d7ac/films/announcement/iphone-16e-announcement-tpl-us-2025_960x540.mp4"></video>
      <div>
        <div className="duration-300 transition-all" style={{ paddingLeft: `${padding}px`, paddingRight: `${padding}px` }}>
          <h1 className="relative z-[1] top-[-7em] flex justify-center text-[2.8em] font-bold">iPhone 16<p className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-red-500">e</p></h1>
          <h1 className="relative z-[1] top-[-14em] flex justify-center text-[1.4em]">Supersized battery life</h1>
          <div className="flex relative justify-center items-center top-[-17em] gap-[2em] text-black z-[1]">
            <a className="h-[30px] w-[10%] bg-blue-400 text-white borderRadius " href="">Learn more</a>
            <a className="h-[30px] w-[10%] border borderRadius hover:text-white " href="">View Pricing</a>
          </div>
          <p className="relative flex justify-center items-center text-black/50 z-[1] text-[1.3em] bg-gray-300/80  top-[-10.3em]">
            Pre-order from 6:30 PM IST on 21 february Available from 28 February
          </p>
          <img className="relative opacity-90 left-0 right-0 top-[-30em] z-[0] rounded-t-[10px] h-full w-full" src="https://www.apple.com/in/home/images/heroes/iphone-16e/hero_iphone_16e__f5aoann5v1me_medium.jpg" alt="" />
          <p className="bg-clip-text font-semibold text-transparent bg-gradient-to-br from-blue-800 to-red-500 flex justify-center relative top-[-28em] text-[1.3em]">Build for Apple Intelligence</p>
          <p className="flex justify-center relative top-[-35em] text-[1em] text-gray-400/95">Coming in English in early April</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[10px] relative top-[-40em]" ref={ref}>
        {
          IphonesDATA.map((dataa)=>(
            <motion.div key={dataa.id}
            animate={DataAppear ? {x:0,opacity:1} : {x:300,opacity:0}}
            transition={{staggerChildern:0.5, duration:3}}
            >
              <h1 className="relative z-[1] text-white flex justify-center top-[3em] font-bold text-[3.3em]">{dataa.name}</h1>
              <p className="relative z-[1] text-white flex justify-center top-[6em] text-[1.7em]">{dataa.desc}</p>
              <img className=" bg-cover w-full h-full relative left-0 right-0" src={dataa.img} alt="" />
              <div className="flex justify-center items-center text-white relative top-[-14em] gap-[2em]">
                <button className="text-[1.2em] cursor-pointer borderRound">{dataa.btn1}</button>
                <button className="text-[1.2em] cursor-pointer borderBuy">{dataa.btn2}</button>
              </div>
              <h6 className="text-[rgba(81,81,81,0.8)] flex justify-center relative top-[-13em]">{dataa.desc2}</h6>

            </motion.div>
          ))
        }
      </div>
      <SixProducts/>
      <TvShow/>
      <InfoBox/>
    </div>
  )
}
export default IphonesPage