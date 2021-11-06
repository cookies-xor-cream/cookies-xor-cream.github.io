import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./styles/slidebar.module.scss";

type Props = {
    value: number;
};
	
const slideBar: React.FC<Props> = ({ value }: Props) => (
	<div className={styles.slideBar}>
        <div className={styles[`_${value}`]} />
    </div>
);

export default slideBar;