import React from "react";
import styled from "styled-components";
import Image from "next/image";

const PhotoInfo = ({ title, description, commentCount, likeCount }) => {
	return (
		<PhotoInfoStyles>
			<PostTitle>{title}</PostTitle>
			<PostBody>{description}</PostBody>
			<PostFooter>
				<>
					<Image
						src="/comment-btn.jpg"
						objectFit="scale-down"
						alt="me"
						width="12px"
						height="12px"
					/>
				</>

				<CountText>{commentCount} </CountText>
				<>
					<Image
						src="/heart-btn.jpg"
						objectFit="scale-down"
						alt="me"
						width="12px"
						height="12px"
					/>
				</>
				<CountText> {likeCount}</CountText>
			</PostFooter>
		</PhotoInfoStyles>
	);
};

export default PhotoInfo;

const PhotoInfoStyles = styled.div`
	height: 250px;
	width: 250px;
	background: #ffffff 0% 0% no-repeat padding-box;
	box-shadow: 0px 15px 50px #0000000f;
	padding: 30px;
`;

const PostTitle = styled.p`
	text-align: left;
	font: normal normal bold 22px/52px DIN Condensed;
	letter-spacing: 0.44px;
	color: #333333;
`;

const PostBody = styled.p`
	text-align: left;
	font: normal normal normal 15px/20px Gill Sans;
	letter-spacing: 0.15px;
	color: #333333;
`;

const PostFooter = styled.div`
	display: flex;
	justify-content: right;
`;

const CountText = styled.p`
	text-align: left;
	font: normal normal bold 14px/42px DIN Condensed;
	letter-spacing: 0.14px;
	color: #333333;
	padding: 0 5px;
`;
