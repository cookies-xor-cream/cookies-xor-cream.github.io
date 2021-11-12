import {
    FaReact,
    FaSass,
    FaGithub,
  } from 'react-icons/fa';
  
  import {
    GrGatsbyjs,
    GrGraphQl,
  } from 'react-icons/gr';

  const techurl = "/technologies";

  export default [
    { logo: FaReact, name: `<a href=${techurl}#react> ReactJS </a>` },
    { logo: GrGatsbyjs, name: `<a href=${techurl}#gatsby> GatsbyJS </a>` },
    { logo: FaSass, name: `<a href=${techurl}#sass> Sass </a>` },
    { logo: GrGraphQl, name: `<a href=${techurl}#graphql> GraphQL </a>` },
    { logo: FaGithub, name: `<a href=${techurl}#gh-pages> Github Pages </a>` }
];