import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { theme } from "../theme/Theme";
import AOS from "aos";
import "aos/dist/aos.css";
export default class MyApp extends App {
	componentDidMount() {
		AOS.init({
			duration: 2000,
		});
	}
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Component {...pageProps} />
				<GlobalStyles />
			</ThemeProvider>
		);
	}
}
