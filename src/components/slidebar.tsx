import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./styles/slidebar.module.scss";

type Props = {
    skillLevel: number;
};
	
const slideBar: React.FC<Props> = ({ skillLevel }: Props) => (
	<div className={styles.slideBar}>
        <div className={styles[`_${skillLevel}`]} />
    </div>
);

export default slideBar;