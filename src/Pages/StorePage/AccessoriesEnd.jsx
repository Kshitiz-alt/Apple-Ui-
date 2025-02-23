import InfoBox from "../MainApplePage/InfoBox"
import { AccessoriesData } from "./props"

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
            <div className="p-[60px]">
                <h1 className="text-[2em] font-semibold">Quick Links</h1>
                <div className="flex gap-[1em] text-center top-[1em] relative">
                    <a className="w-[110px] h-[40px] border rounded-[20px] text-[.8em] hover:text-white hover:bg-black relative p-[9px]" href="">Order Status &#8599;</a>
                    <a className="w-[130px] h-[40px] border rounded-[20px] text-[.8em] hover:text-white hover:bg-black relative p-[9px]" href="">Shopping Help &#8599;</a>
                    <a className="w-[110px] h-[40px] border rounded-[20px] text-[.8em] hover:text-white hover:bg-black relative p-[9px]" href="">Your Saves &#8599;</a>
                </div>
            </div>
            <div className="relative top-[20em]">
            <InfoBox/>
            </div>
            
        </section>
    )
}

export default AccessoriesEnd