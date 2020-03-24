import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addList, removeList } from "store/slices/lists";

import AddItemIcon from "components/AddItemIcon";
import Lists from "components/Lists";
import Spacer from "components/Spacer";

function Home() {
	const dispatch = useDispatch();
	const lists = useSelector((state) => state.lists);

	const handleSubmit = (value) => {
		dispatch(addList(value));
	};

	const handleListRemoval = (list) => {
		dispatch(removeList(list.id));
	};

	const listsOptions = lists.map((list) => ({ id: list.id, name: list.name, link: `/lists/${list.id}` }));

	return (
		<>
			<Lists options={listsOptions} onDelete={handleListRemoval} />

			<Spacer size="base" />

			<AddItemIcon title="Add list" placeholder="List name" onSubmit={handleSubmit} />
		</>
	);
}

export default Home;
