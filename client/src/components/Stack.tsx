import { styled } from "stitches.config";

const Stack = styled("ul", {
	display: "grid",
	shoppingListstyleType: "none",
	margin: 0,
	padding: 0,

	variants: {
		spacing: {
			none: {
				rowGap: 0
			},
			small: {
				rowGap: "$small"
			},
			medium: {
				rowGap: "$medium"
			},
			large: {
				rowGap: "$large"
			}
		}
	}
});

Stack.defaultProps = {
	spacing: "none"
};

export default Stack;
