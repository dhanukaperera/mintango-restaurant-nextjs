import React from "react";
import styled from "styled-components";
import Image from "next/image";

const HomeSection = () => {
	return (
		<HomeSectionStyles>
			<div>
				<h2>THE BEST FOODIE</h2>
				<h1>EXPERIENCE</h1>
				<h3>NOW IN LONDON</h3>
			</div>
		</HomeSectionStyles>
	);
};

export default HomeSection;

const HomeSectionStyles = styled.div`
	background: #ffdac9;
	background-image: url("./hero.jpg");
	background-repeat: no-repeat;
	background-size: 100vh;
	background-position: top;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;

	h1,
	h2,
	h3 {
		color: #ffffff;
		text-align: center;
		letter-spacing: 0px;
	}

	h1 {
		font: normal normal bold 115px/95px DIN Condensed;
	}

	h2 {
		font: normal normal bold 82px/95px DIN Condensed;
	}

	h3 {
		font: normal normal bold 35px/52px DIN Condensed;
	}
`;
