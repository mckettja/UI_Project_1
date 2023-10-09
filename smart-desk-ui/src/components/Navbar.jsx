import './Navbar.css'

import { AiOutlineWifi } from "react-icons/ai";
import LiveClock from './LiveClock.jsx';

function Navbar() {
    return (
        <div className='nav'>
            <LiveClock></LiveClock>
            <AiOutlineWifi className='wifi'></AiOutlineWifi>
        </div>
    )
}

export default Navbar;