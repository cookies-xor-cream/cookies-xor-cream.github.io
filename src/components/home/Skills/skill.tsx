import * as React from "react";
import SkillBar from "../../slidebar";

interface Props{
    logos: any[];
    skillLevel: number;
};

const skill: React.FC<Props> = ({ logos, skillLevel  }) => (
    <ul>
        <li>
            {logos.map(Logo => <Logo size={32} />)}
        </li>

        <li>
            <SkillBar value={skillLevel} flipped />
        </li>
    </ul>
);

export default skill
