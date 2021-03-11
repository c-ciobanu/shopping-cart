import { useParams } from "react-router-dom";

export default function List(): JSX.Element {
	const { id } = useParams<{ id: string }>();

	return <div>List {id}</div>;
}
