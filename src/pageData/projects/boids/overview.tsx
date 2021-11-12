import * as React from 'react';

import InfoGrid from "../../../components/projects/info-grid";

import BoidsVid from "/src/videos/boids_demo.webm";

import techlinks from '../techlinks';
import prereqs from '../prereqs';

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
        prereqs.vectors,
        prereqs.trig
    ]}
/>