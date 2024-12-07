import Navbar from "../components/Navbar";
import Wave from '../image/wave2.png';
import Typed from 'react-typed';
import { FaDiscord, FaTwitter, FaInstagram } from 'react-icons/fa';
import opensea from '../image/opensea.png';
import Logo from '../image/logo2.png';
import ava6 from '../image/AVA2.png';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import './Team.css';
import db from '../image/1.jpg';
import jennie from '../image/2.jpg';
import chun from '../image/3.jpg';
import rin from '../image/5.jpg';
import jack from '../image/6.jpg';
import duhi from '../image/7.jpg';


export default function Team() {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <Navbar />
            <main className="opacity-100">
                {/*Header */}
                <img className="w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10" src={Wave} alt='Waves' />
                <img className="w-full lg:hidden bottom-0 h-screen object-cover object-center" src={ava6} alt='Waves' />
                <div className="text-black small:hidden">
                    <div className="h-screen text-center mx-auto flex flex-col justify-center w-full ">
                        <p className="font-Poppins font-bold p-2 text-2xl text-black">Welcome to</p>
                        <h1 className="md:text-7xl sm:text-6xl 2xl-s:text-9xl font-bold md:py-2 font-Redsniper">KaigaN</h1>
                        <div className="justify-center items-center">
                            <Typed className="md:text-2xl text-lg text-gray-700 md:pl-4 pl-2 py-4 font-Poppins font-bold" strings={["Kaigan was born during a picturesque sunset", "when the sun meets the ocean and the night starts to appear", "within the rhythmical sound of waves…"]} typeSpeed={40} backSpeed={50} loop />
                        </div>
                    </div>
                </div>
                {/* Card Profile */}
                <div className="bg-gray-200 py-10 px-4">
                    <div className="max-w-[1240px] mx-auto">
                        <div className="flex flex-col justify-center text-center border-b-2 border-gray-400" data-aos="fade-right" data-aos-duration="600">
                            <h1 className="md:text-4xl sm:text-3xl 2xl-s:text-5xl text-3xl py-2 font-Redsniper text-[#0070BB]" data-aos="fade-right" data-aos-duration="600">TEAM OF KAIGAN</h1>
                            <p className="text-gray-600 font-semibold font-Roboto" data-aos="fade-right" data-aos-duration="600">We are based in the waves of the ocean. We breathe and live the KAIGAN air. 6 people swim and dive full-time. All for 1 purpose: to reach KAIGAN.</p>
                        </div>
                        <div className="my-12 grid 2xl-s:justify-center 2xl-s:gap-5 2xl-s:grid-flow-col 2xl-s:items-center small:hidden">
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300">
                                <img className="h-50 object-cover rounded-xl" src={db} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Founder</h3>
                                    <h1 className="font-bold lg:text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/DBNGETH" target='_blank' rel="noreferrer">DBNGETH</a></h1>
                                    <p className="text-sm text-gray-600">"Art & Tech"</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300">
                                <img className="h-50 object-cover rounded-xl" src={jennie} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Co-founder & Manager</h3>
                                    {/* <h1 className="font-bold lg:text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/JackkMathers" target='_blank' rel="noreferrer">Jennie</a></h1> */}
                                    <h1 className="font-bold lg:text-lg mb-2 text-[#1da1f2]">JNL</h1>
                                    <p className="text-sm text-gray-600">“My soul belongs to the natural”</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid 2xl-s:justify-center 2xl-s:gap-5 2xl-s:grid-flow-col 2xl-s:items-center small:hidden">
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300">
                                <img className="h-50 object-cover rounded-xl" src={chun} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Artist</h3>
                                    {/* <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">Chun</a></h1> */}
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]">Chun</h1>
                                    <p className="text-sm text-gray-600">“Got axes, need victims.”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300">
                                <img className="h-50 object-cover rounded-xl" src={rin} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Dev</h3>
                                    {/* <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">Rin</a></h1> */}
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]">Rin</h1>
                                    <p className="text-sm text-gray-600">“If they can do it, I can't do it.”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300">
                                <img className="h-50 object-cover rounded-xl" src={jack} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Community manager & Marketer</h3>
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/JackkMathers" target='_blank' rel="noreferrer">JackkMathers</a></h1>
                                    <p className="text-sm text-gray-600">“Simplicity creates sophistication”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300">
                                <img className="h-50 object-cover rounded-xl" src={duhi} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Artist</h3>
                                    {/* <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">Duhi</a></h1> */}
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]">Duhi</h1>
                                    <p className="text-sm text-gray-600">“My team doesn't like me, but I like everyone”</p>
                                </div>
                            </div>
                        </div>
                        <div className="2xl-s:hidden grid small:grid-cols-2">
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300 md-s:w-56 md-s:mx-20 md-s:my-5 mb-l:w-44 mb-l:mx-2 mb-l:my-5 mb-m:w-40 mb-m:my-5 mb-m:mx-1 mb-s:w-32 mb-s:my-5 mb-s:mx-2">
                                <img className="h-50 object-cover rounded-xl" src={db} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Founder</h3>
                                    <h1 className="font-bold lg:text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/DBNGETH" target='_blank' rel="noreferrer">DBNGETH</a></h1>
                                    <p className="text-sm text-gray-600">"Art & Tech"</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300 md-s:w-56 md-s:mx-20 md-s:my-5 mb-l:w-44 mb-l:mx-2 mb-l:my-5 mb-m:w-40 mb-m:my-5 mb-m:mx-1 mb-s:w-32 mb-s:my-5 mb-s:mx-2">
                                <img className="h-50 object-cover rounded-xl" src={jennie} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Co-founder & Manager</h3>
                                    {/* <h1 className="font-bold lg:text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/JackkMathers" target='_blank' rel="noreferrer">Jennie</a></h1> */}
                                    <h1 className="font-bold lg:text-lg mb-2 text-[#1da1f2]">JNL</h1>
                                    <p className="text-sm text-gray-600">“My soul belongs to the natural”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300 md-s:w-56 md-s:mx-20 md-s:my-5 mb-l:w-44 mb-l:mx-2 mb-l:my-5 mb-m:w-40 mb-m:my-5 mb-m:mx-1 mb-s:w-32 mb-s:my-5 mb-s:mx-2">
                                <img className="h-50 object-cover rounded-xl" src={chun} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Artist</h3>
                                    {/* <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">Chun</a></h1> */}
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]">Chun</h1>
                                    <p className="text-sm text-gray-600">“Got axes, need victims.”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300 md-s:w-56 md-s:mx-20 md-s:my-5 mb-l:w-44 mb-l:mx-2 mb-l:my-5 mb-m:w-40 mb-m:my-5 mb-m:mx-1 mb-s:w-32 mb-s:my-5 mb-s:mx-2">
                                <img className="h-50 object-cover rounded-xl" src={rin} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Dev</h3>
                                    {/* <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">Rin</a></h1> */}
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]">Rin</h1>
                                    <p className="text-sm text-gray-600">“If they can do it, I can't do it.”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300 md-s:w-56 md-s:mx-20 md-s:my-5 mb-l:w-44 mb-l:mx-2 mb-l:my-5 mb-m:w-40 mb-m:my-5 mb-m:mx-1 mb-s:w-32 mb-s:my-5 mb-s:mx-2">
                                <img className="h-50 object-cover rounded-xl" src={jack} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Community manager & Marketer</h3>
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/JackkMathers" target='_blank' rel="noreferrer">JackkMathers</a></h1>
                                    <p className="text-sm text-gray-600">“Simplicity creates sophistication”</p>
                                </div>
                            </div>
                            <div className="2xl-s:w-[20rem] 2xl-s:p-2 bg-white rounded-xl 2xl-s:hover:scale-110 2xl-s:duration-300 md-s:w-56 md-s:mx-20 md-s:my-5 mb-l:w-44 mb-l:mx-2 mb-l:my-5 mb-m:w-40 mb-m:my-5 mb-m:mx-1 mb-s:w-32 mb-s:my-5 mb-s:mx-2">
                                <img className="h-50 object-cover rounded-xl" src={duhi} alt='/' />
                                <div className="p-2">
                                    <h3 className="text-sm text-gray-500" >Artist</h3>
                                    {/* <h1 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">Duhi</a></h1> */}
                                    <h1 className="font-bold text-lg mb-2 text-[#1da1f2]">Duhi</h1>
                                    <p className="text-sm text-gray-600">“My team doesn't like me, but I like everyone”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="flex">
                    <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-[#0070BB]">
                        <div className="px-5">
                            <h1 className="text-3xl font-bold font-Redsniper" data-aos="fade-right" data-aos-duration="400">KaigaN</h1>
                            <p className="py-4 font-Poppins font-light" data-aos="fade-right" data-aos-duration="400">KAIGAN was born during a picturesque sunset when the sun meets the ocean and the night starts to appear within the rhythmical sound of waves…</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={Logo} className="h-40 p-2 rounded" alt="/" data-aos="zoom-out-up" data-aos-duration="400" />
                        </div>
                        <div className="items-center">
                            <p className="mt-6 opacity-80 text-center uppercase font-mono text-xs justify-end" data-aos="flip-left" data-aos-duration="400">
                                Kai Labs, Inc © 2022<br />supports@kaigan.io<br />
                            </p>
                            <div className="flex justify-between mx-[5rem] md:w-[75%] my-6" >
                                <a className="hover:-translate-y-1 hover:scale-110 duration-300" href="https://discord.gg/kaigan" target='_blank' rel="noreferrer"><FaDiscord size={30} color="#fff" /></a>
                                <a className="hover:-translate-y-1 hover:scale-110 duration-300" href="https://twitter.com/KAIGANofficial" target='_blank' rel="noreferrer"><FaTwitter size={30} color="#fff" /></a>
                                <a className="hover:-translate-y-1 hover:scale-110 duration-300" href="/" alt='/' target="_blank" rel="noreferrer"><FaInstagram size={30} color="#fff" /></a>
                                <a className="hover:-translate-y-1 hover:scale-110 duration-300" href="https://opensea.io/collection/kaigangenesis" alt='/' target="_blank" rel="noreferrer" ><img src={opensea} className="h-[1.9rem]" alt='/' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}