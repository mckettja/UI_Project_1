import './Navbar.css'

import { AiOutlineWifi } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io"
import LiveClock from './LiveClock.jsx';

function Navbar() {
    return (
        <div className='nav'>
            <LiveClock></LiveClock>
            <AiOutlineWifi className='wifi'></AiOutlineWifi>
            <IoMdSettings className='settings'></IoMdSettings>
        </div>
    )
}

export default Navbar;