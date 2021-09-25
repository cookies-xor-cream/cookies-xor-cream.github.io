import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

type Props  = {
		currentPage: string | '/';
};
	
const Navbar: React.FC<Props> = ({ currentPage }) => (
	<nav>
		<ol>
			<li><a href="/">cookies-xor-cream</a></li>
			<li><div></div></li>
			<li><a href="/projects"><i>Projects</i></a></li>
			<li><a href="/contact"><i>Contact</i></a></li>
			<li><a href="/about"><i>About</i></a></li>
		</ol>
	</nav>
)

export default Navbar;