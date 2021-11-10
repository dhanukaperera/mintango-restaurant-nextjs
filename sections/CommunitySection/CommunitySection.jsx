import React from "react";
import styled from "styled-components";
import PhotoCard from "../../components/app/PhotoCard/PhotoCard";
import StrikeThrough from "../../components/app/StrikeThrough/StrikeThrough";
import Button from "../../components/core/Button/Button";

const CommunitySection = () => {
	return (
		<CommunitySectionStyles>
			<TitleSection>
				<h1>MEET OUR</h1>

				<StrikeThroughContainer>
					<h1>COMMUNITY</h1>
					<StrikeThrough />
				</StrikeThroughContainer>
				<Button />
				<TitleBody>
					LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN TORNA
					ENTALTO
				</TitleBody>
			</TitleSection>

			<Wrapper1>
				<PhotoCard />
			</Wrapper1>

			<Wrapper2>
				<PhotoCard />
			</Wrapper2>

			<Wrapper3>
				<PhotoCard />
			</Wrapper3>
			<InfoText>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.
			</InfoText>
		</CommunitySectionStyles>
	);
};

export default CommunitySection;

const CommunitySectionStyles = styled.div`
	height: 130vh;
	position: relative;
	background: url("/community-bg.jpg");
	background-repeat: no-repeat;
	background-position: center;
	background-size: 130vh;
`;

const TitleSection = styled.div`
	margin-top: 80px;
	/* margin-left: 420px; */

	position: absolute;
	left: 30%;
	text-align: left;
	font: normal normal bold 32px/52px DIN Condensed;
	letter-spacing: 0px;
	color: #333333;
`;

const StrikeThroughContainer = styled.div`
	color: #333333;
	position: relative;
`;

const TitleBody = styled.div`
	margin-top: 40px;
	text-align: left;
	font: normal normal bold 22px/26px DIN Condensed;
	letter-spacing: 0.44px;
	color: #333333;
	width: 200px;
`;

const Wrapper1 = styled.div`
	position: absolute;
	top: 15%;
	left: 50%;
	z-index: 2;
`;

const Wrapper2 = styled.div`
	position: absolute;
	top: 40%;
	left: 5%;
`;

const Wrapper3 = styled.div`
	position: absolute;
	top: 66%;
	left: 50%;
`;

const InfoText = styled.div`
	text-align: left;
	font: normal normal normal 15px/20px Gill Sans;
	letter-spacing: 0.15px;
	color: #333333;
	width: 192px;
	position: absolute;
	left: 5%;
	top: 72%;
`;
