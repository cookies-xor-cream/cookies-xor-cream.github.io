import * as React from "react";
import Post from "./post";

interface Props{
    posts: Object[];
};

const recentPosts: React.FC = ({ posts }) => (
    posts.map(post => (
        <Post />
    ))
);

export default recentPosts
