import React from "react";
import styled from "styled-components";

const Button = () => {
	return <ButtonStyles>KNOW MORE</ButtonStyles>;
};

export default Button;

const ButtonStyles = styled.button`
	border: none;
	display: flex;
	font: normal normal bold 18px/36px DIN Condensed;
	letter-spacing: 0.18px;
	color: #333333;
	padding: 0 1rem;
	padding-top: 0.3rem;
	background: #ffdac9 0% 0% no-repeat padding-box;
`;
