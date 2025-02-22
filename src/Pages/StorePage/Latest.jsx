import { AppleStore, Cards, HelpCards } from "./props"

const Latest = () => {
    return (
        <section className="relative top-[15em]">
            <div className="flex text-[2em] p-[20px] font-semibold">
                <h1>The Latest.</h1>  <p className="text-[rgba(95,95,95,0.8)]">Take a look at whats new right now.</p>
            </div>
            <div className="overflow-x-scroll Scroll">
                <div className="w-[400em] relative top-[-4em] flex gap-[1em] p-[30px]">
                    {
                        Cards.map((dataa) => (
                            <div className="hover3D" key={dataa.id}>
                                <p className={`relative z-[1] text-[2em] text-center top-[4em] font-semibold ${dataa.textStyles}`}>{dataa.name}</p>
                                <p className={`relative z-[1] text-[1em] text-center top-[8em] font-semibold ${dataa.textStyles}`}>{dataa.prices}</p>
                                <img className="borderRadius rounded-[60px] cursor-pointer relative z-[0]" src={dataa.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex gap-[.2em] text-[2em] p-[20px] font-semibold">
                <h1>Help is here.</h1> <p className="text-[rgba(95,95,95,0.8)]">Whenever and however you need it.</p>
            </div>
            <div className=" overflow-x-scroll Scroll">
                <div className="flex w-[150%] gap-[1em] p-[30px]">
                    {
                        HelpCards.map((dataa) => (
                            <div className="hover3D cursor-pointer" key={dataa.id}>
                                <p className={`relative z-[1] text-[.8em] font-semibold ml-[1.7em] top-[5em] text-[rgba(82,82,82,0.9)] ${dataa.textStyles}`}>{dataa.name}</p>
                                <p className={`relative z-[1] text-[1.5em] font-semibold ml-[1em] top-[4em] ${dataa.textStyles}`}>{dataa.desc}</p>
                                <img className={`borderRadius rounded-[60px] relative z-[0] ${dataa.imgUp}`} src={dataa.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex text-[2em] gap-[.2em] p-[20px] font-semibold">
                <h1>Apple Store App.</h1><p className="text-[rgba(95,95,95,0.8)]">Your Own personal store.</p>
            </div>
            <div className="overflow-x-scroll Scroll">
                <div className="flex gap-[1em] relative top-[-4em] w-[120%] p-[30px]">
                    {
                        AppleStore.map((dataa)=>(
                            <div className="hover3D cursor-pointer" key={dataa.id}>
                                <p className="relative z-[1] font-semibold text-[.8em] top-[8em] left-[2em] text-[rgba(82,82,82,0.9)]">{dataa.name}</p>
                                <p className="relative top-[4em] text-[1.9em] left-[.5em] z-[1] font-semibold">{dataa.desc}</p>
                                <img className={`borderRadius rounded-[60px] relative z-[0] ${dataa.imgUp}`} src={dataa.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Latest