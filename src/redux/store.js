import { configureStore } from "@reduxjs/toolkit";
import dimensionsReducer from './reducers/dimensions'
import themeReducer from './reducers/theme'
import drawerReducer from './reducers/drawer'

export default configureStore({
    reducer:{
        dimensions:dimensionsReducer,
        theme:themeReducer,
        drawer:drawerReducer
    },
})