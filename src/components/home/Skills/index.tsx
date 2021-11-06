import * as React from "react";
import Skill from "./skill";

interface Props{
    posts: Object[];
};

const skills: React.FC = ({ skillList }) => (
    skillList.map(skill => (
        <Skill />
    ))
);

export default skills
