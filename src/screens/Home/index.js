import { Button } from "@mui/material";
import React from "react";
import Boilerplate from "../Boilerplate";

//redux
import { useSelector } from 'react-redux';

import "./index.css";

const Home = () => {
    const dimensions = useSelector((state) => {
        return {
            width:state.dimensions.width,
            height:state.dimensions.height
        }
    });
    return (
        <Boilerplate>
            <div className="main">
                <p>Home</p>
                <Button onClick={() => {
                    console.log(dimensions)
                }}>Get Dimensionss</Button>
            </div>
        </Boilerplate>
    )   
}

export default Home;