import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/flat_design_concept.png";
import Common from "./Common";

const About = () => {
    return (
        <>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btnname="Contact Now" />
        </>
    );
}

export default About;