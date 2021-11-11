import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import * as styles from "./tech.module.scss";

interface Props {
    Logo: any;
    name: string;
    desc: string;
    id: string;
}

const techCard: React.FC<Props> = ({ Logo, name, desc, id }) => (
    <div className={styles.techCard} id={id}>
        <Logo size={32} />
        <h3>{name}</h3>
        <p>{desc}</p>
    </div>
)

export default techCard;