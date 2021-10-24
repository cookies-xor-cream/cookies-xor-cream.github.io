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
    description: "Graphs the contours of an image via epicycles by using the discrete Fourier transform."
  },
  {
    vid: QuadVid,
    title: "Quadtree Compression",
    description: "Compresses an image by recursively decomposing areas of high colour deviation into four smaller sections"
  },
  {
    vid: BoidVid,
    title: "Boids",
    description: "Simulates bird-like or fish-like behaviours through three simple rules: separation, alignment, and cohesion. <br/><br/> An example of emergent behaviours."
  },
  {
    vid: MazeGenVid,
    title: "Maze Generator/Solver",
    description: "A program that generates and solves mazes using a variety of seemingly unrelated graph algorithms."
  },
  {
    vid: GraphicsVid,
    title: "Graphics Engine",
    description: "A rudimentary graphics engine that runs solely on 1 CPU thread, written to practice the mathematical foundations of graphics programming."
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
