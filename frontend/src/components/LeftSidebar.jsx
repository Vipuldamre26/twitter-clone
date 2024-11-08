import React from 'react';
import twitterLogo from '../assets/logos/twitterLogo.svg';
import { GoHomeFill } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMail } from "react-icons/lu";

const LeftSidebar = () => {
    return (
        <div>
            <div>
                <div>
                    <img className='w-7' src={twitterLogo} alt="twitter-logo" />
                </div>
                <div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                    <div className='flex items-center'>
                        <div className="flex">
                            <GoHomeFill />
                        </div>
                        <p>Home</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSidebar