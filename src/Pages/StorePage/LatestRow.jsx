import { Cards } from "./props"

const LatestRow = () => {
  return (
    <section className="relative top-[15em]">
        <div className="flex text-[2em] p-[20px] font-semibold">
            <h1>The Latest.</h1>  <p className="text-[rgba(95,95,95,0.8)]">Take a look at whats new right now.</p>
        </div>
        <div className="relative overflow-x-scroll Scroll">
            <div className="w-[400em] relative top-[-4em] flex gap-[1em] p-[30px]">
            {
                Cards.map((dataa)=>(
                    <div key={dataa.id}>
                        <p className={`relative z-[1] text-[2em] text-center top-[4em] font-semibold ${dataa.textStyles}`}>{dataa.name}</p>
                        <p className={`relative z-[1] text-[1em] text-center top-[8em] font-semibold ${dataa.textStyles}`}>{dataa.prices}</p>
                        <img className="borderRadius rounded-[60px] relative z-[0]" src={dataa.img} alt="" />
                    </div>
                ))
            }

            </div>
            
        </div>
    </section>
  )
}

export default LatestRow