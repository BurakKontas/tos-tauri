import React from "react";
import Boilerplate from "../Boilerplate";
import { Link } from '@mui/material';

import "./index.css";

const Test = () => {
    return <div>
        <Boilerplate>
        <Link href="/" variant={"body2s"}>To Home</Link>
        </Boilerplate>
    </div>
}

export default Test;