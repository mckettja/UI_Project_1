import './Home.css'

import { BiLogoGoogle, BiLogoSpotify } from "react-icons/bi";
import { BsYoutube, BsDiscord } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { AiOutlineAmazon, AiFillInstagram } from "react-icons/ai";
import { SiHulu } from "react-icons/si";
import { GiAmericanFootballBall } from "react-icons/gi";

function Entertainment () {

    return (
        <div className='home'>
            <a href='/' className='button'>Switch Modes</a>
            <h1 className='title'>Entertainment</h1>
            <div className='row'>
            <a className='link' href="https://to-do.office.com/tasks/" target="_blank" rel="noopener noreferrer">
                <BiLogoGoogle className='icon'></BiLogoGoogle>
                <span className='label'>Google</span>
            </a>
            <a className='link' href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1696693683&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fnlp%3d1%26state%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC9pbmJveC8%26RpsCsrfState%3d3dba040c-e284-3844-bc53-2088df322343&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" target="_blank" rel="noopener noreferrer">
                <BsYoutube className='icon'></BsYoutube>
                <span className='label'>YouTube</span>
            </a>
            <a className='link' href="https://www.google.com/drive/" target="_blank" rel="noopener noreferrer">
                <RiNetflixFill className='icon'></RiNetflixFill>
                <span className='label'>Netflix</span>
            </a>
            </div>
            <div className='row'>
            <a className='link' href="https://docs.google.com/document/u/0/" target="_blank" rel="noopener noreferrer">
                <BiLogoSpotify className='icon'></BiLogoSpotify>
                <span className='label'>Spotify</span>
            </a>
            <a className='link' href="https://docs.google.com/presentation/u/0/" target="_blank" rel="noopener noreferrer">
                <AiOutlineAmazon className='icon'></AiOutlineAmazon>
                <span className='label'>Amazon</span>
            </a>
            <a className='link' href="https://docs.google.com/spreadsheets/u/0/" target="_blank" rel="noopener noreferrer">
                <SiHulu className='icon'></SiHulu>
                <span className='label'>Hulu</span>
            </a>
            </div>
            <div className='row'>
                <a className='link' href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                    <GiAmericanFootballBall className='icon'></GiAmericanFootballBall>
                    <span className='label'>ESPN</span>
                </a>
                <a className='link'>
                    <AiFillInstagram className='icon'></AiFillInstagram>
                    <span className='label'>Instagram</span>
                </a>
                <a className='link' href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                    <BsDiscord className='icon'></BsDiscord>
                    <span className='label'>Discord</span>
                </a>
            </div>
        </div>
    )
}

export default Entertainment;