import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core';

const Footer = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>Dev-Desk</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;