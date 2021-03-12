import React from 'react'
import "./SidebarOption.css"

function SidebarOption( { onClick, Icon, title, number, selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebar_active"}`} onClick={onClick}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    )
}

export default SidebarOption
