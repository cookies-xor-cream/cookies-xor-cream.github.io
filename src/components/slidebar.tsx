import * as React from "react";
import PropTypes from "prop-types";

import * as styles from "./styles/slidebar.module.scss";

import cc from 'classcat';

type Props = {
    value: number;
    flipped?: boolean;
};
	
const slideBar: React.FC<Props> = ({ value, flipped }: Props) => (
	<div className={cc({
        [styles.slideBar]: true,
        [styles.flipped]: flipped
    })}>
        <div className={styles[`_${value}`]} />
    </div>
);

export default slideBar;