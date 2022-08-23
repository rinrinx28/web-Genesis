import Navbar from "../components/Navbar";
import Banner from '../image/wave2.png';
export default function Mint() {
    return (
        <>
            <Navbar />
            <main className="opacity-100">
                <img className="min-w-screen w-full lg:block bottom-0 transform h-screen object-cover absolute top-0 left-0 object-center overlay-item -z-10" src={Banner} alt='Waves' />
            </main>
        </>
    )
}