import React from 'react';
import './swipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

export default function SwipeButtons() {
    return (
        <div className='swipe-buttons'>
            <IconButton className='swipe-button-replay'>
                <ReplayIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipe-button-close'>
                <CloseIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipe-button-start'>
                <StarRateIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipe-button-favorite'>
                <FavoriteIcon fontSize='large' />
            </IconButton>
            <IconButton className='swipe-button-flash'>
                <FlashOnIcon fontSize='large' />
            </IconButton>

        </div>
    )
}
