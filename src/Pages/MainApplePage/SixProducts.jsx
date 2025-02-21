import { Devices } from "./Props"
const SixProducts = () => {
    return (
        <div className="grid grid-cols-2 gap-[10px] cursor-pointer">
            {
                Devices.map((dataa) => (
                    <div key={dataa.id}>
                        <h1 className={`relative z-[1] flex justify-center text-[2em] font-bold tracking-[4px] ${dataa.style} top-[-14em]`}>{dataa.name}</h1>
                        <p className={`flex justify-center relative z-[1] text-[1.3em] top-[-21em] ${dataa.style}`}>{dataa.desc}</p>
                        <div className={`flex gap-[2em] justify-center relative z-[1] top-[-25em] ${dataa.style} ${dataa.btnStyle}`}>
                            <button className={`borderRound ${dataa.btnStyle2}`}>{dataa.btn1}</button>
                            <button className={`borderBuy ${dataa.btn2}`}>{dataa.btn2}</button>
                        </div>
                        <img className="relative bg-cover right-0 left-0 h-full w-full top-[-36em] rounded-tl-[50px] rounded-br-[50px]" src={dataa.img} alt="" />

                    </div>
                ))
            }

        </div>
    )
}

export default SixProducts