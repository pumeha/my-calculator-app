'use client';
import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';
import { Brightness6Outlined } from '@mui/icons-material';
export default function AppBar(){
    return (    
        <MuiAppBar position="fixed"> 
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold' }}>
                    Calculator
                </Typography>
                <Brightness6Outlined />
            </Toolbar>
        </MuiAppBar>
    );
}