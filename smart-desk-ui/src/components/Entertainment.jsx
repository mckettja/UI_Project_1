import './Home.css'

import { BiLogoGoogle, BiLogoSpotify, BiLogoPlayStore } from "react-icons/bi";
import { BsYoutube, BsDiscord } from "react-icons/bs";
import { RiNetflixFill } from "react-icons/ri";
import { AiOutlineAmazon, AiFillInstagram } from "react-icons/ai";
import { SiHulu } from "react-icons/si";

function Entertainment () {

    return (
        <div className='home'>
            <a href='/' className='button'>Switch Modes</a>
            <h1 className='title'>Entertainment</h1>
            <div className='row'>
            <a className='link' href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
                <BiLogoGoogle className='icon'></BiLogoGoogle>
                <span className='label'>Google</span>
            </a>
            <a className='link' href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <BsYoutube className='icon'></BsYoutube>
                <span className='label'>YouTube</span>
            </a>
            <a className='link' href="https://www.netflix.com/" target="_blank" rel="noopener noreferrer">
                <RiNetflixFill className='icon'></RiNetflixFill>
                <span className='label'>Netflix</span>
            </a>
            </div>
            <div className='row'>
            <a className='link' href="https://open.spotify.com/" target="_blank" rel="noopener noreferrer">
                <BiLogoSpotify className='icon'></BiLogoSpotify>
                <span className='label'>Spotify</span>
            </a>
            <a className='link' href="https://www.amazon.com/" target="_blank" rel="noopener noreferrer">
                <AiOutlineAmazon className='icon'></AiOutlineAmazon>
                <span className='label'>Amazon</span>
            </a>
            <a className='link' href="https://www.hulu.com/" target="_blank" rel="noopener noreferrer">
                <SiHulu className='icon'></SiHulu>
                <span className='label'>Hulu</span>
            </a>
            </div>
            <div className='row'>
                <a className='link'>
                    <AiFillInstagram className='icon'></AiFillInstagram>
                    <span className='label'>Instagram</span>
                </a>
                <a className='link' href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                    <BsDiscord className='icon'></BsDiscord>
                    <span className='label'>Discord</span>
                </a>
                <a className='link' href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                    <BiLogoPlayStore className='icon'></BiLogoPlayStore>
                    <span className='label'>Google Play Store</span>
                </a>
            </div>
        </div>
    )
}

export default Entertainment;