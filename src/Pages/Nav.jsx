import { FaApple } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { FaShoppingBag } from 'react-icons/fa'
const Nav = () => {
    return (
        <>
            <nav className="flex justify-center items-center gap-[3.3em] fixed text-[.8em] bg-[rgba(255,255,255,0.9)] h-[50px] w-full z-[10] ">
                <a className="text-black text-[1.5em]" href=""><FaApple/></a>
                <a className="text-black " href="#Store">Store</a>
                <a className="text-black " href="">Mac</a>
                <a className="text-black " href="">iPad</a>
                <a className="text-black " href="">iPhone</a>
                <a className="text-black " href="">Watch</a>
                <a className="text-black " href="">AirPods</a>
                <a className="text-black " href="">TV & Home</a>
                <a className="text-black " href="">Entertainment</a>
                <a className="text-black " href="">Accessorries</a>
                <a className="text-black " href="">Support</a>
                <a className="text-black text-[1.5em]" href=""><CiSearch/></a>
                <a className="text-black text-[1.5em]" href=""><FaShoppingBag/></a>
            </nav>
        </>
    )
}

export default Nav