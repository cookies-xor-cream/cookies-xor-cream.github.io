import React from 'react';

import * as styles from "./projectTags.module.scss";

interface Props {
    tags: {
        color: string;
        name: string;
    }[];
};

const logoSize = 32;

const projectTags: React.FC<Props> = ({ tags }) => (
    <ul className={styles.projectIcons}>
        {
            tags.map(tag =>
                <li className={styles[tag.color]}> {tag.name} </li>
            )
        }
    </ul>
)

export default projectTags