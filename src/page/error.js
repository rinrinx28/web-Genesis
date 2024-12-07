import { Link } from "react-router-dom"
import Typed from 'react-typed';

export default function Error() {
    return (
        <div className="h-screen text-center mx-auto flex flex-col justify-center w-full leading-10">
            <h1 className="md:text-[220px] sm:text-[110px] text-[220px] md:py-2 font-Lobster font-[700px] tracking-[10px]">404</h1>
            <Typed className="font-Roboto font-bold p-2 text-xl text-gray-500 mt-[5rem]" strings={["The page you are looking for might have been removed had its name changed or is temporarily unavailable."]} typeSpeed={40} backSpeed={50} loop />
            <div>
                <button class="inline-flex items-center px-4 py-2 bg-[#0070BB] bg-opacity-[.8] hover:bg-opacity-100 text-white text-sm font-medium rounded-md">
                    <Link to="/" className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>Restore
                    </Link>
                </button>

            </div>
        </div>
    )
}