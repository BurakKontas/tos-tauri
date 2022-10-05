import { Link } from "@mui/material";
import React from "react";
import Boilerplate from "../Boilerplate";

import "./index.css";

const Home = () => {
    return <div>
        <Boilerplate>
            <p>Hello World</p>
            <Link href="/test" variant="caption">To Test</Link>
        </Boilerplate>
    </div>
}

export default Home;