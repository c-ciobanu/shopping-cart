import { createStyled } from "@stitches/react";

export const { styled, css } = createStyled({
	prefix: "",
	tokens: {
		colors: {},
		fonts: {},
		fontSizes: {},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		radii: {},
		sizes: {},
		space: {
			$small: "10px",
			$medium: "20px",
			$large: "30px"
		},
		zIndices: {}
	},
	breakpoints: {},
	utils: {}
});
