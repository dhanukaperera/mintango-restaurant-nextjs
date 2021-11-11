import React from "react";
import styled from "styled-components";
import Image from "next/image";

const LocationSection = () => {
	return (
		<LocationSectionStyles>
			<LocationTitle>
				<h1>LOCATION</h1>
				<p>
					12 Upper St. Martin’s Lane <br /> WC2H 9FB, London{" "}
				</p>
			</LocationTitle>
		</LocationSectionStyles>
	);
};

export default LocationSection;

const LocationSectionStyles = styled.div`
	height: 500px;
	background-image: url("/map.jpg");
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
`;

const LocationTitle = styled.div`
	color: #333333;
	text-align: left;
	background-color: #fff;
	position: absolute;
	top: 20%;
	left: 5%;

	padding: 2rem;

	h1 {
		margin-top: -3rem;
		font: normal normal bold 62px/52px DIN Condensed;
		letter-spacing: 0px;
	}

	p {
		font: normal normal normal 15px/20px Gill Sans;
		letter-spacing: 0.15px;
	}
`;
