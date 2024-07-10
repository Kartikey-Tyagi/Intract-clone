import React from 'react';
import { IoLogoTwitter } from "react-icons/io";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='px-5 py-8 bg-black'>
            <div className="flex flex-col justify-between sm:flex-row">
                <div className='sm:w-1/3'>
                    <div className='my-3'>
                        <img src='https://www.intract.io/logo/intract_text.svg' width={90} />
                    </div>
                    <div className="footerText mb-10 mt-6">
                        <p>We are your personal guide for exploring web3 projects & earning 100x rewards</p>
                    </div>
                </div>
                <div className="footerContent my-8">
                    <div className='flex flex-col'>
                        <p>INTRACT</p>
                        <span>Explore Quests</span>
                        <span>Coummnities</span>
                        <span>Alpha Hub</span>
                    </div>
                    <div className='flex flex-col'>
                        <p>EARN</p>
                        <span>Refer & Earn</span>
                        <span>Leaderboard</span>
                        <span>Achievements</span>
                    </div>
                    <div className='flex flex-col'>
                        <p>ABOUT</p>
                        <span>Product Roadmap</span>
                        <span>Affiliate Prora</span>
                        <span>Signup Prora</span>
                        <span>Growt Coummnity</span>
                        <span>Blogs</span>
                    </div>
                    <div className='flex flex-col'>
                        <p>SUPPORT</p>
                        <span>Help Center</span>
                        <span>Create your quest</span>
                        <span>Terms of Service</span>
                        <span>Privacy Policy</span>
                        <span>Community Guidelines</span>
                    </div>
                </div>
            </div>
            <hr />
            <div className="disclaimer my-10">
                <p><span className='font-semibold'>Disclaimer: </span><span>Crypto Products, Virtual Digital Assets, and NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions. We advise the viewer to proceed with caution. Nothing in this website or any communication published by us amounts to, is intended to be, or should be construed as investment or purchase advice of any kind or financial advice or promotion under any applicable laws. Any decision made based on the content provided on this website or any communication published by us shall not be attributable to us.</span></p>
            </div>
            <hr />
            <div className="flex socials items-center justify-between mt-10">
                <p>CREATED BY <span className='underline'>INTRACT</span></p>
                <div className="socialLinks flex items-center">
                    <div className="socialIconContainer">
                        <IoLogoTwitter color='#1DA1F2' />
                    </div>
                    <div className="socialIconContainer">
                        <FaDiscord color='#7289da' />
                    </div>
                    <div className="socialIconContainer">
                        <FaTelegram color='#1DA1F2' />
                    </div>
                    <div className="socialIconContainer">
                        <FaSpotify color='#1ED760' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer