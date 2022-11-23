// import "./Header.css "
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from "./HeaderOptions";
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header(){
    return(
        <div className="header">
            <div className="header-left">
                <img src="/linkedin-logo.png"alt="logo"></img>
                <div className="header-search">
                    <SearchIcon />
                    <input type="text"/>
                </div>

            </div>
            <div className="header-right">
                <HeaderOptions Icon={HomeIcon} title="Home"/>
                <HeaderOptions Icon={SupervisorAccountIcon}
                title="My Network"/>
                <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOptions Icon={MessageIcon} title="Messaging" />
                <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            </div>
        </div>
    )
}