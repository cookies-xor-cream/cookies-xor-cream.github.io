import * as React from "react";

interface Props{
    Logo: any[];
    name: string;
};

const Entry: React.FC<Props> = ({ Logo, name }) => (
    <li><Logo size={56} /> {name}</li>
);

export default Entry
