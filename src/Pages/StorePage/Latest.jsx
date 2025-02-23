import { AppleStore, Cards, HelpCards } from "./props"
import { BsCreditCard } from 'react-icons/bs'
import { TbExchange } from 'react-icons/tb'
import { FaApple, FaRegSmile } from 'react-icons/fa'
import { CiDeliveryTruck } from 'react-icons/ci'
import { GiTrade } from 'react-icons/gi'
import AccessoriesEnd from "./AccessoriesEnd"
const Latest = () => {
    return (
        <section className="relative top-[15em]">
            <div className="flex text-[2em] p-[40px] font-semibold">
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
            <div className="flex gap-[.2em] text-[2em] p-[40px] font-semibold">
                <h1>Help is here.</h1> <p className="text-[rgba(95,95,95,0.8)]">Whenever and however you need it.</p>
            </div>
            <div className="overflow-x-scroll Scroll">
                <div className="flex w-[140%] gap-[1em] p-[20px]">
                    {
                        HelpCards.map((dataa) => (
                            <div className="hover3D cursor-pointer" key={dataa.id}>
                                <p className={`relative z-[1] text-[.8em] font-semibold ml-[1.7em] top-[5em] text-black/50 ${dataa.textStyles}`}>{dataa.name}</p>
                                <p className={`relative z-[1] text-[1.5em] font-semibold ml-[1em] top-[4em] ${dataa.textStyles}`}>{dataa.desc}</p>
                                <img className={`borderRadius rounded-[60px] relative z-[0] ${dataa.imgUp}`} src={dataa.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex text-[2em] gap-[.2em] p-[40px] font-semibold">
                <h1>Apple Store App.</h1><p className="text-[rgba(95,95,95,0.8)]">Your Own personal store.</p>
            </div>
            <div className="overflow-x-scroll Scroll">
                <div className="flex gap-[1em] relative top-[-4em] w-[120%] p-[30px]">
                    {
                        AppleStore.map((dataa) => (
                            <div className="hover3D cursor-pointer" key={dataa.id}>
                                <p className="relative z-[1] font-semibold text-[.8em] top-[8em] left-[2em] text-[rgba(82,82,82,0.9)]">{dataa.name}</p>
                                <p className="relative top-[4em] text-[1.9em] left-[.5em] z-[1] font-semibold">{dataa.desc}</p>
                                <img className={`borderRadius rounded-[60px] relative z-[0] ${dataa.imgUp}`} src={dataa.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex text-[2em] p-[50px] gap-[.4em] font-semibold">
                <h1>The Apple Store difference.</h1><p className="text-[rgba(95,95,95,0.8)]">Even more reasons to shop with us.</p>
            </div>
            <div className="overflow-x-scroll overflow-y-hidden Scroll">
                <div className="flex relative gap-[1em] h-[330px] left-[2em] top-[1em]">
                    <div className="w-[30em] h-[300px] bg-[rgba(255,255,255,0.8)] p-[1em]! text-[1.6em] flex-col borderRadius hover3D rounded-[60px]">
                        <BsCreditCard className="absolute size-[2em] text-green-500" />
                        <p className="relative top-[2.5em] font-semibold">Instant cashback. <br /> Plus No Cost EMI</p>
                    </div>
                    <div className="w-[30em]  h-[300px] bg-[rgba(255,255,255,0.6)]  p-[1em]! text-[1.6em] flex-col borderRadius hover3D rounded-[60px]">
                        <TbExchange className="absolute size-[2em] text-blue-700" />
                        <div className="text-[.8em] relative top-[3em] font-semibold">
                            <h1 className="text-blue-700">Exchange your smartphone,</h1><p> get – ₹67500.00 in credit towards a new one.*</p>
                        </div>
                    </div>
                    <div className="w-[30em] h-[300px] bg-[rgba(255,255,255,0.8)] p-[1em]! text-[1.6em] flex-col borderRadius hover3D rounded-[60px]">
                        <FaApple className="absolute size-[2em] text-fuchsia-500" />
                        <p className="relative top-[3em] bg-gradient-to-br from-orange-600 via-red-600 to-green-400 text-transparent bg-clip-text font-semibold">Customize your Mac</p>
                    </div>
                    <div className="w-[30em]  h-[300px] bg-[rgba(255,255,255,0.8)] p-[1em]! text-[1.6em] flex-col borderRadius hover3D rounded-[60px]">
                        <FaRegSmile className="absolute size-[2em] text-purple-500" />
                        <div className="relative top-[3em] text-[.8em] font-semibold">
                            <h1>Make them yours.</h1><p className="text-purple-500">Engrave a mix of emoji, names and numbers for free</p>
                        </div>
                    </div>
                    <div className="w-[30em]  h-[300px] bg-[rgba(255,255,255,0.8)] p-[1em]! text-[1.6em] flex-col borderRadius hover3D rounded-[60px]">
                        <CiDeliveryTruck className="absolute size-[2em] text-green-500"/>
                        <div className="relative top-[3em] text-[.8em] font-semibold">
                            <h1 className="text-green-500">Enjoy free delivery, or easy pickup</h1> <p>from an Apple Store</p>
                        </div>
                    </div>
                    <div className="w-[30em] h-[300px] bg-[rgba(255,255,255,0.8)]  p-[1em]! text-[1.6em] flex-col borderRadius hover3D rounded-[60px]">
                        <GiTrade className="absolute size-[2em] text-blue-500" />
                        <div className="relative top-[3em] text-[.8em] font-semibold">
                            <h1 className="text-blue-500">Trade in your eligible Mac, Apple Watch or iPad for instant credit.*</h1><p>In-store only</p>
                        </div>
                    </div>
                </div>
            </div>
            <AccessoriesEnd/>

        </section>
    )
}

export default Latest