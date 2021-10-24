import * as React from "react";
import { Link } from "gatsby";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import ProjectCardGrid from "../../components/project-card-grid";

import BoidVid from "../../videos/boids_demo.webm";
import QuadVid from "../../videos/artorias_quadtree.webm";
import GraphicsVid from "../../videos/cat_graphics_demo.webm";
import MazeGenVid from "../../videos/mazejs_gen.webm";
import MazeSolveVid from "../../videos/mazejs_solve.webm";
import DFTVid from "../../videos/wile_dft.webm"

const pdl = [
  {
    vid: DFTVid,
    title: "DFT",
    description: "Bottom Text"
  },
  {
    vid: QuadVid,
    title: "Quadtree Compression",
    description: "Bottom Text"
  },
  {
    vid: BoidVid,
    title: "Boids",
    description: "Bottom Text"
  },
  {
    vid: MazeGenVid,
    title: "Maze Generator/Solver",
    description: "Bottom Text"
  },
  {
    vid: GraphicsVid,
    title: "Graphics Engine",
    description: "Bottom Text"
  },
]

const SecondPage: React.FC = () => (
  <Layout currentPage="projects">
    <Seo title="projects" />
    <h1>Projects</h1>
    <ProjectCardGrid projectDetailsList={pdl} />
  </Layout>
)

export default SecondPage
