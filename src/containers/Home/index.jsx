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

	const listsOptions = lists.map((list) => ({ id: list.id, name: list.name, link: `/lists/${list.id}` }));

	return (
		<>
			<Lists options={listsOptions} onDelete={(option) => console.log(`Delete ${option.name}`)} />

			<AddItemIcon title="Add list" placeholder="List name" onSubmit={handleSubmit} />
		</>
	);
}

export default Home;
