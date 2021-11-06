import * as React from "react";
import Skill from "./skill";

interface Props{
    skillList: {
        logos: any[];
        skillLevel: number;
    }[];
};

const skills: React.FC<Props> = ({ skillList }) => (
    <ul>
        {
            skillList.map(skill => (
                <li>
                    <Skill logos={skill.logos} skillLevel={skill.skillLevel} />
                </li>
            ))
        }
    </ul>
);

export default skills
