import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaJs,
    FaJava,
    FaPython,
    FaLinux
} from 'react-icons/fa';

import {
    GrMysql
} from 'react-icons/gr';

import {
    GiPillow,
    GiSnakeTongue
} from 'react-icons/gi';

import {
    SiC,
    SiCplusplus,
    SiGnubash,
    SiPostgresql,
    SiTypescript,
    SiJavascript,
    SiSfml,
    SiNumpy
} from 'react-icons/si';

import {
    DiSqllite
} from 'react-icons/di';

const logoSize = 36;

const techurl = "/technologies";

export default {
    html:           { logo: FaHtml5,        size: logoSize,     name: `<a href='${techurl}#html'> HTML </a>`},
    css:            { logo: FaCss3,         size: logoSize,     name: `<a href='${techurl}#css'> CSS </a>`},
    javascript:     { logo: SiJavascript,   size: logoSize,     name: `<a href='${techurl}#js'> Javascript </a>`},
    typescript:     { logo: SiTypescript,   size: logoSize,     name: `<a href='${techurl}#ts'> Typescript </a>`},
    python:         { logo: FaPython,       size: logoSize,     name: `<a href='${techurl}#python'> Python </a>`},
    java:           { logo: FaJava,         size: logoSize,     name: `<a href='${techurl}#java'> Java </a>`},
    c:              { logo: SiC,            size: logoSize,     name: `<a href='${techurl}#c'> C </a>`},
    cpp:            { logo: SiCplusplus,    size: logoSize,     name: `<a href='${techurl}#cpp'> C++ </a>`},
    linux:          { logo: FaLinux,        size: logoSize,     name: `<a href='${techurl}#linux'> Linux </a>`},
    bash:           { logo: SiGnubash,      size: logoSize,     name: `<a href='${techurl}#bash'> Bash </a>`},
    sfml:           { logo: SiSfml,         size: logoSize,     name: `<a href='${techurl}#sfml'> SFML </a>`},
    pillow:         { logo: GiPillow,       size: logoSize,     name: `<a href='${techurl}#pillow'> PIL/Pillow </a>` },
    numpy:          { logo: SiNumpy,        size: logoSize,     name: `<a href='${techurl}#numpy'> NumPy </a>` },
    pygame:         { logo: GiSnakeTongue,  size: logoSize,     name: `<a href='${techurl}#pygame'> PyGame </a>` },
}