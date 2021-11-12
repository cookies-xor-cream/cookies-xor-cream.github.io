import * as React from "react";

interface Props{
    Logo: any[];
    name: string;
    size: number;
};

const Entry: React.FC<Props> = ({ Logo, name, size }) => (
    <li><Logo size={size} /> <span dangerouslySetInnerHTML={{__html : name}} /> </li>
);

export default Entry
