import InfoBox from "../MainApplePage/InfoBox"
import { AccessoriesData, AirPodShow, Exp } from "./props"

const AccessoriesEnd = () => {
    return (
        <section>
            <div className="flex relative p-[60px] text-[2em] font-semibold">
                <h1>Accessories.</h1><p className="text-[rgba(95,95,95,0.8)]">Essentials that pair perfectly with your favourite devices</p>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden Scroll h-[70vh]">
                <div className="flex w-[210%] relative top-[2em] left-[3em] gap-[2em] ">
                    {
                        AccessoriesData.map((dataa) => (
                            <div className={`${dataa.styles} borderRadius hover3D rounded-[40px]`} key={dataa.id}>
                                <img className="rounded-[40px] relative z-[0]" src={dataa.img} alt="" />
                                <p className={`relative z-[1] top-[3em] font-semibold ${dataa.nameStyle}`}>{dataa.name}</p>
                                <p className={`relative z-[1] top-[3em] text-black/50 ${dataa.descStyle}`}>{dataa.desc}</p>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="flex relative p-[60px] text-[2em] font-semibold">
                <h1>Loud and clear.</h1><p className="text-[rgba(95,95,95,0.8)]">Unparalleled choices for rich, high quality sound.</p>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden Scroll h-[85vh]">
                <div className="flex w-[210%] relative top-[2em] left-[3em] gap-[2em]">
                    {
                        AirPodShow.map((dataa) => (
                            <div className={`${dataa.styles} borderRadius hover3D rounded-[40px]`} key={dataa.id}>
                                <img className="rounded-[40px] relative z-[0]" src={dataa.img} alt="" />
                                <p className={`relative z-[1] top-[3em] font-semibold ${dataa.nameStyle}`}>{dataa.name}</p>
                                <p className={`relative z-[1] top-[3em] text-black/50 ${dataa.descStyle}`}>{dataa.desc}</p>
                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="flex relative p-[60px] text-[2em] font-semibold">
                <h1>The Apple experience. </h1><p className="text-[rgba(95,95,95,0.8)]"> Do even more with Apple products and services.</p>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden Scroll h-[85vh]">
                <div className="flex relative w-[150%] gap-[2em] left-[3em] top-[1em]">
                    {
                        Exp.map((dataa)=>(
                            <div className={`borderRadius hover3D rounded-[40px] ${dataa.styles}`} key={dataa.id}>
                                <p className="relative z-[1] text-[.8em] font-semibold left-[1em] top-[4em] text-black/50">{dataa.name}</p>
                                <p className="relative z-[1] text-[1.3em] font-semibold top-[3em] left-[.5em]">{dataa.desc}</p>
                                <img className={`rounded-[40px] relative z-[0] ${dataa.imgStyles}`} src={dataa.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex p-[60px] text-[2em] relative top-[-4em] font-semibold">
                <h1>Special stores.</h1><p className="text-[rgba(95,95,95,0.8)]">Exclusive savings for students for educators.</p>
            </div>
            <div className="h-[85vh]">
                <div className="w-[25%] relative left-[3em] h-[63.5vh] top-[-6em]  borderRadius hover3D rounded-[40px]">
                    <p className="relative z-[1] top-[2em] left-[1em] text-[0.8em] font-semibold text-black/50">EDUCATION</p>
                    <p className="relative z-[1] text-[1.3em] left-[.5em] top-[2em] font-semibold">Buy a new Mac or iPad with education savings.</p>
                    <img className="relative z-[0] top-[-5em]  rounded-[40px]" src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202406?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1732199422552" alt="" />
                </div>
            </div>
            <div className="p-[60px] relative top-[-19em]">
                <h1 className="text-[2em] font-semibold">Quick Links</h1>
                <div className="flex gap-[1em] text-center top-[1em] relative">
                    <a className="w-[110px] h-[40px] border rounded-[20px] text-[.8em] hover:text-white hover:bg-black relative p-[9px]" href="">Order Status &#8599;</a>
                    <a className="w-[130px] h-[40px] border rounded-[20px] text-[.8em] hover:text-white hover:bg-black relative p-[9px]" href="">Shopping Help &#8599;</a>
                    <a className="w-[110px] h-[40px] border rounded-[20px] text-[.8em] hover:text-white hover:bg-black relative p-[9px]" href="">Your Saves &#8599;</a>
                </div>
            </div>
            <div className="relative top-[2em]">
            <InfoBox/>
            </div>
            
        </section>
    )
}

export default AccessoriesEnd