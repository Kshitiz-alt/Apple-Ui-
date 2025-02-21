import { Info, InfoNav1, InfoNav2, InfoNav3, InfoNav4, InfoNav5 } from "./Props";

export default function InfoBox() {
    return (
        <>
            <div className="text-[rgba(47,47,47,0.5)] text-center text-[.9em] relative top-[-24em] max-w-[980px] m-auto">
                {
                    Info.map((dataa) => (
                        <div key={dataa.id}>
                            <ul>
                                <li className="p-[.6em]">{dataa.desc}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
            <hr className="w-[90%] flex justify-self-center relative top-[-20em] text-gray-500" />
            <div className="grid grid-cols-5 relative top-[-20em] max-w-[980px] m-auto text-[.8em]" >
                <div className="flex flex-col gap-[2em]">
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">Shop and Learn</h1>
                        {
                            InfoNav1.map((dataNav1) => (
                                <div key={dataNav1.id}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold"><a href="">{dataNav1.info}</a></li>
                                    </ul>
                                </div>
                            ))
                        }

                    </div>
                    <div>
                        <h1 className="font-bold">Apple Wallet</h1>
                        <ul>
                            <li className="text-gray-500 font-semibold">

                                <a href="">Wallet</a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="flex flex-col gap-[2em]">
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">Accounts</h1>
                        {
                            InfoNav2.map((dataNav2) => (
                                <div key={dataNav2.id}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav2.info}</a>
                                        </li>
                                    </ul>

                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">Entertainment</h1>
                        {
                            InfoNav2.map((dataNav2) => (
                                <div key={dataNav2.id2}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav2.info2}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="flex flex-col gap-[.4em]">
                    <h1 className="font-bold">Apple Store</h1>
                    {
                        InfoNav3.map((dataNav3) => (
                            <div key={dataNav3.id}>
                                <ul>
                                    <li className="text-gray-500 font-semibold">
                                        <a href="">{dataNav3.info}</a>
                                    </li>
                                </ul>
                            </div>
                        ))
                    }

                </div>
                <div className="flex flex-col gap-[2em]">
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">For Business</h1>
                        {
                            InfoNav4.map((dataNav4) => (
                                <div key={dataNav4.id}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav4.info}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">For Education</h1>
                        {
                            InfoNav4.map((dataNav4) => (
                                <div key={dataNav4.id2}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav4.info2}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">For Healthcare</h1>
                        {
                            InfoNav4.map((dataNav4) => (
                                <div key={dataNav4.id3}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav4.info3}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col gap-[2em]">
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">Apple Values</h1>
                        {
                            InfoNav5.map((dataNav5) => (
                                <div key={dataNav5.id}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav5.info}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-[.4em]">
                        <h1 className="font-bold">About Apple</h1>
                        {
                            InfoNav5.map((dataNav5) => (
                                <div key={dataNav5.id2}>
                                    <ul>
                                        <li className="text-gray-500 font-semibold">
                                            <a href="">{dataNav5.info2}</a>
                                        </li>
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                </div>

            </div>
            <div className="relative top-[-13em] text-[.9em] max-w-[980px] m-auto">
                <p>More Ways to Shop: <a className="text-blue-500" href="">Find an Apple Store</a> or <a className="text-blue-500" href="">other retailer</a> near you. Or call <a className="text-blue-500" href="">000800 999 6666</a></p>
            </div>
            <hr className="w-[90%] flex justify-self-center relative top-[-10em]" />
            <div className="relative top-[-10.4em]  text-[.9em] max-w-[980px] m-auto">
                <p className="">Copyright © 2025 Apple Inc. All rights reserved.</p>
                <ul className="flex relative top-[-1.5em] left-[30em] gap-x-[1em]">
                    <li><a href="">Privacy Policy</a></li>
                    <li>|</li>
                    <li><a href="">Terms of Use</a></li>
                    <li>|</li>
                    <li><a href="">Sales Policy</a></li>
                    <li>|</li>
                    <li><a href="">Legal</a></li>
                    <li>|</li>
                    <li><a href="">Site Name</a></li>
                </ul>
                <p className="relative top-[-3em] left-[78em]">India</p>

            </div>

        </>
    )
}
