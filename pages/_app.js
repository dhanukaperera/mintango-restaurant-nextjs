import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../theme/GlobalStyles";
import { theme } from "../theme/Theme";

export default class MyApp extends App {
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
