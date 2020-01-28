import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addList } from "store/slices/lists";

import AddItemIcon from "components/AddItemIcon";
import Lists from "components/Lists";

function Home() {
	const dispatch = useDispatch();
	const lists = useSelector((state) => state.lists);

	const handleSubmit = (value) => {
		dispatch(addList(value));
	};

	const listNames = lists.map((list) => list.name);

	return (
		<>
			<Lists options={listNames} onDelete={(option) => console.log(`Delete ${option}`)} />

			<AddItemIcon title="Add list" placeholder="List name" onSubmit={handleSubmit} />
		</>
	);
}

export default Home;
