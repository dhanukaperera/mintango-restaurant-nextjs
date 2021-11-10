import React from "react";
import styled from "styled-components";

import Photo from "./Photo";
import PhotoInfo from "./PhotoInfo";

const PhotoCard = () => {
	return (
		<PhotoCardStyles>
			<Photo />
			<PhotoInfo />
		</PhotoCardStyles>
	);
};

export default PhotoCard;

const PhotoCardStyles = styled.div`
	display: flex;
	width: 525px;
	justify-content: space-between;
	flex-direction: row;
`;
