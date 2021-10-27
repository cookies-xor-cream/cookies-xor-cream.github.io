import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

type Props  = {
		currentPage: string | '/';
};
	
const Navbar: React.FC<Props> = ({ currentPage='/' }) => {
	const mobileWidth = 768;
	const isMobile = () => window.innerWidth < 768;

	const [mobile, setMobile] = useState<boolean>(isMobile());
	
	const onWindowResize = () => {
		setMobile(isMobile());
	}
	
	const [open, setOpen] = useState<boolean>(false);
	const toggleOpen = () => setOpen(!open);
	
	useEffect(() => {
		window.addEventListener('resize', onWindowResize);
	})

	return (
		<nav>
			<ol>
				{mobile &&
				<button onClick={toggleOpen}>
					<FontAwesomeIcon size='2x' icon={faBars}></FontAwesomeIcon>
				</button>
				}
				<li><a href="/">cookies-xor-cream</a></li>

				{!mobile && <li><div></div></li>}

				{((mobile && !open) || (!mobile)) &&
					<>
						<li><a href="/projects"><i>Projects</i></a></li>
						<li><a href="/contact"><i>Contact</i></a></li>
					</>
				}
			</ol>
		</nav>
	);
}

export default Navbar;