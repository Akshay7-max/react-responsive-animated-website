import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/flat-build-illustration-website.png";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow your buisness with " imgsrc={web} visit="/service" btnname="Get Started" />
        </>
    );
}

export default Home;