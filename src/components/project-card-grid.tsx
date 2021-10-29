import * as React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./project-card";

import * as styles from "./styles/project-card.module.scss";

type Props = {
	projectDetailsList: Object[];
};
	
const ProjectCardGrid: React.FC<Props> = ({ projectDetailsList }: Props) => (
    <div className={styles.projectGrid}>
        {projectDetailsList.map((projectDetails: Object) =>
            <ProjectCard projectDetails={projectDetails as any} />
        )}
    </div>
);

export default ProjectCardGrid;