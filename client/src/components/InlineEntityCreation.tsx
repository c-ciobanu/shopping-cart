import { styled } from "stitches.config";
import { ReactComponent as PlusIcon } from "assets/svg/plus.svg";
import { ReactComponent as CheckIcon } from "assets/svg/check.svg";
import { useState } from "react";
import { Field, Form, Formik } from "formik";

const StyledDiv = styled("div", {
	display: "flex",
	justifyContent: "flex-end"
});

const StyledButton = styled("button", {
	width: "35px",
	height: "35px",
	padding: 0,
	backgroundColor: "limegreen",
	color: "white",
	border: 0,
	borderRadius: "50%",
	outline: "none",
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
});

const StyledForm = styled(Form, {
	display: "grid",
	gridTemplateColumns: "1fr auto"
});

const StyledField = styled(Field, {
	width: "100%",
	height: "35px",
	padding: 0,
	border: 0,
	borderBottom: "1px solid limegreen",
	color: "rgba(0, 0, 0, 0.87)",
	outline: "none"
});

type Props = {
	onSubmit: (inputValue: string) => void;
	title: string;
	placeholder?: string;
};

type FormValues = {
	name: string;
};

export default function InlineEntityCreation(props: Props): JSX.Element {
	const { onSubmit, placeholder, title } = props;
	const [popoverOpen, setPopoverOpen] = useState(false);

	const handleFormSubmit = async (values: FormValues) => {
		const { name } = values;

		await onSubmit(name);

		setPopoverOpen(false);
	};

	const handleFieldBlur = (e: { relatedTarget: null | HTMLButtonElement | HTMLElement }) => {
		const { relatedTarget } = e;

		if (!relatedTarget || relatedTarget.title !== title) {
			setPopoverOpen(false);
		}
	};

	return popoverOpen ? (
		<Formik initialValues={{ name: "" }} onSubmit={handleFormSubmit}>
			<StyledForm>
				<StyledField id="name" name="name" placeholder={placeholder} onBlur={handleFieldBlur} autoFocus required />

				<StyledButton type="submit" title={title}>
					<CheckIcon />
				</StyledButton>
			</StyledForm>
		</Formik>
	) : (
		<StyledDiv>
			<StyledButton type="button" title={title} onClick={() => setPopoverOpen(true)}>
				<PlusIcon />
			</StyledButton>
		</StyledDiv>
	);
}
