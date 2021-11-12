import * as React from "react"

import InfoGrid from "/src/components/projects/info-grid";
import QuadVid from "/src/videos/artorias_quadtree.webm";

import techlinks from "../techlinks";
import prereqs from "../prereqs";

export default <InfoGrid
    vidSrc={QuadVid}
    timeEstimate="1 week"
    difficulty={3}
    overview="The compression of images through a compact tree representation of regions of colour."
    techStack={[
        techlinks.python,
        techlinks.pillow
    ]}
    prereqs={[
        prereqs.trees
    ]}
/>