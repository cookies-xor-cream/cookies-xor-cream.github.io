import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./styles/skill-bar.module.scss";

type Props = {
    skillLevel: number;
};
	
const skillBar: React.FC<Props> = ({ skillLevel }: Props) => (
	<div className={styles.skillBar}>
        <div className={styles[`_${skillLevel}`]} />
    </div>
);

export default skillBar;