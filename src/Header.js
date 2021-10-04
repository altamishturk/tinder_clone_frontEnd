import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import TinderLogo from './img/tinder-logo.png';
import ForumIcon from '@material-ui/icons/Forum';
import './header.css';


export default function Header() {
    return (
        <div className='header'>
            {/* persion icon  */}
            <IconButton className='icon-btn'>
                <PersonIcon className='icon' fontSize='large' />
            </IconButton>

            {/* logo  */}
            <img src={TinderLogo} alt="logo" className='logo' />

            {/* chat icon  */}
            <IconButton className='icon-btn'>
                <ForumIcon className='icon' fontSize='large' />
            </IconButton>
        </div>
    )
}
