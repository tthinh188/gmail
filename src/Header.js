import React from 'react'
import "./Header.css"
import { Avatar, IconButton } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationsIcon from '@material-ui/icons/Notifications'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from './features/userSlice'
import { auth } from "./firebase"
function Header() {
    const history = useHistory();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div className="header_left">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img 
                    onClick={()=> history.push("/")}
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt=""
                />
            </div>

            <div className="header_middle">
                <IconButton>
                    <SearchIcon />
                </IconButton>

                <input placeholder="Search mail" type="text"/>
                <IconButton>
                    <ArrowDropDownIcon className="header_inputCaret"/>
                </IconButton>
            </div>

            <div className="header_right">
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <Avatar
                    onClick={() => auth.signOut()} 
                    src={user?.photoURL}/>
            </div>
        </div>
    )
}

export default Header
