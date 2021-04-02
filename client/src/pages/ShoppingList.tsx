import * as Checkbox from "@radix-ui/react-checkbox";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import { ReactComponent as CheckIcon } from "assets/svg/check.svg";
import { ReactComponent as MoreIcon } from "assets/svg/more.svg";
import Dropdown from "components/Dropdown";
import Stack from "components/Stack";
import { styled } from "stitches.config";
import {
	selectShoppingList,
	addShoppingListItem,
	removeShoppingListItem,
	toggleShoppingListItem
} from "store/slices/shoppingLists";

const StyledField = styled(Field, {
	width: "100%",
	padding: "10px",
	borderRadius: "3px",
	border: "1px solid rgba(0, 0, 0, 0.12)",
	color: "rgba(0, 0, 0, 0.87)"
});

const StyledStack = styled(Stack, {
	marginTop: "20px"
});

const StyledListItem = styled("li", {
	display: "grid",
	gridTemplateColumns: "auto 1fr auto",
	columnGap: "10px",
	alignItems: "center",
	padding: "10px 0",
	borderBottom: "1px solid rgba(0, 0, 0, 0.12)",

	"&:last-child": {
		borderBottom: 0
	}
});

const StyledCheckbox = styled(Checkbox.Root, {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "16px",
	height: "16px",
	padding: 0,
	borderRadius: "3px",
	transition: "all 0.15s",
	cursor: "pointer",

	"&[data-state='checked']": {
		transform: "rotate(45deg)",

		svg: {
			transform: "rotate(-45deg)",
			color: "limegreen"
		}
	}
});

const StyledLabel = styled("label", {
	font: "16px 'Open Sans', Arial, sans-serif",
	cursor: "pointer"
});

type FormValues = {
	itemName: string;
};

export default function ShoppingList(): JSX.Element {
	const { id } = useParams<{ id: string }>();
	const shoppingListId = JSON.parse(id);
	const shoppingList = useSelector(selectShoppingList)(shoppingListId);
	const dispatch = useDispatch();

	if (!shoppingList) {
		return <Redirect to="/" />;
	}

	const handleFormSubmit = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
		const { itemName } = values;

		dispatch(addShoppingListItem({ shoppingListId, itemName }));

		actions.resetForm();
	};

	return (
		<>
			<Formik initialValues={{ itemName: "" }} onSubmit={handleFormSubmit}>
				<Form>
					<StyledField id="itemName" name="itemName" placeholder="Add new item" required />
				</Form>
			</Formik>

			{shoppingList.items.length ? (
				<StyledStack>
					{shoppingList.items.map(({ id, name, checked }) => (
						<StyledListItem key={`listItem${id}`}>
							<StyledCheckbox
								id={`listItem${id}`}
								defaultChecked={checked}
								onCheckedChange={() => dispatch(toggleShoppingListItem({ shoppingListId, itemId: id }))}>
								<Checkbox.Indicator as={CheckIcon} />
							</StyledCheckbox>

							<StyledLabel htmlFor={`listItem${id}`}>{name}</StyledLabel>

							<Dropdown
								trigger={<MoreIcon />}
								items={[
									{ text: "Delete", onClick: () => dispatch(removeShoppingListItem({ shoppingListId, itemId: id })) }
								]}
								contentProps={{ side: "left" }}
							/>
						</StyledListItem>
					))}
				</StyledStack>
			) : null}
		</>
	);
}
