import React from "react";
import styled from "styled-components";
import MenuItem from "../../components/app/MenuItem/MenuItem";
import StrikeThrough from "../../components/app/StrikeThrough/StrikeThrough";
import Button from "../../components/core/Button/Button";

const OurMenuSection = () => {
	return (
		<OurMenuSectionStyles>
			<HeadingSection>
				<StrikeThroughContainer>
					<h1>OUR MENU</h1>
					<StrikeThrough />
				</StrikeThroughContainer>
				<Button></Button>
			</HeadingSection>

			<MenuWrapper>
				<MenuSpider>
					<SectionTitle>STARTERS</SectionTitle>
					<MenuItem />
					<MenuItem />
					<MenuItem />
				</MenuSpider>
				<MenuSpider style={{ paddingTop: "14rem" }}>
					<SectionTitle>
						MAIN <br /> COURSES
					</SectionTitle>
					<MenuItem />
					<MenuItem />
				</MenuSpider>
				<MenuSpider style={{ paddingTop: "8rem" }}>
					<SectionTitle>SIDES</SectionTitle>
					<MenuItem />
					<MenuItem />
				</MenuSpider>
				<MenuSpider style={{ paddingTop: "4rem" }}>
					<SectionTitle>DESSERTS</SectionTitle>
					<MenuItem />
					<MenuItem />
					<MenuItem />
				</MenuSpider>
			</MenuWrapper>
		</OurMenuSectionStyles>
	);
};

export default OurMenuSection;

const OurMenuSectionStyles = styled.div`
	background-color: #f8f8f8;
	height: 130vh;
`;

const SectionTitle = styled.div`
	text-align: left;
	font: normal normal bold 62px/52px DIN Condensed;
	letter-spacing: 0px;
	color: #333333;
`;

const MenuSpider = styled.div``;

const MenuWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	padding: 4rem;
`;

const HeadingSection = styled.div`
	padding-top: 6rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	h1 {
		font: normal normal bold 62px/52px DIN Condensed;
		letter-spacing: 0px;
		color: #333333;
	}
`;

const TitleSection = styled.div`
	margin-top: 80px;
	/* margin-left: 420px; */

	position: absolute;
	left: 25%;
	text-align: left;
	font: normal normal bold 32px/52px DIN Condensed;
	letter-spacing: 0px;
	color: #333333;
`;

const StrikeThroughContainer = styled.div`
	color: #333333;
	position: relative;
`;
