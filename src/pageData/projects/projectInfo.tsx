import BoidVid from "/src/videos/boids_demo.webm";
import QuadVid from "/src/videos/artorias_quadtree.webm";
import GraphicsVid from "/src/videos/cat_graphics_demo.webm";
import MazeGenVid from "/src/videos/mazejs_gen.webm";
import MazeSolveVid from "/src/videos/mazejs_solve.webm";
import DFTVid from "/src/videos/wile_dft.webm";

export default [
    {
      vid: DFTVid,
      title: "DFT",
      description: "Graphs the contours of an image via epicycles by using the discrete Fourier transform.",
      href: "/projects/dft-sketch",
    },
    {
      vid: QuadVid,
      title: "Quadtree Compression",
      description: "Compresses an image by recursively decomposing areas of high deviation into four smaller sections.",
      href: "/projects/quadtree",
    },
    {
      vid: BoidVid,
      title: "Boids",
      description: "Simulates bird-like or fish-like behaviours through three simple rules: separation, alignment, and cohesion. <br/><br/> An example of emergent behaviours.",
      href: "/projects/boids",
    },
    {
      vid: MazeGenVid,
      title: "Maze Generator/Solver",
      description: "A program that generates and solves mazes using a variety of seemingly unrelated graph algorithms.",
      href: "/projects/maze-js",
    },
    {
      vid: GraphicsVid,
      title: "Graphics Engine",
      description: "A rudimentary graphics engine that runs solely on 1 CPU thread, written to practice the mathematical foundations of graphics programming.",
      href: "/projects/graphics-engine",
      },
  ]