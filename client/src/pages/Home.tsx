import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "stitches.config";
import { ReactComponent as MoreIcon } from "assets/svg/more.svg";
import InlineEntityCreation from "components/InlineEntityCreation";
import Stack from "components/Stack";
import Dropdown from "components/Dropdown";

const StyledListItem = styled("li", {
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
						<StyledListItem key={`shoppingList${id}`}>
							<StyledLink to={`/lists/${id}`}>{name}</StyledLink>

							<Dropdown
								trigger={<MoreIcon />}
								items={[{ text: "Delete", onClick: () => deleteShoppingList(id) }]}
								contentProps={{ side: "left" }}
							/>
						</StyledListItem>
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
