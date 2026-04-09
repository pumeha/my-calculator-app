'use client';
import {IconButton, AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import { Brightness6Outlined } from '@mui/icons-material';
import { useTheme } from '@/context/themeContext';


export default function AppBar(){

const {toggleTheme} = useTheme();



    return (    
        <MuiAppBar position="fixed"> 
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold' }}>
                    Calculator
                </Typography>
                <IconButton color="inherit" onClick={toggleTheme}>    
                    <Brightness6Outlined />
                </IconButton>
            </Toolbar>
        </MuiAppBar>
    );
}