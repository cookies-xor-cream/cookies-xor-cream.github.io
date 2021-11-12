import * as React from 'react';

import InfoGrid from "../../../components/projects/info-grid";

import BoidsVid from "/src/videos/boids_demo.webm";

import {
    FaArrowsAlt
} from "react-icons/fa";

import {
    BsTriangleHalf
} from "react-icons/bs";

import techlinks from '../techlinks';

const logoSize = 36;

export default <InfoGrid
    vidSrc={BoidsVid}
    timeEstimate="1 week"
    difficulty={2}
    overview="Simulation of emergent bird-like behaviours using simple rules."
    techStack={[
        techlinks.cpp,
        techlinks.sfml
    ]}
    prereqs={[
        { logo: FaArrowsAlt, size: logoSize, name: "Vectors"},
        { logo: BsTriangleHalf, size: logoSize, name: "Trig"}
    ]}
/>