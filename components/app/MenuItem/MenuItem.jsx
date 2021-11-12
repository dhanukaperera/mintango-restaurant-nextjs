import React from "react";
import styled from "styled-components";

const MenuItem = () => {
	return (
		<MenuItemStyles>
			<p>QUINOA CROQUETTAS</p>
			<MenuBody>
				Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)
			</MenuBody>
			<PriceButton>£4.96</PriceButton>
		</MenuItemStyles>
	);
};

export default MenuItem;

const MenuItemStyles = styled.div`
	width: 200px;
	margin-bottom: 4rem;
`;

const MenuHeading = styled.p`
	text-align: left;
	font: normal normal bold 14px/42px DIN Condensed;
	letter-spacing: 0.14px;
	color: #333333;
`;

const MenuBody = styled.p`
	text-align: left;
	font: normal normal normal 15px/20px Gill Sans;
	letter-spacing: 0.15px;
	color: #767676;
	padding: 1rem 0 2rem 0;
`;

const PriceButton = styled.button`
	background-color: #fff;
	border: 2px solid #ffdac9;

	padding: 0.5rem 1rem;
	font-family: DIN Condensed;
	font-weight: bold;
	line-height: 1rem;
	font-size: 1rem;
`;
