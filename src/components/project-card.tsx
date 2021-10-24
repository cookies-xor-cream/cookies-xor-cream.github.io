import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import * as styles from "./styles/project-card.module.scss";

import test from "../videos/boids_demo.webm";

type Props = {
	projectDetails: Object;
};
	
const ProjectCard: React.FC<Props> = ({ projectDetails }: Props) => (
	<a href="/" className={styles.projectCard}>
		<div>
			<video draggable="false" playsinline="" autoplay="" loop="" class="">
				<source src={test} />
			</video>

			<h2>
				Boids
			</h2>

			<p>
				Test
				test
			</p>
		</div>
	</a>
);

export default ProjectCard;