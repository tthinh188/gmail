import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
import AddIcon from '@material-ui/icons/Add'
import SidebarOption from "./SidebarOption"
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import PersonIcon from '@material-ui/icons/Person'
import DuoIcon from '@material-ui/icons/Duo'
import PhoneIcon from '@material-ui/icons/Phone'
import { useDispatch } from 'react-redux'
import { openSendMessage, selectActiveOption, selectOption } from "./features/mailSlice"
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Sidebar() {
    const dispatch = useDispatch();
    const history = useHistory();

    const selectActive = useSelector(selectActiveOption);

    return (
        <div className="sidebar">
            <Button
                onClick={()=> dispatch(openSendMessage())}
                className="sidebar_compose"
                startIcon={<AddIcon fontSize="large" />}>
            Compose</Button>

            <SidebarOption Icon={InboxIcon} title="Inbox" number={50}
                selected={selectActive === "Inbox"}
                onClick={()=> {history.push("/")
                   dispatch(selectOption("Inbox"))
                }}
            />
            <SidebarOption 
                onClick={()=> dispatch(selectOption("Starred"))}
                selected={selectActive === "Starred"}
            Icon={StarIcon} title="Starred" number={50}/>

            <SidebarOption 
            onClick={()=> dispatch(selectOption("Snoozed"))}
            selected={selectActive === "Snoozed"}
            Icon={AccessTimeIcon} title="Snoozed" number={50}/>

            <SidebarOption onClick={()=> dispatch(selectOption("Important"))}
            selected={selectActive === "Important"}
            Icon={LabelImportantIcon} title="Important" number={50}/>

            <SidebarOption onClick={()=> dispatch(selectOption("Sent"))}
            selected={selectActive === "Sent"}
            Icon={NearMeIcon} title="Sent" number={50}/>

            <SidebarOption onClick={()=> dispatch(selectOption("Drafts"))}
            selected={selectActive === "Drafts"}
            Icon={NoteIcon} title="Drafts" number={50}/>
            
            <SidebarOption Icon={ExpandMoreIcon} title="More" number={50}/>

            <div className="sidebar_footer">
                <div className="sidebar_footerIcons">
                    <IconButton>
                        <PersonIcon/>
                    </IconButton>
                    <IconButton>
                        <DuoIcon/>
                    </IconButton>
                    <IconButton>
                        <PhoneIcon/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
