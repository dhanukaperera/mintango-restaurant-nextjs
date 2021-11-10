import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Photo = ({ imagePath, altText }) => {
	return (
		<PhotoContainer>
			<InstagramPhotoBtn
				src="/instagram-btn.jpg"
				alt="me"
				width="60"
				height="60"
			/>
			<Image
				src={imagePath ? imagePath : "/picture-1.jpg"}
				alt={altText ? altText : "Picture"}
				width="222"
				height="222"
			/>
		</PhotoContainer>
	);
};

export default Photo;

const PhotoContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 250px;
	width: 250px;
	box-shadow: 0px 15px 50px #0000000f;
	position: relative;
	z-index: 1;
`;

const InstagramPhotoBtn = styled.img`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 2;
`;
