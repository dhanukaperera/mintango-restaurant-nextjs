import React from "react";
import styled from "styled-components";

import Photo from "./Photo";
import PhotoInfo from "./PhotoInfo";

const PhotoCard = ({
	title,
	description,
	image,
	altText,
	commentCount,
	likeCount,
	flip,
}) => {
	return (
		<PhotoCardStyles
			flip={flip}
			data-aos="fade-up"
			data-aos-offset="0"
			data-aos-duration="1000"
			data-aos-anchor-placement="center-bottom"
		>
			<Photo flip={flip} image={image} altText={altText} />
			<PhotoInfo
				title={title}
				description={description}
				commentCount={commentCount}
				likeCount={likeCount}
			/>
		</PhotoCardStyles>
	);
};

export default PhotoCard;

const PhotoCardStyles = styled.div`
	display: flex;
	width: 525px;
	justify-content: space-between;
	flex-direction: ${(props) => (props?.flip ? "row-reverse" : "row")};
`;
