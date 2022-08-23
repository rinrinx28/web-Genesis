import React, { useState } from "react";
import Logo from '../image/logo2.png';
import { NavLink } from 'react-router-dom';
import { BsDiscord, BsTwitter } from 'react-icons/bs';
import './Navbar.css';

export default function Navbar() {
    const [nav, setNav] = useState(true);
    return (
        <>
            <div className="fixed w-full top-0 lg:px-8 px-5 lg:pt-8 pt-5 z-70">
                <div className="flex h-full border-b border-white items-center justify-center max-w-11xl mx-auto border-opacity-0">
                    <div className="flex-grow">
                        <div className="flex">
                            <NavLink className="w-max" to="/"><img className="h-12 p-2 rounded hover:bg-opacity-100 hover:-translate-y-1 hover:scale-110 bg-[#0070BB] bg-opacity-[.85] duration-500" src={Logo} alt='logo' /></NavLink>
                        </div>
                    </div>
                    <div className="items-center hidden lg:flex">
                        <ul className="flex space-x-2">
                            <li><NavLink className="text-black bg-[#0070BB] hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 bg-opacity-0 relative h-7  font-mono tracking-wider pt-0.5  uppercase  text-xs duration-500 items-center px-4 border-solid border-[1.5px] border-[#0070BB] rounded flex justify-center flex-row" to="/team" >The Team</NavLink></li>
                            <li><NavLink className="text-black bg-[#0070BB]  hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 bg-opacity-0 relative h-7  font-mono tracking-wider pt-0.5  uppercase  text-xs duration-500 items-center px-4 border-solid border-[1.5px] border-[#0070BB] rounded flex justify-center flex-row" to="/mint" >Mint</NavLink></li>
                            <li><NavLink className="text-black bg-[#0070BB]  hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 bg-opacity-0 relative h-7  font-mono tracking-wider pt-0.5  uppercase  text-xs duration-500 items-center px-4 border-solid border-[1.5px] border-[#0070BB] rounded flex justify-center flex-row" to="/" >Genesis</NavLink></li>
                            <li><a className="text-black bg-[#0070BB]  hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 bg-opacity-0 relative h-7  font-mono tracking-wider pt-0.5  uppercase  text-xs duration-500 items-center px-4 border-solid border-[1.5px] border-[#0070BB] rounded flex justify-center flex-row" href="https://discord.gg/kaigan" target='_blank' rel='noreferrer'><BsDiscord size={16} /></a></li>
                            <li><a className="text-black bg-[#0070BB]  hover:bg-opacity-70 hover:-translate-y-1 hover:scale-110 bg-opacity-0 relative h-7  font-mono tracking-wider pt-0.5  uppercase  text-xs duration-500 items-center px-4 border-solid border-[1.5px] border-[#0070BB] rounded flex justify-center flex-row" href="https://twitter.com/KAIGANofficial" target='_blank' rel='noreferrer'><BsTwitter size={16} /></a></li>
                        </ul>
                    </div>
                    <div className="lg:hidden z-50 " >
                        {nav ? (
                            <button className="relative w-10 h-10" onClick={() => setNav(!nav)}>
                                <div className="invert-0 w-6  h-0.5 m-auto rounded bg-black transtion duration-500"></div>
                                <div className="invert-0 w-6  h-0.5 m-auto mt-2 rounded bg-black transtion duration-500"></div>
                            </button>
                        ) : (
                            <button className="relative w-10 h-10" onClick={() => setNav(!nav)}>
                                <div className="absolute rotate-45 invert-0 w-6  h-0.5 m-auto rounded bg-black transtion duration-500"></div>
                                <div className="absolute -rotate-45 invert-0 w-6  h-0.5 m-auto rounded bg-black transtion duration-500"></div>
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className={nav ? 'hidden' : "w-screen items-end h-screen flex flex-col fixed px-6 pt-20 bg-white bg-opacity-70 backdrop-blur-lg z-60 pointer will-change-opacity overflow-scroll puff-in-center"}>
                <ul className="text-xl w-full uppercase font-black">
                    <li className="border-b border-black border-opacity-10"><NavLink className="py-3 w-full items-center relative flex text-black" to="/team">The Team</NavLink></li>
                    <li className=" border-b border-black border-opacity-10"><NavLink className="py-3 w-full items-center relative flex text-black" to="/mint">Mint</NavLink></li>
                    <li className=" border-b border-black border-opacity-10"><NavLink className="py-3 w-full items-center relative flex text-black" to="/" d>Genesis</NavLink></li>
                    <li className=" border-b border-black border-opacity-10"><a className="py-3 w-full items-center relative flex text-black" href="https://discord.gg/kaigan" target='_blank' rel="noreferrer">Discord<BsDiscord className="ml-auto fill-current stroke-current h-4 w-4" /></a></li>
                    <li className=" border-b border-black border-opacity-10"><a className="py-3 w-full items-center relative flex text-black" href="https://twitter.com/KAIGANofficial" target='_blank' rel="noreferrer">Twitter<BsTwitter className="ml-auto fill-current stroke-current h-4 w-4" /></a></li>
                </ul>
                <p className="mt-6 opacity-80 text-left uppercase font-mono text-xs pb-4">
                    Kaigan Labs, Inc © 2022<br />kaigan@gmail.com<br />
                </p>
            </div>
        </>
    )
}