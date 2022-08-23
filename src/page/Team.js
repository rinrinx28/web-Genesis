import Navbar from "../components/Navbar";
import Wave from '../image/wave2.png';
import Logo1 from '../image/AVA6.png';
import Typed from 'react-typed';
import { BsTwitter, BsDiscord, BsInstagram } from "react-icons/bs";
import opensea from '../image/opensea.png';
import Logo from '../image/logo2.png';
import Aos from "aos";
import 'aos/dist/aos.css';
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './Team.css';


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
                <div className="text-black">
                    <div className="h-screen text-center mx-auto flex flex-col justify-center w-full ">
                        <p className="font-Roboto font-bold p-2 text-xl text-[#99FFFF]">Welcome To The</p>
                        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-2 font-Lobster">Kaigan Genesis.</h1>
                        <div className="justify-center items-center">
                            <Typed className="md:text-2xl text-xl font-bold text-gray-700 md:pl-4 pl-2 py-4 font-Lobster" strings={["A new kind of brand that we build together.", "A brand for the metaverse. By the community.", "A collection of 50 Genesis that give you membership access to The Word."]} typeSpeed={40} backSpeed={50} loop />
                        </div>
                    </div>
                </div>
                {/* Card Profile */}
                <div className="bg-gray-200 py-10 px-4">
                    <div className="max-w-[1240px] mx-auto">
                        <div className="flex flex-col justify-center text-center border-b-2 border-gray-400" data-aos="fade-right" data-aos-duration="600">
                            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-Lobster text-[#0070BB]" data-aos="fade-right" data-aos-duration="600">Team of Kaigan.</h1>
                            <p className="text-gray-600 font-semibold font-Roboto" data-aos="fade-right" data-aos-duration="600">The core team a team of human beans with backgrounds in crypto, technology, and gaming working to build a decentralized brand of the future.</p>
                        </div>
                        <div className="py-5">
                            <Swiper data-aos="zoom-out-up" slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{ clickable: true, }} navigation={true} modules={[Pagination, Navigation]} >
                                <SwiperSlide>
                                    <div className="w-60 p-2 bg-white rounded-xl">
                                        <img className="h-50 object-cover rounded-xl" src={Logo1} alt='/' />
                                        <div className="p-2">
                                            <h2 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/DBNGETH" target='_blank' rel="noreferrer">@DBNGETH</a></h2>
                                            <p className="text-sm text-gray-600">Something about my profile, I know you want to know about me!</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-60 p-2 bg-white rounded-xl">
                                        <img className="h-50 object-cover rounded-xl" src={Logo1} alt='/' />
                                        <div className="p-2">
                                            <h2 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/JackkMathers" target='_blank' rel="noreferrer">@JackkMathers</a></h2>
                                            <p className="text-sm text-gray-600">Something about my profile, I know you want to know about me!</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="w-60 p-2 bg-white rounded-xl">
                                        <img className="h-50 object-cover rounded-xl" src={Logo1} alt='/' />
                                        <div className="p-2">
                                            <h2 className="font-bold text-lg mb-2 text-[#1da1f2]"><a href="https://twitter.com/Rinrinx28" target='_blank' rel="noreferrer">@Rinrinx28</a></h2>
                                            <p className="text-sm text-gray-600">Something about my profile, I know you want to know about me!</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* Footer */}
                <div className="flex">
                    <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-[#0070BB]">
                        <div className="px-5">
                            <h1 className="text-3xl font-bold font-Lobster" data-aos="fade-right" data-aos-duration="400">Kaigan.</h1>
                            <p className="py-4 font-Roboto font-light" data-aos="fade-right" data-aos-duration="400">Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.</p>
                        </div>
                        <div className="flex justify-center">
                            <img src={Logo} className="h-40 p-2 rounded" alt="/" data-aos="zoom-out-up" data-aos-duration="400" />
                        </div>
                        <div className="items-center">
                            <p className="mt-6 opacity-80 text-center uppercase font-mono text-xs justify-end" data-aos="flip-left" data-aos-duration="400">
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