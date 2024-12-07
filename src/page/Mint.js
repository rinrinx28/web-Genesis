import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Metamask from '../image/metamask.png';
import { toast } from 'wc-toast';
import 'aos/dist/aos.css';
import Aos from "aos";
//* Import Icon
// import { FaWallet } from 'react-icons/fa';
// import axios from "axios";

//* Ethers
import { BigNumber, ethers } from "ethers";
import abi from '../json/SMFR.json';

export default function Mint() {
    //* 
    const [isconnect, setIsconnect] = useState(true);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [contract, setContract] = useState(null);
    // const [tokenid, setToken] = useState([]);
    const [chainId, setChaiId] = useState(null);
    // const handleErrorToast = () => {
    //     toast.error('Mint Error !');
    // };
    const handleMetaToast = () => {
        toast.error('Please install Metamask !');
    };

    //* Contract Address 
    const contract_address = "0xdC36954EeC877360cE7dA3583EF6d5c31e1A5ac8";

    async function getConnect() {
        if (window.ethereum && window.ethereum.isMetaMask) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            accountChangedHandler(accounts[0])
        } else {
            // alert("Please install MetaMask !")
            handleMetaToast();
        }
    }

    const accountChangedHandler = (newAccount) => {
        if (newAccount.length !== 0 || newAccount !== null || newAccount !== undefined) {
            setDefaultAccount(newAccount);
            updateEthers();
        }
    }

    const chainChangedHandler = () => {
        // reload the page to avoid any errors with chain change mid use of application
        window.location.reload();
    }
    if (window.ethereum) {
        // listen for account changes
        window.ethereum.on('accountsChanged', accountChangedHandler);

        window.ethereum.on('chainChanged', chainChangedHandler);
    }


    const updateEthers = async () => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        let tempSigner = tempProvider.getSigner();
        let contracts = new ethers.Contract(contract_address, abi, tempSigner);
        var network = await tempSigner.getChainId();
        if (network === 1) {
            setChaiId(true);
        } else {
            setChaiId(false);
        }
        setContract(contracts);
        setIsconnect(!isconnect);
    }

    // const check = async () => {
    //     const { status, data } = await axios.get('https://kaigan.io/contract')
    //     if (status === 200) {
    //         setToken(data);
    //     }
    // }

    // const HandleMint = async (val) => {
    //     try {
    //         await contract.GKmint(BigNumber.from(Number(val)), {
    //             value: ethers.utils.parseEther((0.2).toString())
    //         })
    //     } catch {
    //         // alert("Minting get error !")
    //         handleErrorToast();
    //     }
    // }

    // useEffect(() => {
    //     check();
    // }, [tokenid])

    useEffect(() => {
        Aos.init();
    }, [])

    // tokenid.map((val) => {
    //     console.log(val.token_id)
    // })

    // const checkchainId = (chain) => {
    //     if (chain === true) {
    //         return (
    //             <>
    //                 {tokenid.map((val, index) => {
    //                     var token_id = val.token_id;
    //                     var token_minted = val.token_minted;
    //                     var allow_token = val.allow_token;
    //                     if (token_minted === 'false') {
    //                         return (
    //                             <div className="p-5">
    //                                 <div className="w-[20rem] p-2 rounded-xl bg-gray-200 hover:shadow-xl hover:scale-110 duration-300">
    //                                     <div className="h-96 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center" style={{ backgroundImage: `url("${allow_token}")` }}>
    //                                         <div className="flex justify-between"><span className="uppercase text-xs bg-green-50 p-0.5 border-green-500 border rounded text-green-700 font-medium select-none">available</span></div>
    //                                     </div>
    //                                     <div className="p-4 flex flex-col items-center">
    //                                         <p className="text-gray-400 font-light text-xs text-center">Kaigan Genesis</p>
    //                                         <h1 className="text-gray-800 text-center mt-1 font-Roboto">Kaigan Genesis #{token_id}</h1>
    //                                         <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center" onClick={() => HandleMint(token_id)}>Mint<FaWallet className="ml-2" color="#fff" /></button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         )
    //                     } else {
    //                         return (
    //                             <div className="p-5">
    //                                 <div className="w-60 p-2 rounded-xl bg-gray-200 hover:shadow-xl hover:scale-110 duration-300">
    //                                     <div className="h-52 w-full bg-gray-200 flex flex-col justify-between p-4 bg-cover bg-center opacity-50" style={{ backgroundImage: `url("${allow_token}")` }}>
    //                                         <div className="flex justify-between"><span className="uppercase text-xs bg-green-50 p-0.5 border-gray-400-500 border rounded text-gray-500-700 font-medium select-none">So Out</span></div>
    //                                     </div>
    //                                     <div className="p-4 flex flex-col items-center">
    //                                         <p className="text-gray-400 font-light text-xs text-center">Kaigan Genesis</p>
    //                                         <h1 className="text-gray-800 text-center mt-1 font-Roboto">Kaigan Genesis #{token_id}</h1>
    //                                         <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center" disabled={true} onClick={() => HandleMint(token_id)}>Mint<FaWallet className="ml-2" color="#fff" /></button>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         )
    //                     };
    //                 })}
    //             </>
    //         )
    //     }
    // }

    return (
        <>
            <wc-toast></wc-toast>
            <Navbar />
            <main className="">
                <div className="w-full text-center mx-auto lg:flex flex-col bg-white">
                    <div className={isconnect ? "small:h-screen 2xl-s:h-screen text-center mx-auto flex flex-col justify-center" : "small:h-[22rem] h-[22rem] text-center mx-auto flex flex-col justify-center"}>
                        <h1 className="md:text-7xl sm:text-6xl text-4xl md:py-2 font-Anton">KAIGAN GENESIS</h1>
                        {isconnect ? (
                            <>
                                <p className="text-gray-400 font-bold text-base text-center p-2">You need to connect to your wallet !</p>
                                <button className="mt-10 text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mx-auto mb-2" onClick={getConnect}>
                                    <img src={Metamask} className='h-10 p-2' alt='/' />Connect with MetaMask
                                </button>
                            </>
                        ) : (
                            <>
                                {chainId ? <></> : <h4 className="text-black font-bold text-lg text-center p-2">YOU'RE CURRENTLY CONNECTED TO A DIFFERENT NETWORK.</h4>}
                                <p className="text-gray-400 font-bold hover:text-black duration-300 text-xs text-center p-2 mb-s:text-xs">address: {defaultAccount}</p>
                                {chainId ? <></> : <p className="text-gray-400 font-bold text-xs text-center p-2">Please change your wallet network to mainnet.</p>}
                            </>
                        )}
                    </div>
                    {isconnect ? (
                        <>
                        </>
                    ) : (
                        <>
                            {chainId ?
                                <>
                                    {/* <button disabled='true' className="hidden text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
                                            <img src={Metamask} className='h-10 p-2' alt='/' />Connected
                                        </button> */}
                                    <div className="grid grid-flow-col grid-rows-2 justify-center rounded-md small:grid-flow-row pb-[4.5rem]">
                                        {isconnect ? <></> : <h1 className="text-[10rem] font-Anton">COMING SOON</h1>}
                                    </div>
                                </>
                                : <></>
                            }

                        </>
                    )}
                </div>
            </main>
        </>
    )
}