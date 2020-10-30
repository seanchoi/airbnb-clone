import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core";
import {Link} from "react-router-dom"

function Header() {
    return (
        <div className="header">
            {/* logo button goes to homepage */}
            <Link to="/">
            <img class="header__icon" src="/airbnb.png"></img>
            </Link>
            <div className="header__center">
                <input type="text"/>
                <SearchIcon/>
            </div>
            <div className='header__right'>
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar/>
            </div>
        </div>
    )
}

export default Header
