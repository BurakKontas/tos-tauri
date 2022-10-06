import React from "react";

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BugReportIcon from '@mui/icons-material/BugReport';

import { useNavigate } from "react-router-dom";

import "./index.css";
import DrawerIcon from "../../components/DrawerIcon";
import { DarkMode, LightMode } from "@mui/icons-material";

//redux
import { changeTheme } from "../../redux/reducers/theme";
import { changeDrawer } from "../../redux/reducers/drawer";
import { useDispatch, useSelector } from "react-redux";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const Boilerplate = ({ children }) => {
  const dispatch = useDispatch();
  var open = useSelector((state) => state.drawer.drawer)
  const handleDrawer = () => {
    dispatch(changeDrawer())
  };

  const theme = useTheme();

  return <Box sx={{ display: 'flex' }}>
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawer}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <List>
        <DrawerIcon path="/" text="Home" >
          <HomeIcon />
        </DrawerIcon>
        <DrawerIcon path="/test" text="Test" >
          <BugReportIcon />
        </DrawerIcon>
      </List>
      <List className="DrawerListBottom">
        <DrawerIcon path="/ayarlar" text="Ayarlar">
          <SettingsIcon />
        </DrawerIcon>
        <DrawerIcon text= {(theme.palette.mode === "dark") ? "Gece Modu" : "Sabah Modu"} onClick={() => {dispatch(changeTheme())}}>
        {((theme.palette.mode === "dark") ? <DarkMode /> : <LightMode />)}
        </DrawerIcon>
      </List>
    </Drawer>
      {children}
  </Box>
}

export default Boilerplate;