import * as React from "react";
import Post from "./post";

import * as styles from "./post.module.scss";

interface Props{
    posts: {
        title: string;
        overview: string;
        timeToRead: string;
        slug: string;
    }[];
};

const recentPosts: React.FC = ({ posts }) => (
    <ul className={styles.recentPosts}>
        {
            posts.map(post => (
                <li>
                    <Post
                        href={post.slug}
                        title={post.title}
                        description={post.overview}
                        timeToRead={post.timeToRead}
                    />
                </li>
            ))
        }
    </ul>
);

export default recentPosts
