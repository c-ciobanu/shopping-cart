import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "stitches.config";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactComponent as MoreIcon } from "assets/svg/more.svg";
import InlineEntityCreation from "components/InlineEntityCreation";

const Stack = styled("ul", {
	display: "grid",
	listStyleType: "none",
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

const ShoppingList = styled("li", {
	border: "1px solid lightgrey",
	padding: "10px",
	display: "grid",
	gridTemplateColumns: "1fr auto",
	columnGap: "10px"
});

const StyledLink = styled(Link, {
	color: "inherit",
	textDecoration: "none"
});

const StyledDropdownTrigger = styled(DropdownMenu.Trigger, {
	padding: 0,
	border: 0,
	outline: "none",
	display: "flex"
});

const StyledDropdownContent = styled(DropdownMenu.Content, {
	backgroundColor: "white",
	border: "1px solid lightgrey",
	minWidth: "150px"
});

const StyledDropdownItem = styled(DropdownMenu.Item, {
	padding: "5px",
	cursor: "default",

	"&:focus": {
		outline: "none",
		backgroundColor: "lightgrey",
		color: "white"
	}
});

export default function Home(): JSX.Element {
	const [shoppingLists, setShoppingLists] = useState<Array<{ id: number; name: string }>>([]);

	const deleteShoppingList = (id: number) => {
		setShoppingLists((state) => state.filter((item) => item.id !== id));
	};

	const addShoppingList = (name: string) => {
		setShoppingLists((state) => state.concat({ id: (state[state.length - 1]?.id ?? 0) + 1, name }));
	};

	return (
		<Stack spacing="medium">
			{shoppingLists.length ? (
				<Stack spacing="small">
					{shoppingLists.map(({ id, name }) => (
						<ShoppingList key={`list-${id}`}>
							<StyledLink to={`/lists/${id}`}>{name}</StyledLink>

							<DropdownMenu.Root>
								<StyledDropdownTrigger>
									<MoreIcon />
								</StyledDropdownTrigger>

								<StyledDropdownContent side="left">
									<StyledDropdownItem onSelect={() => deleteShoppingList(id)}>Delete</StyledDropdownItem>
								</StyledDropdownContent>
							</DropdownMenu.Root>
						</ShoppingList>
					))}
				</Stack>
			) : null}

			<InlineEntityCreation
				title="Create new shopping list"
				placeholder="New shopping list name"
				onSubmit={addShoppingList}
			/>
		</Stack>
	);
}
