import React from "react";
import styled from "styled-components";

const StrikeThrough = () => {
	return <StrikeThroughStyles />;
};

export default StrikeThrough;

const StrikeThroughStyles = styled.div`
	position: absolute;
	top: 12px;
	left: 0;
	width: 280px;
	max-height: 6px;
	border: 4px solid #ffdac9;
	z-index: -1;
	margin-left: -26px;
`;
