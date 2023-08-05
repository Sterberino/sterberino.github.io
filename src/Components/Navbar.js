import React, { useEffect } from "react"
import '../Styles/NavbarStyles.css'
import Icon from "./Icon";

import RotatingBackgroundGradientButton from "./RotatingBackgroundGradientButton.js";
import useScrollingUp from "../Hooks/useScrollingUp";
import BackgroundSpotlightButton from "./BackgroundSpotlightButton";
import useWindowSize from "../Hooks/useWindowSize";
import NavbarButton from "./NavbarButton";
import '../Styles/SideBarStyles.css'
import { SidebarContext } from "../App";

export default function Navbar({ Resume, navbarOpen }) {
    const {sidebarOpen, setSidebarOpen} = React.useContext(SidebarContext)

    const scrollingUp = useScrollingUp(true);
    const size = useWindowSize();

    const [buttonsOn, setButtonsOn] = React.useState(false);
    const [open, setOpen] = React.useState(true);

    React.useEffect(()=>{
        if(!scrollingUp && !sidebarOpen)
        {
            setOpen(false);
        }
        else if(scrollingUp && !sidebarOpen)
        {
            setOpen(true);
        }
    }, [scrollingUp])

    return (
        <div
            style = {{
                top: open ? "0px": "-70px"
            }} 
            className = "navbar">
            <Icon 
                shimmerAlways = {true} 
                maskUrl={`${process.env.PUBLIC_URL}Images/Icon.png`}
                style = {{height: "50%", alignSelf: "center"}}    
            />
            
                {size.x > 640 && <ul className = "nav-elements">
                    <li className="nav-element"><a className = "nav-anchor" href="#">About</a></li>
                    <li className="nav-element"><a className = "nav-anchor" href="#">Experience</a></li>
                    <li className="nav-element"><a className = "nav-anchor" href="#">Projects</a></li>
                    <li className="nav-element"><a className = "nav-anchor" href="#">Contact</a></li>
                    <li className="li-container">
                        <BackgroundSpotlightButton 
                            style ={{  
                                marginRight: '10px', 
                                marginLeft: '10px', 
                                alignSelf: 'center'
                            }}
                            text = {"Resume"}
                            HandleClick={()=>{
                                window.open(`${process.env.PUBLIC_URL}/Zachary Ruiz - Software Engineer.pdf`, '_blank')
                            }}
                        />
                    </li>
                </ul>}

                {size.x <= 640 && 
                    <NavbarButton OnClickEvent={()=>{setSidebarOpen(prev => !prev)}}/>
                }
        </div>
        )

}