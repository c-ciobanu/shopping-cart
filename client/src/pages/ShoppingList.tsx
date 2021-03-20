import * as Checkbox from "@radix-ui/react-checkbox";
import { Formik, Form, Field, FormikHelpers } from "formik";
import { useState } from "react";

import { ReactComponent as CheckIcon } from "assets/svg/check.svg";
import { ReactComponent as MoreIcon } from "assets/svg/more.svg";
import Dropdown from "components/Dropdown";
import Stack from "components/Stack";
import { styled } from "stitches.config";

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
	listName: string;
};

export default function ShoppingList(): JSX.Element {
	const [items, setItems] = useState<Array<{ id: number; name: string }>>([]);

	const addShoppingListItem = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
		const { listName } = values;

		setItems((state) => state.concat({ id: (state[state.length - 1]?.id ?? 0) + 1, name: listName }));

		actions.resetForm();
	};

	const deleteShoppingListItem = (id: number) => {
		setItems((state) => state.filter((item) => item.id !== id));
	};

	return (
		<>
			<Formik initialValues={{ listName: "" }} onSubmit={addShoppingListItem}>
				<Form>
					<StyledField id="listName" name="listName" placeholder="Add new item" required />
				</Form>
			</Formik>

			{items.length ? (
				<StyledStack>
					{items.map(({ id, name }) => (
						<StyledListItem key={`listItem${id}`}>
							<StyledCheckbox id={`listItem${id}`}>
								<Checkbox.Indicator as={CheckIcon} />
							</StyledCheckbox>

							<StyledLabel htmlFor={`listItem${id}`}>{name}</StyledLabel>

							<Dropdown
								trigger={<MoreIcon />}
								items={[{ text: "Delete", onClick: () => deleteShoppingListItem(id) }]}
								contentProps={{ side: "left" }}
							/>
						</StyledListItem>
					))}
				</StyledStack>
			) : null}
		</>
	);
}
