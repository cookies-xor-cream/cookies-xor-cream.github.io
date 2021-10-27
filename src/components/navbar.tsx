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
	const paths = ["/projects", "/contact"];
	
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
	});

	return (
		<nav>
			<ol>
				{mobile &&
				<button onClick={toggleOpen}>
					<FontAwesomeIcon size='2x' icon={faBars}></FontAwesomeIcon>
				</button>
				}
				<li><a href="/" className={currentPage == "/" ? "active-nav" : ""}>cookies-xor-cream</a></li>

				{!mobile && <li><div></div></li>}

				{((mobile && !open) || (!mobile)) &&
					<>
						{paths.map(path => {
							const navItemText = `${path[1].toUpperCase()}${path.slice(2)}`;
							const navItemClass = path.slice(1) === currentPage
								? "active-nav"
								: "";
							return (
								<li>
									<a href={path} className={navItemClass}>
										<i>{navItemText}</i>
									</a>
								</li>
							)
						}
						)}
					</>
				}
			</ol>
		</nav>
	);
}

export default Navbar;