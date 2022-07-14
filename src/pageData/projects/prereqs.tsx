import {
    FaArrowsAlt,
    FaTree,
    FaCubes
} from "react-icons/fa";

import {
    BsTriangleHalf
} from "react-icons/bs";

const logoSize = 36;

export default {
    vectors: { logo: FaArrowsAlt, size: logoSize, name: "Vectors" },
    trig: { logo: BsTriangleHalf, size: logoSize, name: "Trigonometry" },
    trees: { logo: FaTree, size: logoSize, name: "Trees" },
    matrices: {logo: FaCubes, size: logoSize, name: "Matrices"},
}