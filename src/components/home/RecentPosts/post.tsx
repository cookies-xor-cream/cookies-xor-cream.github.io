import * as React from "react";

import * as styles from "./post.module.scss";

import { FaClock } from "react-icons/fa";

interface Props {
    title: string;
    description: string;
    timeToRead: string;
    href: string;
};

const post: React.FC<Props> = ({ href, title, description, timeToRead }) => (
    <a href={href} className={styles.postEntry}>
        <h4> {title} </h4>
        <p>
            {description}
        </p>

        <div className={styles.timeToRead}>
            <FaClock size={14} />
            {timeToRead} minute{timeToRead !== 1 && "s"}
        </div>
    </a>
);

export default post
