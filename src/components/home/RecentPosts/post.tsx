import * as React from "react";

import * as styles from "./post.module.scss";

import { FaClock } from "react-icons/fa";

interface Props {
    header: string;
    description: string;
    readTime: string;
    href: string;
};

const post: React.FC<Props> = ({ href, header, description, readTime }) => (
    <a href={href} className={styles.postEntry}>
        <h4> {header} </h4>
        <p>
            {description}
        </p>

        <div className={styles.readTime}>
            <FaClock size={14} />
            {readTime}
        </div>
    </a>
);

export default post
