import './Productive.css'

import { BsListUl } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { DiGoogleDrive } from "react-icons/di"
import { SiGoogledocs, SiGoogleslides, SiGooglesheets, SiWolfram } from "react-icons/si"
import { CgScreenMirror } from "react-icons/cg";
import { BiLogoPlayStore } from "react-icons/bi";

function Productive () {
    return(
        <div className='productive'>
            <a href='/other'>Switch Modes</a>
            <div className='row'>
                <BsListUl className='app'></BsListUl>
                <MdEmail className='app'></MdEmail>
                <DiGoogleDrive className='app'></DiGoogleDrive>
            </div>
            <div className='row'>
                <SiGoogledocs className='app'></SiGoogledocs>
                <SiGoogleslides className='app'></SiGoogleslides>
                <SiGooglesheets className='app'></SiGooglesheets>
            </div>
            <div className='row'>
                <SiWolfram className='app'></SiWolfram>
                <CgScreenMirror className='app'></CgScreenMirror>
                <BiLogoPlayStore className='app'></BiLogoPlayStore>
            </div>
        </div>
    )
}

export default Productive;

