import * as React from "react";
import * as styles from "./infoGrid.module.scss";

import { FaClock, FaGithub} from "react-icons/fa";

import TechStack from "../home/TechStack";
import SlideBar from "../slidebar";

interface Props {
    vidSrc: string;
    overview: string;
    difficulty: number;
    timeEstimate: string;
    techStack: any;
    prereqs: any;
    githubLink?: string;
}

const InfoGrid: React.FC<Props> = ({
    vidSrc,
    overview,
    techStack,
    prereqs,
    difficulty,
    timeEstimate,
    githubLink,
}) => (
    <div className={styles.overviewWrapper}>
        <div className={styles.infoGrid}>
            <div className={styles.demoVid}>
                <video autoPlay muted loop className={styles.demoVideo}>
                    <source src={vidSrc} />
                </video>
                {githubLink &&
                    <a href={githubLink}>
                        <FaGithub />
                    </a>
                }
            </div>

            <div className={styles.overview}>
                <h3> Overview </h3>
                <p>
                    {overview}
                </p>
            </div>

            <div className={styles.difficulty}>
                <h3> Difficulty </h3>

                <SlideBar value={difficulty} />
            </div>

            <div className={styles.techStack}>
                <h3> Tech Stack </h3>

                <TechStack stack={techStack} />
            </div>

            <div className={styles.prerequisites}>
                <h3> Prerequisites </h3>

                <TechStack stack={prereqs} />
            </div>

            <div className={styles.timeEstimate}>
                <h3> Time Estimate </h3>

                <TechStack stack={[
                    { logo: FaClock, size: 36, name: timeEstimate }
                ]} />
            </div>
        </div>
    </div>
)

export default InfoGrid;