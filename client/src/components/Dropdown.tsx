import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { styled } from "stitches.config";

const StyledTrigger = styled(DropdownMenu.Trigger, {
	padding: 0,
	border: 0,
	outline: "none",
	display: "flex"
});

const StyledContent = styled(DropdownMenu.Content, {
	backgroundColor: "white",
	border: "1px solid lightgrey",
	minWidth: "150px"
});

const StyledItem = styled(DropdownMenu.Item, {
	padding: "5px",
	cursor: "default",

	"&:focus": {
		outline: "none",
		backgroundColor: "lightgrey",
		color: "white"
	}
});

type Props = {
	trigger: React.ReactNode;
	items: Array<{ text: string; onClick: () => void }>;
	contentProps?: Omit<React.ComponentProps<typeof DropdownMenu.Content>, "as">;
};

export default function Dropdown(props: Props): JSX.Element {
	const { trigger, items, contentProps } = props;

	return (
		<DropdownMenu.Root>
			<StyledTrigger>{trigger}</StyledTrigger>

			<StyledContent {...contentProps}>
				{items.map((item) => (
					<StyledItem onSelect={item.onClick}>{item.text}</StyledItem>
				))}
			</StyledContent>
		</DropdownMenu.Root>
	);
}
