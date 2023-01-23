import React, { useContext } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';

import { TransactionContext } from '../context/TransactionContext';
import { Loader } from './';
import { shortenAddress } from '../utils/shortenAddress';

import logo from "../../images/logo31.png";


const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
);

const Welcome = () => {
    const { connectWallet, currentAccount, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if (!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    }

    return (
        <div className="flex w-full c gradient-bg-welcome
        
        ">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 ">
                <div className="flex flex-1 justify-start flex-col mf:mr-10">
                    <hi className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Send Ethereum <br /> anywhere & anytime
                    </hi>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Experience the power of decentralized finance with our easy-to-use Ethereum trading app.
                        Say goodbye to slow and expensive Ethereum transfers - our app makes it easy to send Ethereum in just a few taps.
                    </p>
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex flex-row justify-center items-center my-5 bg-[#e88504] p-3 
                        rounded-full cursor-pointer hover:bg-[#ee9f27] hover:bg-gradient-to-r from-red-500 to-orange-500">
                            <p className="text-white text-base font-semibold">Connect Wallet</p>
                        </button>
                    )}

                   
                    {/* Features of this web application in a grid */}
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 orange-200">
                        <div className={`rounded-tl-2xl ${commonStyles}`}>
                            Secure
                        </div>
                        <div className={commonStyles}>Intuitive</div>
                        <div className={`rounded-tr-2xl ${commonStyles}`}>
                            Simple
                        </div>
                        <div className={`rounded-bl-2xl ${commonStyles}`}>
                            Fast
                        </div>
                        <div className={commonStyles}>Notification</div>
                        <div className={`rounded-br-2xl ${commonStyles}`}>
                            User-friendly
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10" >

                    {/* Ethereum card */}
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 
                    w-full my-5 eth-card white-glassmorphism">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="#fff" />
                                </div>
                                <BsInfoCircle fontSize={17} color="#fff" />
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">
                                    {shortenAddress(currentAccount)}
                                </p>
                                <p className="text-white font-semibold text-lg mt-1">
                                <img src={logo} alt="logo" className="w-20 cursor-pointer" />
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Input section for transactions */}
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <Input placeholder='Address To' name='addressTo' type="text" handleChange={handleChange} />
                        <Input placeholder='Amount (ETH)' name='amount' type="number" handleChange={handleChange} />
                        <Input placeholder='Keyword (GIF)' name='keyword' type="text" handleChange={handleChange} />
                        <Input placeholder='Enter Message' name='message' type="text" handleChange={handleChange} />

                        <div className='h-[1px] w-full bg-gray-400 my-2' />

                        {/* Loader */}
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer hover:bg-gradient-to-r from-red-500 to-orange-500"
                            >
                                Send Now
                            </button>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Welcome;