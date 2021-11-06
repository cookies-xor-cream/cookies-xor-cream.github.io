import * as React from "react";
import Entry from "./entry";

interface Props{
    stack: {
        logo: any,
        name: string
    }[];
};

const TechStack: React.FC<Props> = ({ stack }) => (
    <ul>
        {
            stack.map(entry => (
                <Entry Logo={entry.logo} name={entry.name} />
            ))
        }
    </ul>
);

export default TechStack
