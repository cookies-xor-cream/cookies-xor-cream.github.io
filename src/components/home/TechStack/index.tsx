import * as React from "react";
import Entry from "./entry";

interface Props{
    stack: {
        logo: any;
        name: string;
        size?: number;
    }[];
};

const TechStack: React.FC<Props> = ({ stack }) => (
    <ul>
        {
            stack.map(entry => (
                <Entry Logo={entry.logo} name={entry.name} size={entry.size || 56} />
            ))
        }
    </ul>
);

export default TechStack
