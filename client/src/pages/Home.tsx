import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as MoreIcon } from "assets/svg/more.svg";
import Dropdown from "components/Dropdown";
import InlineEntityCreation from "components/InlineEntityCreation";
import Stack from "components/Stack";
import { styled } from "stitches.config";
import { addShoppingList, removeShoppingList, selectShoppingLists } from "store/slices/shoppingLists";

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
	const dispatch = useDispatch();
	const shoppingLists = useSelector(selectShoppingLists);

	return (
		<Stack spacing="medium">
			{shoppingLists.length ? (
				<Stack spacing="small">
					{shoppingLists.map(({ id, name }) => (
						<StyledListItem key={`shoppingList${id}`}>
							<StyledLink to={`/lists/${id}`}>{name}</StyledLink>

							<Dropdown
								trigger={<MoreIcon />}
								items={[{ text: "Delete", onClick: () => dispatch(removeShoppingList(id)) }]}
								contentProps={{ side: "left" }}
							/>
						</StyledListItem>
					))}
				</Stack>
			) : null}

			<InlineEntityCreation
				title="Create new shopping list"
				placeholder="New shopping list name"
				onSubmit={(name) => dispatch(addShoppingList(name))}
			/>
		</Stack>
	);
}
