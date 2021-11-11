import React from "react";
import styled from "styled-components";
import PhotoCard from "../../components/app/PhotoCard/PhotoCard";
import StrikeThrough from "../../components/app/StrikeThrough/StrikeThrough";
import Button from "../../components/core/Button/Button";

const CommunitySection = () => {
	const item01 = {
		title: "@buzzfeedfood",
		description:
			"It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto",
		image: "/picture-1.jpg",
		altText: "Picture 1",
		commentCount: 60,
		likeCount: "14.7K",
		flip: false,
	};

	const item02 = {
		title: "@love_food",
		description:
			"Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood",
		image: "/picture-2.jpg",
		altText: "Picture 2",
		commentCount: 789,
		likeCount: "99.7K",
		flip: true,
	};

	const item03 = {
		title: "@buzzfeedfood",
		description:
			"Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)",
		image: "/picture-3.jpg",
		altText: "Picture 3",
		commentCount: 152,
		likeCount: "18.2K",
		flip: false,
	};

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
				<PhotoCard {...item01} />
			</Wrapper1>
			<Wrapper2>
				<PhotoCard {...item02} />
			</Wrapper2>
			<Wrapper3>
				<PhotoCard {...item03} />
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
	left: 48%;
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
