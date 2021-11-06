import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "/src/components/layout";
import Seo from "/src/components/seo";

import InfoGrid from "/src/components/projects/info-grid";

import QuadVid from "/src/videos/artorias_quadtree.webm";

import * as styles from "../project-styles.module.scss";

import { FaPython, FaTree } from "react-icons/fa";
import { GiPillow } from "react-icons/gi";

const IndexPage: React.FC = () => (
    <Layout currentPage="projects">
        <Seo/>
        <h1>Quadtree Image Compression</h1>

        <InfoGrid
            vidSrc={QuadVid}
            timeEstimate="1 week"
            difficulty={6}
            overview="The compression of images through a compact tree representation of regions of colour."
            techStack={[
                { logo: FaPython, size: 36, name: "Python" },
                { logo: GiPillow, size: 36, name: "PIL (Pillow)" }
            ]}
            prereqs={[
                { logo: FaTree, size: 36, name: "Trees"}
            ]}
        />
        
        <div className={styles.projectPost}>
            <h2>
                What Is a Quadtree?
            </h2>

            <h3>
                Structure of a Quadtree
            </h3>
            <p>
                A quadtree is a tree where each node is either a leaf or has four children. It is akin to a binary tree but with a branching factor of four instead of two.
            </p>

            <p>
                The quadtree represents a rectangular region of space, and each branch recursively represents quadrant subdivisions of that space. All nodes at depth two of the tree will represent quadrants of the entire area, all nodes at depth three will represent quadrants of those quadrants, and so on. 
            </p>

            <h3>
                How Does It Relate To Image Compression?
            </h3>
            <p>
                Every image is digitally represented as a set of pixels, and each pixel can be thought of as the leaf node of a quadtree. Each leaf node of the quadtree represents a single colour in the image.
                What if we don't need the image to have pixel-perfect colour information? 
            </p>

            <p>
                Think of an image that has little colour variation in some regions of the image, for example a backdrop of the sky will be roughly the same shade of blue throughout. We do not need to represent all individual pictures in such a region and can instead represent it by a big blue node that's many pixels in width and height.
            </p>

            <h2>
                Constructing The Quadtree
            </h2>
            
            <h3>
                Top-down Construction
            </h3>
            <p>
                When constructing the quadtree it is done top-down generally for ease of use, rather than bottum-up like the explanation I have provided. So what determines how we construct such a tree via a top-down approach?
            </p>

            <p>
                We start with the root node of the quadtree and we set that as being the whole image. Now we need to work out the colour of this node. It will be set to the average colour of all pixels within the node, which is the average colour of the whole image.
            </p>

            <p>
                Now we will check if the colour of the pixels of the region vary too much from the average colour (this will be explained later). If they vary more than a given threshold then the quadtree will be broken down into four quadrants and the same splitting process will be recursively applied to them until either a certain maximum depth is reached or the node represents the pixels in it to a satisfactory degree of accuracy.
            </p>

            <h3>
                Result and Caveats
            </h3>
            <p>
                This will result in a tree that accurately represents the image with a minimal number of nodes and therefore a minimal number of bytes. In theory this will preserve the majority of the detail and fidelity of the image as the data lost will be due to regions of sparse colour variation.
            </p>

            <p>
            Nevertheless this is a lossy compression algorithm and therefore a compromise must be made between quality and file size, and in images with very sparse, large backgrounds (which this compression algorithm works well for) there will often be seams in said background when there are gradual colour variations such as gradients.
            </p>

            <h2>
                Image Construction
            </h2>
            <p>
                The construction of the image from the quadtree is fairly straight forward. It begins with a blank canvas and the tree is traversed recursively (order doesn't matter). At every leaf node the quadrant that the node represents will be filled by the representative colour of the node (remember, this is the average colour of the node, and will be elaborated on later).
            </p>

            <p>
                To construct an animation (like the one at the top of the page) the frames can be created by rendering nodes at a limited depth instead of rendering only leaf nodes. This will cause the rendering to treat nodes of the given depth as if they were leaf nodes.
            </p>

            <p>
                Since all the children of a node represent the entire area of their parent without any overlap, then all the leaf nodes will represent exactly the area of the image.
            </p>

            <h2>
                Formalizing Definitions
            </h2>

            <p>
                Formalizing what the 'average' colour and how much 'deviation' of colour there is in a certain region is the last step to implement the algorithm, and thankfully by treating colours as three dimensional vectors, the underlying math becomes much simpler
            </p>

            <h3>
                Average Colour
            </h3>
            <p>
                Lorem ipsum
            </p>

            <h3>
                Standard Deviation of Colours
            </h3>
            <p>
                Lorem ipsum
            </p>

            <h2>
                Pros and Cons of Quadtree Compression
            </h2>
            <h3>
                Pros
            </h3>
            <ul>
                <li>Has varying resolution across the image</li>
                <li>Simple to understand and implement</li>
                <li>Little math pre-requisites involved</li>
                <li>Can be combined with generalized lossless compression: <ul><li>Huffman Coding</li></ul></li>
            </ul>

            <h3>
                Cons
            </h3>
            <ul>
                <li>Works poorly when image doesn't have varying</li>
                <li>Can result in visible seams on the image</li>
                <li>Outclassed by more modern compression algorithms: <ul><li>Frequency-transform based compressions</li></ul></li>
            </ul>
        </div>
    </Layout>
)

export default IndexPage
