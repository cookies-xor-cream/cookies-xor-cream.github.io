import * as React from "react";
import Post from "./post";

import * as styles from "./post.module.scss";

interface Props{
    posts: {
        header: string;
        desc: string;
        readTime: string;
    }[];
};

const recentPosts: React.FC = ({ posts }) => (
    <ul className={styles.recentPosts}>
        {
            posts.map(post => (
                <li>
                    <Post
                        href={post.href}
                        header={post.header}
                        description={post.desc}
                        readTime={post.readTime}
                    />
                </li>
            ))
        }
    </ul>
);

export default recentPosts
