import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { IoMdLock } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { BsInfoCircle } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";
import ring from '../assets/ring.svg';
import path1Img from '../assets/path1.svg';
import path3Img from '../assets/path3.svg';

const NarrativeCommon = (props) => {
    const { data } = props;
    const headerRef = useRef(null);
    const scrollableDivRef = useRef(null);

    const toggleContent = () => {
        if (scrollableDivRef.current.style.height === '0px') {
            console.log('runn')
            document.querySelector('#dropDownIcon').classList.remove('rotate-180');
            scrollableDivRef.current.style.height = '35vh';
            headerRef.current.classList.remove('rounded-b-3xl');
        } else {
            console.log('don runn')
            document.querySelector('#dropDownIcon').classList.add('rotate-180');
            scrollableDivRef.current.style.height = '0px';
            headerRef.current.classList.add('rounded-b-3xl');
        }
    }

    return (
        <>
            <div className="contentSection1 pb-5 mt-3">
                <div className={`customContainer w-4/5 mx-auto rounded-t-xl ${props.classList}`}>
                    <div ref={headerRef} className="contentHeader flex px-4 py-4 rounded-t-3xl relative" onClick={toggleContent}>
                        <IoMdArrowDropup id='dropDownIcon' className='absolute top-3 right-3 icon_secondary text-2xl transition-all' />
                        <div className="img_container_common rounded-xl relative w-3/4">
                            <img className='px-3 py-3' src={data.questHeader.img_url} />
                            <p className='px-3 py-1 rounded-3xl absolute bottom-6 left-1/2 -translate-x-1/2 quest_count'>{data.questHeader.quest_count} Quests</p>
                        </div>
                        <div className='flex flex-col w-2/3 px-2'>
                            <h2 className='text-2xl mb-1'>{data.questHeader.title}</h2>
                            <p className='mb-2'>{data.questHeader.desc}</p>
                            <hr className='custom_line_break mt-2' />
                            <div className='flex w-max rounded-full reward_count px-3 py-1 mt-5'>
                                <img src='https://www.intract.io/assets/xp-icon-aacd204a.svg' width={20} />
                                {data.questHeader.reward_count} XPs
                            </div>
                        </div>
                    </div>
                    <div ref={scrollableDivRef} className="scrollableDiv transition-all rounded-b-sm px-4">
                        {data.questItems.map((item, index) => {
                            return <div key={index} className="scrollableItem px-2 py-2 rounded-xl mb-2">
                                <div className="flex">
                                    <img src={item.img_url} />
                                    <div className="itemContent flex items-end justify-between w-full">
                                        <div className='pl-2'>
                                            <h2 className='mb-5 questTitle'>{item.title}</h2>
                                            <hr className='mb-5 custom_line_break' />
                                            <div className="flex items-center">
                                                <p className='mr-2'>{item.totalTasks} tasks</p>
                                                <div className='w-1/2 rounded-full progress_bar'>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='questTick flex items-center justify-center'>
                                            <IoMdCheckmark />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

const Milestone = (props) => {
    const { data } = props;
    return (
        <>
            <div className={`contentSection2 my-32 ${props.classList}`}>
                <div className='flex flex-col items-center'>
                    <div className="icon_container_primary">
                        <IoMdCheckmark className='icon_primary w-10' />
                    </div>
                    <div className="section_2_img_container relative w-1/3 mt-4">
                        <div className="img_container_common">
                            <img src={data.img_url} />
                        </div>
                        <div className='icon_container_secondary absolute -bottom-3 -right-3'>
                            <IoMdLock className='icon_secondary' />
                        </div>
                    </div>
                    <h2 className='nft_name'>{data.title}</h2>
                    <p className='nft_desc'>{data.desc}</p>
                    <button className='btn_secondary'>Claim</button>
                </div>
            </div>
        </>
    )
}

const VideoContainer = (props) => {
    const { data } = props;
    const vidContainerRef = useRef(null);
    const imgContainerRef = useRef(null);

    const playVideo = () => {
        imgContainerRef.current.classList.add('hidden');
        vidContainerRef.current.classList.remove('hidden');
    }

    const closeVideo = () => {
        imgContainerRef.current.classList.remove('hidden');
        vidContainerRef.current.classList.add('hidden');
    }

    return (
        <>
            <div className="video_container my-3">
                <div ref={vidContainerRef} className="video_section relative w-full hidden h-full">
                    <iframe width="100%" height="100%" src={data.vid_url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    <div className="icon_container_primary absolute right-1 top-1">
                        <IoMdClose onClick={closeVideo} />
                    </div>
                </div>
                <div ref={imgContainerRef} className="img_section relative w-full h-full">
                    <img src={data.img_url} width="100%" height="100%" />
                    <img src={data.img_url} width="100%" height="100%" />
                    <div className="icon_container_primary absolute right-1 top-1">
                        <img src='https://www.intract.io/assets/reel-video-ee824737.svg' />
                    </div>
                    <div className="icon_container_primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <FaPlay onClick={playVideo} />
                    </div>
                    <h4 className='absolute bottom-4 left-4 z-10 text-2xl'>{data.title}</h4>
                </div>
            </div>
        </>
    )
}

const Academy = () => {

    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const date = new Date('2024-07-11T23:30:00');

    const formatDate = (type, setVal) => {
        if (type < 9) {
            setVal('0' + type)
        } else {
            setVal(type)
        }
    }

    useEffect(() => {
        formatDate(date.getDay(), setDays);
        formatDate(date.getHours(), setHours);
        formatDate(date.getMinutes(), setMinutes);
        formatDate(date.getSeconds(), setSeconds);
        setDays('00');
    }, [date]);

    const questData1 = {
        questHeader: {
            img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png',
            title: 'Basics of Crypto',
            desc: 'The safest and easiest place to....',
            reward_count: 1490,
            quest_count: 6
        },
        questItems: [
            {
                title: '#1: But what is crypto and web3?',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/4eeb6ff08f6640b8bd2edf23864d21c0.png',
                totalTasks: 11,
            },
            {
                title: '#2: Setting up your own web3 wallet!',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d425fe7f548542289fbd8919c89bc0ae.jpg',
                totalTasks: 8
            },
            {
                title: '#3: What the heck is a blockchain?',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/67e4ee7d187545ccbd28b4a159076068.jpg',
                totalTasks: 8
            },
            {
                title: '#4: Swapping and bridging? What’s that?',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/a0ad2f15685642b985913a3aef4208ff.jpg',
                totalTasks: 8
            },
            {
                title: '#5: NFTs and why they’re cool ;)',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/23c818f39768450298bb540fc3043bf7.jpg',
                totalTasks: 8
            },
            {
                title: '#6: Doing quests and winning rewards!',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/71ae875a31a54215af6e14fd113c60f6.jpg',
                totalTasks: 6
            }
        ]
    }
    const questData2 = {
        questHeader: {
            img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/2d1ac16ea7c9416d94a74f2ba2fe8d4a.png',
            title: 'Introduction to Airdopes',
            desc: 'Your best bet to make it big in crypto!',
            reward_count: 1040,
            quest_count: 4
        },
        questItems: [
            {
                title: '#1: What are airdrops, and how can they change your life?',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/6bb30883bc5042809b9d20926341f8ac.jpg',
                totalTasks: 7,
            },
            {
                title: '#2: Types of airdrops',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/c8d2455592d04b4f897b30da15836d5d.jpg',
                totalTasks: 10
            },
            {
                title: '#3: How to earn huge $$$ from airdrops?',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/d59b0ff5b37141b2baf3e5e39157f408.png',
                totalTasks: 11
            },
            {
                title: '#4: Things to keep in mind!',
                img_url: 'https://static.highongrowth.xyz/enterprise/65017d014e5f24613adbfd67/27d77aa021174529a9eae082de8196c9.jpg',
                totalTasks: 7
            }
        ]
    }
    const nftData1 = {
        title: "Interact Certified: Learner NFT",
        desc: "Your crypto black-belt certificate",
        img_url: "https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/1b1912563b964393b0478949efad5ed3.png"
    }
    const nftData2 = {
        title: "Interact Certified: Earner NFT",
        desc: "Your proof of  airdope expertise",
        img_url: "https://static.highongrowth.xyz/erc1155-images/65017d014e5f24613adbfd67/83bd377d91ff441aa6f7c46a63c88506.png"
    }

    const videoData = [
        {
            title: 'How to plan your retirement with crypto?',
            vid_url: 'https://www.youtube.com/embed/NkDtaXvzt-I?si=JbuZ0sQwQlStR8do?autoplay=1&amp;modestbranding=1&amp;autohide=1&amp;showinfo=0&amp;controls=1',
            img_url: 'https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png'
        },
        {
            title: 'Why are there limited bitcoins?',
            vid_url: 'https://www.youtube.com/embed/-kmxV_JO7eY?si=__7wqWnyPPilBw7F?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
            img_url: 'https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png'
        },
        {
            title: 'How does uniswap actually work?',
            vid_url: 'https://www.youtube.com/embed/9fyVLvY3P14?si=-02HNwqzZE3jXMz4?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
            img_url: 'https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png'
        },
        {
            title: 'How to spot crypto projects to invest in?',
            vid_url: 'https://www.youtube.com/embed/kYeFSwvt1sQ?si=wSQnw0sYAcpkSzz6?autoplay=1&modestbranding=1&autohide=1&showinfo=0&controls=1',
            img_url: 'https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png'
        },
    ]

    return (
        <>
            <div className="academyBanner flex flex-col items-center justify-center">
                <img src='https://www.intract.io/assets/academy-animated-logo-57b2ae61.gif' width={150} />
                <div className="bannerInfo">
                    <p className='text-center mt-2'>
                        <span>Intract users</span>
                        <span> have together made more than</span>
                        <span> $100 million</span> <br />
                        <span className='my-3'> in web3.</span> <br />
                        <span>Join them and</span>
                        <span> learn how to earn crypto! </span>
                    </p>
                </div>
                <button className='btn-primary flex items-center py-2 px-3 mt-4 rounded-md'><span className='mr-2'>Get started</span> <span><FaArrowRightLong />
                </span></button>
            </div>
            <div className='movingRing'>
                <img src={ring} />
            </div>
            <div className="relative">
                <NarrativeCommon data={questData1} classList="sm:ml-14 sm:mb-20" />
                <img className='pathImg' src={path1Img} />
                <Milestone data={nftData1} classList="sm:absolute sm:top-2 sm:right-5 sm:z-10" />
            </div>
            <div className="relative">
                <NarrativeCommon data={questData2} classList="sm:mt-20 sm:mr-40" />
                <img className='-rotate-45 w-2/5 translate-x-32 -mb-40 sm:absolute top-0 left-60 sm:rotate-0' src={path3Img} />
                <Milestone data={nftData2} classList="sm:absolute sm:top-2 sm:left-5 sm:z-10" />
            </div>
            <div className='countdownContainer'>
                <div className="timer_container rounded-xl mx-auto px-3 py-2 mt-10 mb-2">
                    <div>
                        <div className='timer_header flex items-center mb-2'>
                            <div className="icon_container_tertiary mr-2">
                                <BsClockHistory color='#fa8922' />
                            </div>
                            <p>Reward unlocks in</p>
                        </div>
                        <hr className='custom_line_break mb-3' />
                        <div className="countdown flex relative justify-between">
                            <img className='absolute w-full h-full left-0 top-0' src="https://www.intract.io/assets/dotBg-149528a0.png" alt="countdown_bg" />
                            <div className='flex flex-col relative z-10 items-center'>
                                <h3>{days}</h3>
                                <p>Days</p>
                            </div>
                            <div className='flex flex-col relative z-10 items-center'>
                                <h3>{hours}</h3>
                                <p>Hrs</p>
                            </div>
                            <div className='flex flex-col relative z-10 items-center'>
                                <h3>{minutes}</h3>
                                <p>Mins</p>
                            </div>
                            <div className='flex flex-col relative z-10 items-center'>
                                <h3>{seconds}</h3>
                                <p>Sec</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="final_reward timer_container px-2 py-2 mx-auto rounded-xl">
                    <img className='rounded-xl' src='https://www.intract.io/assets/kol-reward-12e6ae06.gif' />
                    <div className="flex justify-between my-2">
                        <p>Exclusive Community</p>
                        <div className="flex">
                            <img className='mr-2' src='https://www.intract.io/assets/discord-50baa5cf.svg' />
                            <p>Earndrop</p>
                        </div>
                    </div>
                    <hr className='custom_line_break my-4' />
                    <div className="flex justify-between my-2">
                        <p>Complete all essential quests</p>
                        <div className="questTick">
                            <IoMdCheckmark />
                        </div>
                    </div>
                    <div className="flex justify-between my-2">
                        <p>Complete atleast 1 Alpha Hub quest today</p>
                        <div className="questTick">
                            <IoMdCheckmark />
                        </div>
                    </div>
                    <button className='flex items-center justify-center w-full py-2 mt-4'><span className='mr-3'>Claim Now</span> <span><FaArrowRightLong /></span></button>
                    <img src="https://www.intract.io/assets/reward-info-path-571d6141.svg" alt="path" className='hidden md:visible md:absolute md:top-1/2 md:-right-2/3 md:block' />
                    <div className="rewardInfo flex flex-col px-2 py-2 md:absolute md:top-0 md:-right-full md:translate-x-16">
                        <div className="flex items-center">
                            <p className='mr-2'>Reward info</p>
                            <BsInfoCircle />
                        </div>
                        <hr className="custom_line_break my-4" />
                        <span className='mt-2 mb-6'>Free access to paid KOL (crypto earning) communities!</span>
                        <p className='mb-5'>Win access to exclusive earning communities of some of the the greatest earners in crypto for a month, every 24 hours. Get access to unmatched insights, a close-knit community of the best airdrop earners, and more.</p>
                        <p>To win: make sure you've connected your Twitter and Discord accounts - and follow our criteria!</p>
                    </div>
                </div>
            </div>
            <div className="creators_section mx-auto mb-10">
                <h3 className='mt-10 mb-5'>Top Crypto Creators and Projects to Follow</h3>
                <p className='mb-8'>Answer to your crypto doubts, straight from the experts</p>
                <div className="creators_video_container flex-wrap gap-8 flex flex-col sm:flex-row">
                    {videoData.map((item, index) => {
                        return <VideoContainer key={index} data={item} />
                    })}
                </div>
            </div>
            <hr />
            <div className="dictionary mt-8">
                <div className="flex flex-col items-center justify-center">
                    <h3 className='my-2'>Crypto Dictionary</h3>
                    <p>Your one-stop to catch up on all crypto terms</p>
                </div>
                <div className="dictionaryContentContainer relative">
                    <img src='https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg' width='100%' height='100%' />
                    <img src='https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg' width='100%' height='100%' />
                    <div className="dic_content absolute left-3 bottom-3">
                        <h4>Web3 + Degen Glossary</h4>
                        <p>Your own crypto dictionary</p>
                    </div>
                    <div className="icon_container_secondary absolute right-4 bottom-4">
                        <IoBookOutline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Academy