import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import * as styles from "./styles/project-card.module.scss";

type Props = {
	projectDetails: {
		vid: any,
		title: string,
		description: string,
	};
};
	
const ProjectCard: React.FC<Props> = ({ projectDetails }: Props) => (
	<a href="/" className={styles.projectCard}>
		<div>
			<video autoPlay loop>
				<source src={projectDetails.vid} />
			</video>

			<h2>
				{projectDetails.title}
			</h2>

			<p dangerouslySetInnerHTML={{__html: projectDetails.description}} />
		</div>
	</a>
);

export default ProjectCard;