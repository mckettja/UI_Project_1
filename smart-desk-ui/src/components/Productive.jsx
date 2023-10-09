import './Home.css'

import { BsListUl } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { DiGoogleDrive } from "react-icons/di"
import { SiGoogledocs, SiGoogleslides, SiGooglesheets, SiWolfram } from "react-icons/si"
import { CgScreenMirror } from "react-icons/cg";
import { BiLogoPlayStore } from "react-icons/bi";

function Productive () {
    return(
        <div className='home'>
            <a href='/other' className='button'>Switch Modes</a>
            <h1 className='title'>Productivity</h1>
            <div className='row'>
            <a className='link' href="https://to-do.office.com/tasks/" target="_blank" rel="noopener noreferrer">
                <BsListUl className='icon'></BsListUl>
                <span className='label'>To-Do List</span>
            </a>
            <a className='link' href="https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=16&ct=1696693683&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fnlp%3d1%26state%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC9pbmJveC8%26RpsCsrfState%3d3dba040c-e284-3844-bc53-2088df322343&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015" target="_blank" rel="noopener noreferrer">
                <MdEmail className='icon'></MdEmail>
                <span className='label'>Email</span>
            </a>
            <a className='link' href="https://www.google.com/drive/" target="_blank" rel="noopener noreferrer">
                <DiGoogleDrive className='icon'></DiGoogleDrive>
                <span className='label'>Google Drive</span>
            </a>
            </div>
            <div className='row'>
            <a className='link' href="https://docs.google.com/document/u/0/" target="_blank" rel="noopener noreferrer">
                <SiGoogledocs className='icon'></SiGoogledocs>
                <span className='label'>Google Docs</span>
            </a>
            <a className='link' href="https://docs.google.com/presentation/u/0/" target="_blank" rel="noopener noreferrer">
                <SiGoogleslides className='icon'></SiGoogleslides>
                <span className='label'>Google Slides</span>
            </a>
            <a className='link' href="https://docs.google.com/spreadsheets/u/0/" target="_blank" rel="noopener noreferrer">
                <SiGooglesheets className='icon'></SiGooglesheets>
                <span className='label'>Google Sheets</span>
            </a>
            </div>
            <div className='row'>
                <a className='link' href="https://www.wolframalpha.com/" target="_blank" rel="noopener noreferrer">
                    <SiWolfram className='icon'></SiWolfram>
                    <span className='label'>Wolfram Alpha</span>
                </a>
                <a className='link'>
                    <CgScreenMirror className='icon'></CgScreenMirror>
                    <span className='label'>Screencast</span>
                </a>
                <a className='link' href="https://play.google.com/store/games?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
                    <BiLogoPlayStore className='icon'></BiLogoPlayStore>
                    <span className='label'>Google Play Store</span>
                </a>
            </div>
        </div>
    )
}

export default Productive;

