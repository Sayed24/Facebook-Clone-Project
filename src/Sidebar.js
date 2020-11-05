import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHositalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fsac1-1.fna.fbcdn.net/v/t31.0-1/p200x200/26910252_703819823154121_6652453779003603140_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=P6mpHHKXF18AX9hKYuQ&_nc_oc=AQkpN8P8OBxCd-8DitgE4X2UVmawQLLX5-vd2IgTGP16GQWskQes6ifCv0jR4GHOSIP7w4h62zpi2AewXJOA7bW1&_nc_ht=scontent.fsac1-1.fna&tp=6&oh=8707be421857777f6c26885d9664f021&oe=5FC94D5D" title="Sayed Sadat" />
            <SidebarRow Icon={LocalHositalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Maketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
        </div>
    );
}

export default Sidebar;
