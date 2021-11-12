import React from "react";
import styled from "styled-components";

const NavBar = () => {
	return (
		<NavBarStyles>
			<MenuItemWrapper>
				<Logo>LOGO</Logo>

				<NavItem> ABOUT</NavItem>
				<NavItem> COMMUNITY</NavItem>
				<NavItem> LOCATION</NavItem>
				<NavItem> OUR MENU</NavItem>
				<NavItem> RECIPES</NavItem>
			</MenuItemWrapper>
			<div>
				<NavItem> CONTACT</NavItem>
				<NavItem> LOGIN</NavItem>
			</div>
		</NavBarStyles>
	);
};

export default NavBar;

const NavBarStyles = styled.div`
	position: fixed;
	top: 0;
	display: flex;
	justify-content: space-between;
	width: 100vw;
	background-color: transparent;
	padding: 1rem 4% 0 4%;
	z-index: 100;
`;
const Logo = styled.div`
	text-align: right;
	font: normal normal bold 28px/23px DIN Condensed;
	letter-spacing: 0px;
	color: #333333;
	margin-right: 1rem;
`;

const NavItem = styled.span`
	text-align: center;
	font: normal normal bold 18px/52px DIN Condensed;
	letter-spacing: 0.18px;
	color: #333333;
	padding: 0 2rem;
	cursor: hand;
`;

const MenuItemWrapper = styled.div`
	display: flex;
	align-items: center;
`;
