import React, { useState } from "react";

import FormInput from "components/FormInput";
import Items from "components/Items";

function List() {
	const [products, setProducts] = useState([]);

	const handleSubmit = (value) => {
		setProducts(products.concat({ name: value, bought: false }));
	};

	return (
		<>
			<FormInput onSubmit={handleSubmit} placeholder="Add item" />

			<Items options={products} onChange={() => {}} onDelete={() => {}} />
		</>
	);
}

export default List;
