import tagdata from "./tagdata";

import BoidVid from "/src/videos/boids_demo.webm";
import QuadVid from "/src/videos/artorias_quadtree.webm";
import GraphicsVid from "/src/videos/cat_graphics_demo.webm";
import MazeGenVid from "/src/videos/mazejs_gen.webm";
import MazeSolveVid from "/src/videos/mazejs_solve.webm";
import DFTVid from "/src/videos/wile_dft.webm";

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
  GiPillow
} from 'react-icons/gi';

import {
  SiC,
  SiCplusplus,
  SiGnubash,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiSfml
} from 'react-icons/si';

import {
  DiSqllite
} from 'react-icons/di';

const logoSize = 36;

export default [
    {
      vid: DFTVid,
      title: "DFT",
      description: "Graphs the contours of an image via epicycles by using the discrete Fourier transform.",
      tags: [tagdata.imageprocessing],
      href: "/projects/dft-sketch",
    },
    {
      vid: QuadVid,
      title: "Quadtree Compression",
      description: "Compresses an image by recursively decomposing areas of high deviation into four smaller sections.",
      tags: [tagdata.imageprocessing],
      href: "/projects/quadtree",
    },
    {
      vid: BoidVid,
      title: "Boids",
      description: "Simulates bird-like or fish-like behaviours through three simple rules: separation, alignment, and cohesion. <br/><br/> An example of emergent behaviours.",
      tags: [tagdata.simulation],
      href: "/projects/boids",
    },
    {
      vid: MazeGenVid,
      title: "Maze Generator/Solver",
      description: "A program that generates and solves mazes using a variety of seemingly unrelated graph algorithms.",
      tags: [tagdata.graphtheory],
      href: "/projects/maze-js",
    },
    {
      vid: GraphicsVid,
      title: "Graphics Engine",
      description: "A rudimentary graphics engine that runs solely on 1 CPU thread, written to practice the mathematical foundations of graphics programming.",
      tags: [tagdata.interactive],
      href: "/projects/graphics-engine",
      },
  ]