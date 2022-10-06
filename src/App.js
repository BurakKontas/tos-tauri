import React, { useLayoutEffect } from 'react';

//tauri
import { appWindow } from "@tauri-apps/api/window";

//screens
import ErrorPage from './screens/ErrorPage/index';
import Test from './screens/Test/index';
import Home from './screens/Home/index';

//router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//theme
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightBlue, indigo } from '@mui/material/colors';

//redux
import { useDispatch, useSelector } from 'react-redux';

//redux store functions
import { setDimensions } from './redux/reducers/dimensions';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/test",
    element: <Test />,
    errorElement: <ErrorPage />,
  },
]);

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: lightBlue,
          divider: lightBlue,
          background:{
            default:'#E5D4ED',
            paper:'#E5D4ED',
          },
          text: {
            primary: '#222',
            secondary: '#333',
          },
        }
      : {
          // palette values for dark mode
          primary: indigo,
          divider: indigo[700],
          background: {
            default: '#5941A9',
            paper: '#5941A9',
          },
          text: {
            primary: '#D4D4D4',
            secondary: '#D0D0D0',
          },
        }),
  },
});


const App = () => {
  var mode = useSelector((state) => state.theme.theme);
  const darkModeTheme = createTheme(getDesignTokens(mode));
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    appWindow.onResized((screen) => {
      dispatch(setDimensions({width:screen.payload.width,height:screen.payload.height}))
    });
  });

  return (
    <ThemeProvider theme={darkModeTheme}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </ThemeProvider>
  )
  
};

export default App;
