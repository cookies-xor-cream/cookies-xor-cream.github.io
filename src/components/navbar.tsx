import * as React from "react";
import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Cookie from "/src/images/cookie.png";

import cc from 'classcat';
import { useScrollYPosition } from "react-use-scroll-position";

type Props  = {
	currentPage: string | '/';
};

const Navbar: React.FC<Props> = ({ currentPage='/' }) => {
	const paths = ["/projects", "/contact", "/technologies"];
	
	const mobileWidth = 768;
	const isMobile = () => window.innerWidth < mobileWidth;
	const scrollY = useScrollYPosition();
	const dropShadow = useMemo(() => scrollY > 100, [scrollY])

	const [mobile, setMobile] = useState<boolean>(false);
	
	const onWindowResize = () => {
		setMobile(isMobile());
	}
	
	const [open, setOpen] = useState<boolean>(false);
	const toggleOpen = () => setOpen(!open);
	
	useEffect(() => {
		setMobile(isMobile);
		window.addEventListener('resize', onWindowResize);
	});

	return (
		<nav className={cc({
			['navUncollapse']: (mobile && open),
			['dropShadow']: dropShadow,
		})}>
			<ul>
				{mobile && (
					<button onClick={toggleOpen}>
						<FontAwesomeIcon size='2x' icon={faBars}></FontAwesomeIcon>
					</button>
				)}
				<li><a href="/" className={currentPage == "/" ? "active-nav" : ""}><img src={Cookie} width="32px" height="32px" /></a></li>

				{paths.map(path => {
					const navItemText = `${path[1].toUpperCase()}${path.slice(2)}`;
					const regex = new RegExp(path.slice(1));
					const navItemClass = regex.test(currentPage)
						? "active-nav"
						: "";

					return (
						<li key={path}>
							<a href={path} className={navItemClass}>
								{navItemText}
							</a>
						</li>
					)
				})}
			</ul>
		</nav>
	);
}

export default Navbar;