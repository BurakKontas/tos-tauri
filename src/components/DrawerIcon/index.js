import React from "react";

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

import "./index.css";



const DrawerIcon = ({ text, path, children, onClick }) => {
    const Navigate = useNavigate();

    return (    
    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
        <ListItemButton
        sx={{
            minHeight: 48,
            justifyContent: true ? 'initial' : 'center',
            px: 2.5,
        }}
        onClick = {() => {
            if(path) {
                Navigate(path)
            } else {
                onClick()
            }
        }}
        >
        <ListItemIcon
            sx={{
            minWidth: 0,
            mr:  true ? 3 : 'auto',
            justifyContent: 'center',
            }}
        >
            {children}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: true ? 1 : 0 }} />
        </ListItemButton>
    </ListItem>
    )
}

export default DrawerIcon;