//* Import Module Systems
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Typed from "react-typed";
//* Import Image
import logo_banner from "../image/logo-about.png";
import Wave from "../image/wave2.png";
import Logo from "../image/logo2.png";
import ava6 from "../image/AVA2.png";
//* Import Aos Module
import Aos from "aos";
import "aos/dist/aos.css";
//* Import Icon
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import opensea from "../image/opensea.png";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
      <main className="opacity-100">
        <img
          className="w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10"
          src={Wave}
          alt="Waves"
        />
        <img
          className="w-full lg:hidden bottom-0 h-screen object-cover object-center"
          src={ava6}
          alt="Waves"
        />
        <div className="text-black small:hidden">
          <div className="h-screen text-center mx-auto flex flex-col justify-center w-full ">
            <p className="font-Poppins font-bold p-2 text-2xl text-black">
              Welcome to
            </p>
            <h1 className="md:text-7xl sm:text-6xl 2xl-s:text-9xl font-bold md:py-2 font-Redsniper">
              KaigaN
            </h1>
            <div className="justify-center items-center">
              <Typed
                className="md:text-2xl text-lg text-gray-700 md:pl-4 pl-2 py-4 font-Poppins font-bold"
                strings={[
                  "Kaigan was born during a picturesque sunset",
                  "when the sun meets the ocean and the night starts to appear",
                  "within the rhythmical sound of waves…",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white py-10 px-4">
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <p
                data-aos="fade-down-right"
                data-aos-duration="600"
                className="text-2xl font-Roboto font-bold"
              >
                About our OG fam
              </p>
              <h1
                data-aos="fade-right"
                data-aos-duration="600"
                className="md:text-4xl sm:text-3xl 2xl-s:text-5xl text-3xl py-2 font-Redsniper text-[#0070BB]"
              >
                KAIGAN GENESIS
              </h1>
              <p
                data-aos="fade-up-right "
                data-aos-duration="600"
                className="text-gray-600 font-semibold font-Roboto"
              >
                KAIGAN GENESIS is the first chapter of KAIGAN metaverse. The
                collection consists of 50 “family members” who put their very
                first steps on KAIGAN. They are the early supporters and
                investors who helped build KAIGAN to become a strong and
                sustainable brand in web3.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="600"
            >
              <img
                className="w-[500px] mx-auto my-4 items-end lg:hover:scale-150 duration-300 "
                src={logo_banner}
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="w-full mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white bg-[#0070BB]">
            <div className="px-5">
              <h1
                className="text-3xl font-bold font-Redsniper"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                KaigaN
              </h1>
              <p
                className="py-4 font-Poppins font-light"
                data-aos="fade-right"
                data-aos-duration="400"
              >
                KAIGAN was born during a picturesque sunset when the sun meets
                the ocean and the night starts to appear within the rhythmical
                sound of waves…
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={Logo}
                className="h-40 p-2 rounded"
                alt="/"
                data-aos="zoom-out-up"
                data-aos-duration="600"
              />
            </div>
            <div className="items-center">
              <p
                className="mt-6 opacity-80 text-center uppercase font-mono text-xs justify-end"
                data-aos="flip-left"
                data-aos-duration="600"
              >
                Kai Labs, Inc © 2022
                <br />
                supports@kaigan.io
                <br />
              </p>
              <div className="flex justify-between mx-[5rem] md:w-[75%] my-6">
                <a
                  className="hover:-translate-y-1 hover:scale-110 duration-300"
                  href="https://discord.gg/kaigan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord size={30} color="#fff" />
                </a>
                <a
                  className="hover:-translate-y-1 hover:scale-110 duration-300"
                  href="https://twitter.com/KAIGANofficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter size={30} color="#fff" />
                </a>
                <a
                  className="hover:-translate-y-1 hover:scale-110 duration-300"
                  href="/"
                  alt="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={30} color="#fff" />
                </a>
                <a
                  className="hover:-translate-y-1 hover:scale-110 duration-300"
                  href="https://opensea.io/collection/kaigangenesis"
                  alt="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={opensea} className="h-[1.9rem]" alt="/" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
