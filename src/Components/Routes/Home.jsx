import React from "react";
import "../../assets/css/home.css";
import Card from "../Content/Card";

import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <>
            <div className="hero">
                <a className="hero-link">
                <NavLink to="/nosotros">
                            CONOCENOS
                </NavLink>
                </a>
            </div>
            <Card/>
        </>
    );
};

export default Home;
