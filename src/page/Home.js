//* Import Module Systems
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Typed from 'react-typed';
import { NavLink } from "react-router-dom";
//* Import Image
import logo_banner from '../image/logo-about.png';
import Wave from '../image/wave2.png';
import Logo from '../image/logo2.png';
//* Import Aos Module
import Aos from "aos";
import 'aos/dist/aos.css';
//* Import Icon
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import opensea from '../image/opensea.png';

export default function Home() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <Navbar />
            <main className="opacity-100">
                <img className="w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10" src={Wave} alt='Waves' />
                <div className="text-black">
                    <div className="h-screen text-center mx-auto flex flex-col justify-center w-full ">
                        <p className="font-Roboto font-bold p-2 text-xl text-[#99FFFF]">Welcome To The</p>
                        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 font-Lobster">Kaigan Genesis.</h1>
                        <div className="justify-center items-center">
                            <Typed className="md:text-2xl text-xl font-bold text-gray-700 md:pl-4 pl-2 py-4 font-Lobster" strings={["A new kind of brand that we build together.", "A brand for the metaverse. By the community.", "A collection of 50 Genesis that give you membership access to The Word."]} typeSpeed={40} backSpeed={50} loop />
                        </div>
                    </div>
                </div>
                <div className="w-full bg-white py-10 px-4">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                        <div className="flex flex-col justify-center">
                            <p data-aos="fade-down-right" data-aos-duration="600" className="text-2xl font-Roboto font-bold">About for collection Kaigan Genesis</p>
                            <h1 data-aos="fade-right" data-aos-duration="600" className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-Lobster text-[#0070BB]">Kaigan Genesis</h1>
                            <p data-aos="fade-up-right " data-aos-duration="600" className="text-gray-600 font-semibold font-Roboto">
                                KAIGAN GENESIS is a collection of 50 GENESIS NFTs—unique digital collectibles living on the Ethereum blockchain. Your Genesis doubles as your world membership card, and grants access to members-only benefits, the first of which is access to Indentity, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="600">
                            <img className="w-[500px] mx-auto my-4 items-end lg:hover:scale-150 duration-300 " src={logo_banner} alt='/' />
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-[#0070BB]">
                        <div className="px-5">
                            <h1 className="text-3xl font-bold font-Lobster" data-aos="fade-right" data-aos-duration="600">Kaigan.</h1>
                            <p className="py-4 font-Roboto font-light" data-aos="fade-right" data-aos-duration="600">Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={Logo} className="h-40 p-2 rounded" alt="/" data-aos="zoom-out-up" data-aos-duration="600" />
                        </div>
                        <div className="items-center">
                            <p className="mt-6 opacity-80 text-center uppercase font-mono text-xs justify-end" data-aos="flip-left" data-aos-duration="600">
                                Kaigan Labs, Inc © 2022<br />kaigan@gmail.com<br />
                            </p>
                            <div className="flex justify-between mx-[5rem] md:w-[75%] my-6" >
                                <a className="hover:-translate-y-1 hover:scale-110 duration-300" href="https://discord.gg/kaigan" target='_blank' rel="noreferrer"><BsDiscord size={30} color="#fff" /></a>
                                <a className="hover:-translate-y-1 hover:scale-110 duration-300" href="https://twitter.com/KAIGANofficial" target='_blank' rel="noreferrer"><BsTwitter size={30} color="#fff" /></a>
                                <NavLink className="hover:-translate-y-1 hover:scale-110 duration-300" to="/"><BsInstagram size={30} color="#fff" /></NavLink>
                                <NavLink className="hover:-translate-y-1 hover:scale-110 duration-300" to="/"><img src={opensea} className="h-[1.9rem]" alt='/' /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}